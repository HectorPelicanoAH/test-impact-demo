import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { TestExecution, ExecutionMode } from './src/types';
import { suggestions } from './src/suggestions';

interface RecordedResult { testId: string; status: 'passed' | 'failed'; durationMs: number; output?: string }
interface RecordedRun { runnerDurationMs: number; waitVisibleMs: number; results: RecordedResult[] }
interface RecordedJourney { title: string; runs: Record<ExecutionMode, RecordedRun> }
interface RecordingData { schemaVersion: 1; sourceDocument: string; capturedAt: string; journeys: Record<string, RecordedJourney> }

const data = JSON.parse(readFileSync(resolve(process.cwd(), 'apps/demo/recorded-executions.json'), 'utf8')) as RecordingData;
const catalogue = JSON.parse(readFileSync(resolve(process.cwd(), 'impact/catalogue.json'), 'utf8')) as { id: string; name: string; kind: TestExecution['kind'] }[];

export interface RecordingMatch {
  journeyId: string;
  title: string;
  runnerDurationMs: number;
  waitVisibleMs: number;
  results: TestExecution[];
}

export function findRecordedExecution(edits: { path: string; content: string }[], mode: ExecutionMode, baseline: Record<string, string>): RecordingMatch | undefined {
  if (edits.length !== 1) return undefined;
  const edit = edits[0]!;
  const journey = suggestions.find(item => item.path === edit.path && edit.content === baseline[item.path]!.replace(item.before, item.after));
  if (!journey) return undefined;
  const recordedJourney = data.journeys[journey.id];
  const run = recordedJourney?.runs[mode];
  if (!recordedJourney || !run) return undefined;
  return {
    journeyId: journey.id,
    title: recordedJourney.title,
    runnerDurationMs: run.runnerDurationMs,
    waitVisibleMs: run.waitVisibleMs,
    results: run.results.map(result => {
      const metadata = catalogue.find(candidate => candidate.id === result.testId)!;
      return { testId: result.testId, name: metadata.name.replace(/^\[[^\]]+\]\s*/, ''), kind: metadata.kind, status: result.status, durationMs: result.durationMs, output: result.output };
    }),
  };
}
