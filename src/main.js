const MIN_MS = 350;
const MAX_MS = 1450;
const tests = [
  { id: 'FU-01', name: 'normalizeEmail trims whitespace', type: 'Frontend unit', tags: ['normalizeEmail', 'LoginForm'] },
  { id: 'C-04', name: 'LoginForm renders validation error', type: 'Component', tags: ['LoginForm', 'POST /login'] },
  { id: 'C-07', name: 'LoginButton submits credentials', type: 'Component', tags: ['LoginButton', 'LoginForm'] },
  { id: 'BU-12', name: 'User.authenticate rejects wrong password', type: 'Backend unit', tags: ['User.authenticate', 'POST /login'] },
  { id: 'I-03', name: 'POST /login returns 401', type: 'HTTP integration', tags: ['POST /login', 'User.authenticate'] },
  { id: 'I-06', name: 'POST /login returns session', type: 'HTTP integration', tags: ['POST /login', 'User.authenticate'] },
  { id: 'CT-02', name: 'Login contract matches client', type: 'Contract', tags: ['POST /login', 'AuthClient'] },
  { id: 'E-01', name: 'User can log in and reach home', type: 'Browser E2E', tags: ['LoginButton', 'POST /login', 'HomePage'] },
];
const changes = [
  { id: 'LoginButton', label: 'LoginButton', file: 'frontend/components/LoginButton.tsx', risk: 'Bajo', tags: ['LoginButton'] },
  { id: 'normalizeEmail', label: 'normalizeEmail', file: 'shared/normalizeEmail.ts', risk: 'Medio', tags: ['normalizeEmail'] },
  { id: 'User.authenticate', label: 'User.authenticate', file: 'domain/User.ts', risk: 'Alto', tags: ['User.authenticate'] },
  { id: 'POST /login', label: 'POST /login', file: 'backend/routes/login.ts', risk: 'Alto', tags: ['POST /login'] },
];
let selected = null;
const $ = (id) => document.getElementById(id);
const changeList = $('change-list');
changes.forEach((change, i) => { const button = document.createElement('button'); button.className = 'change-card'; button.innerHTML = `<span class="change-icon">${i === 3 ? '↔' : i === 2 ? '◇' : i === 1 ? 'ƒ' : '◉'}</span><span><b>${change.label}</b><small>${change.file}</small></span><span class="chevron">→</span>`; button.onclick = () => selectChange(change, button); changeList.append(button); });
function selectChange(change, button) { selected = change; document.querySelectorAll('.change-card').forEach((el) => el.classList.remove('selected')); button.classList.add('selected'); const impacted = impactedTests(); $('selected-count').textContent = impacted.length; $('estimated-time').textContent = formatTime(impacted.reduce((sum) => sum + 700, 0)); $('risk-level').textContent = change.risk; $('coverage-label').textContent = `${Math.round(impacted.length / tests.length * 100)}%`; $('coverage-bar').style.width = `${impacted.length / tests.length * 100}%`; $('impact-copy').textContent = `${impacted.length} de ${tests.length} tests están conectados con este cambio.`; $('run-button').disabled = false; renderGraph(); renderResults(impacted, false); }
function impactedTests() { return tests.filter((test) => test.tags.some((tag) => selected?.tags.includes(tag))); }
function formatTime(ms) { return ms < 1000 ? `${ms} ms` : `${(ms / 1000).toFixed(1)} s`; }
function renderGraph() { const path = selected?.id === 'POST /login' ? ['Cambio', 'Contrato', 'Backend', 'Frontend', 'E2E'] : ['Cambio', 'Módulo', 'Componentes', 'E2E']; $('graph-view').innerHTML = path.map((node, i) => `<div class="node ${i === 0 ? 'active' : ''}"><span>${i + 1}</span>${node}</div>`).join('<div class="connector">→</div>'); }
function renderResults(items, finished) { $('test-results').innerHTML = items.map((test) => `<div class="test-row"><span class="test-state ${finished ? 'pass' : 'pending'}">${finished ? '✓' : '·'}</span><span class="test-name"><b>${test.name}</b><small>${test.id} · ${test.type}</small></span><span class="test-duration">${finished ? formatTime(test.duration) : 'pendiente'}</span></div>`).join(''); }
$('run-button').onclick = async () => { if (!selected) return; const items = impactedTests(); $('run-button').disabled = true; $('run-status').textContent = 'EJECUTANDO'; $('run-status').className = 'status running'; $('result-copy').textContent = 'Simulando la ejecución de los tests afectados…'; items.forEach((test) => { test.duration = Math.floor(MIN_MS + Math.random() * (MAX_MS - MIN_MS + 1)); }); renderResults(items, true); await new Promise((resolve) => setTimeout(resolve, 500)); $('run-status').textContent = 'COMPLETADO'; $('run-status').className = 'status complete'; $('result-copy').textContent = `${items.length} tests simulados correctamente. Duraciones generadas entre ${MIN_MS} y ${MAX_MS} ms.`; $('run-button').disabled = false; };
renderGraph();
