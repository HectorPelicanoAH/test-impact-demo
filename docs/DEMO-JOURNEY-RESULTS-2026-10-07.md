# Resultados reales de los cuatro recorridos de demo

Captura: 7 de octubre de 2026 (Europe/Madrid).
Rama: `main` · commit: `ee682b5542269cee12679f2f98545c6d1d660b86` · snapshot: `d03a942c8a92f5c0f03b56dc`.
Aplicación utilizada: `http://127.0.0.1:5175` con Chromium y los runners reales del proyecto.
Captura iniciada: 2026-10-07T07:01:35.022Z.

## Cómo leer estos tiempos

**Tiempo del runner** es `durationMs` informado por el servidor: abarca la ejecución de Vitest y Playwright. **Espera visible** mide desde el clic hasta que la interfaz recibió y mostró un estado final; incluye preparar la copia aislada de fuentes, instalar dependencias en modo offline, ejecutar los runners y el sondeo de estado de la web. Esta segunda medida es la referencia más cercana a la espera de una demo. Las duraciones por test proceden de los informes JSON de Vitest/Playwright.

Los cuatro cambios son mutaciones deliberadas. Por eso sus suites pueden terminar en `failed`: los fallos son evidencia del impacto que produjo cada cambio, no fallos inesperados de la captura. Las rutas de carpetas temporales se han normalizado a `<overlay>` para que las trazas se puedan compartir.

## Resumen

| Recorrido | Tests seleccionados | Ejecución | Resultado | Tests con fallo | Runner | Espera visible |
|---|---:|---|---|---:|---:|---:|
| Change LoginButton | 4 / 39 | Selected (4) | failed | 3 | 53.3 s | 60.5 s |
| Change LoginButton | 4 / 39 | Full suite (39) | failed | 8 | 51.7 s | 57.5 s |
| Change login normalization | 11 / 39 | Selected (11) | failed | 3 | 21.4 s | 26.7 s |
| Change login normalization | 11 / 39 | Full suite (39) | failed | 3 | 22.0 s | 27.5 s |
| Change User.authenticate() | 13 / 39 | Selected (13) | failed | 3 | 11.3 s | 17.5 s |
| Change User.authenticate() | 13 / 39 | Full suite (39) | failed | 3 | 22.2 s | 27.5 s |
| Change POST /login contract | 29 / 39 | Selected (29) | failed | 9 | 26.8 s | 32.6 s |
| Change POST /login contract | 29 / 39 | Full suite (39) | failed | 10 | 26.6 s | 32.3 s |

## Detalle por ejecución

### Change LoginButton
Cambio: `ui` · tests seleccionados por el análisis: **4 / 39**.

#### Selected · FAILED

- Tests ejecutados: 4; fallidos: 3.
- Tiempo del runner: **53.3 s**.
- Espera visible hasta estado final: **60.5 s**.
- Inicio: 2026-10-07T07:01:41.621Z.
- Fallos: C1, C2, E1.

| ID | Estado | Duración medida |
|---|---|---:|
| C1 | failed | 81.1 ms |
| C2 | failed | 5.1 ms |
| C3 | passed | 4.3 ms |
| E1 | failed | 30188.0 ms |

#### Full suite · FAILED

- Tests ejecutados: 39; fallidos: 8.
- Tiempo del runner: **51.7 s**.
- Espera visible hasta estado final: **57.5 s**.
- Inicio: 2026-10-07T07:02:40.553Z.
- Fallos: C1, C2, C4, C5, C6, C7, C8, E1.

| ID | Estado | Duración medida |
|---|---|---:|
| BU1 | passed | 89.4 ms |
| BU10 | passed | 1.7 ms |
| BU11 | passed | 1.5 ms |
| BU12 | passed | 0.3 ms |
| BU13 | passed | 99.6 ms |
| BU14 | passed | 85.9 ms |
| BU15 | passed | 40.5 ms |
| BU16 | passed | 45.2 ms |
| BU17 | passed | 87.8 ms |
| BU2 | passed | 87.4 ms |
| BU3 | passed | 44.0 ms |
| BU4 | passed | 43.5 ms |
| BU5 | passed | 38.5 ms |
| BU6 | passed | 104.0 ms |
| BU7 | passed | 0.2 ms |
| BU8 | passed | 39.0 ms |
| BU9 | passed | 1.0 ms |
| C1 | failed | 76.2 ms |
| C2 | failed | 5.6 ms |
| C3 | passed | 4.1 ms |
| C4 | failed | 174.2 ms |
| C5 | failed | 44.7 ms |
| C6 | failed | 6.8 ms |
| C7 | failed | 54.6 ms |
| C8 | failed | 69.8 ms |
| CT1 | passed | 63.2 ms |
| CT2 | passed | 44.7 ms |
| CT3 | passed | 3.5 ms |
| E1 | failed | 30188.0 ms |
| FU1 | passed | 1.2 ms |
| FU2 | passed | 1.4 ms |
| FU3 | passed | 1.7 ms |
| FU4 | passed | 41.0 ms |
| I1 | passed | 65.1 ms |
| I2 | passed | 40.5 ms |
| I3 | passed | 3.1 ms |
| I4 | passed | 2.3 ms |
| I5 | passed | 4.3 ms |
| I6 | passed | 6.3 ms |

### Change login normalization
Cambio: `frontend` · tests seleccionados por el análisis: **11 / 39**.

#### Selected · FAILED

- Tests ejecutados: 11; fallidos: 3.
- Tiempo del runner: **21.4 s**.
- Espera visible hasta estado final: **26.7 s**.
- Inicio: 2026-10-07T07:03:38.424Z.
- Fallos: C4, FU1, FU2.

| ID | Estado | Duración medida |
|---|---|---:|
| C4 | failed | 187.8 ms |
| C5 | passed | 48.8 ms |
| C7 | passed | 72.2 ms |
| C8 | passed | 81.8 ms |
| CT1 | passed | 55.1 ms |
| CT2 | passed | 39.0 ms |
| CT3 | passed | 3.2 ms |
| E1 | passed | 820.0 ms |
| FU1 | failed | 5.3 ms |
| FU2 | failed | 5.4 ms |
| FU4 | passed | 34.6 ms |

#### Full suite · FAILED

- Tests ejecutados: 39; fallidos: 3.
- Tiempo del runner: **22.0 s**.
- Espera visible hasta estado final: **27.5 s**.
- Inicio: 2026-10-07T07:04:05.280Z.
- Fallos: C4, FU1, FU2.

| ID | Estado | Duración medida |
|---|---|---:|
| BU1 | passed | 91.9 ms |
| BU10 | passed | 1.3 ms |
| BU11 | passed | 0.7 ms |
| BU12 | passed | 0.3 ms |
| BU13 | passed | 90.2 ms |
| BU14 | passed | 83.1 ms |
| BU15 | passed | 41.7 ms |
| BU16 | passed | 47.7 ms |
| BU17 | passed | 83.1 ms |
| BU2 | passed | 84.5 ms |
| BU3 | passed | 38.7 ms |
| BU4 | passed | 45.7 ms |
| BU5 | passed | 42.8 ms |
| BU6 | passed | 95.9 ms |
| BU7 | passed | 0.2 ms |
| BU8 | passed | 44.0 ms |
| BU9 | passed | 1.7 ms |
| C1 | passed | 73.8 ms |
| C2 | passed | 4.2 ms |
| C3 | passed | 4.1 ms |
| C4 | failed | 177.0 ms |
| C5 | passed | 58.4 ms |
| C6 | passed | 13.5 ms |
| C7 | passed | 76.9 ms |
| C8 | passed | 85.1 ms |
| CT1 | passed | 74.7 ms |
| CT2 | passed | 42.9 ms |
| CT3 | passed | 3.8 ms |
| E1 | passed | 782.0 ms |
| FU1 | failed | 4.6 ms |
| FU2 | failed | 6.4 ms |
| FU3 | passed | 2.4 ms |
| FU4 | passed | 35.8 ms |
| I1 | passed | 74.7 ms |
| I2 | passed | 46.4 ms |
| I3 | passed | 4.4 ms |
| I4 | passed | 3.1 ms |
| I5 | passed | 2.8 ms |
| I6 | passed | 5.2 ms |

### Change User.authenticate()
Cambio: `domain` · tests seleccionados por el análisis: **13 / 39**.

#### Selected · FAILED

- Tests ejecutados: 13; fallidos: 3.
- Tiempo del runner: **11.3 s**.
- Espera visible hasta estado final: **17.5 s**.
- Inicio: 2026-10-07T07:04:34.197Z.
- Fallos: BU3, BU8, I4.

| ID | Estado | Duración medida |
|---|---|---:|
| BU1 | passed | 78.0 ms |
| BU2 | passed | 73.5 ms |
| BU3 | failed | 40.4 ms |
| BU6 | passed | 77.6 ms |
| BU8 | failed | 41.0 ms |
| CT1 | passed | 56.2 ms |
| CT2 | passed | 39.4 ms |
| CT3 | passed | 3.4 ms |
| E1 | passed | 746.0 ms |
| I1 | passed | 56.1 ms |
| I2 | passed | 39.2 ms |
| I4 | failed | 6.6 ms |
| I6 | passed | 5.8 ms |

#### Full suite · FAILED

- Tests ejecutados: 39; fallidos: 3.
- Tiempo del runner: **22.2 s**.
- Espera visible hasta estado final: **27.5 s**.
- Inicio: 2026-10-07T07:04:51.007Z.
- Fallos: BU3, BU8, I4.

| ID | Estado | Duración medida |
|---|---|---:|
| BU1 | passed | 94.0 ms |
| BU10 | passed | 1.4 ms |
| BU11 | passed | 0.7 ms |
| BU12 | passed | 0.1 ms |
| BU13 | passed | 92.5 ms |
| BU14 | passed | 85.6 ms |
| BU15 | passed | 41.6 ms |
| BU16 | passed | 53.6 ms |
| BU17 | passed | 86.0 ms |
| BU2 | passed | 78.5 ms |
| BU3 | failed | 44.7 ms |
| BU4 | passed | 43.4 ms |
| BU5 | passed | 49.2 ms |
| BU6 | passed | 92.0 ms |
| BU7 | passed | 0.2 ms |
| BU8 | failed | 52.2 ms |
| BU9 | passed | 0.9 ms |
| C1 | passed | 73.8 ms |
| C2 | passed | 3.8 ms |
| C3 | passed | 3.5 ms |
| C4 | passed | 167.1 ms |
| C5 | passed | 50.9 ms |
| C6 | passed | 14.1 ms |
| C7 | passed | 74.4 ms |
| C8 | passed | 80.0 ms |
| CT1 | passed | 66.2 ms |
| CT2 | passed | 45.8 ms |
| CT3 | passed | 3.6 ms |
| E1 | passed | 818.0 ms |
| FU1 | passed | 1.3 ms |
| FU2 | passed | 1.7 ms |
| FU3 | passed | 1.6 ms |
| FU4 | passed | 45.0 ms |
| I1 | passed | 68.5 ms |
| I2 | passed | 45.8 ms |
| I3 | passed | 4.6 ms |
| I4 | failed | 7.7 ms |
| I5 | passed | 3.8 ms |
| I6 | passed | 4.9 ms |

### Change POST /login contract
Cambio: `contract` · tests seleccionados por el análisis: **29 / 39**.

#### Selected · FAILED

- Tests ejecutados: 29; fallidos: 9.
- Tiempo del runner: **26.8 s**.
- Espera visible hasta estado final: **32.6 s**.
- Inicio: 2026-10-07T07:05:19.663Z.
- Fallos: CT1, CT2, CT3, E1, I1, I2, I4, I5, I6.

| ID | Estado | Duración medida |
|---|---|---:|
| BU1 | passed | 85.4 ms |
| BU10 | passed | 1.3 ms |
| BU11 | passed | 0.7 ms |
| BU12 | passed | 0.1 ms |
| BU13 | passed | 96.0 ms |
| BU14 | passed | 84.0 ms |
| BU15 | passed | 40.7 ms |
| BU16 | passed | 48.2 ms |
| BU17 | passed | 92.0 ms |
| BU2 | passed | 87.0 ms |
| BU3 | passed | 45.9 ms |
| BU6 | passed | 93.7 ms |
| BU8 | passed | 45.2 ms |
| C4 | passed | 166.9 ms |
| C5 | passed | 61.9 ms |
| C7 | passed | 81.0 ms |
| C8 | passed | 81.2 ms |
| CT1 | failed | 22.2 ms |
| CT2 | failed | 2.9 ms |
| CT3 | failed | 4.8 ms |
| E1 | failed | 5544.0 ms |
| FU1 | passed | 1.3 ms |
| FU2 | passed | 2.5 ms |
| FU4 | passed | 43.5 ms |
| I1 | failed | 22.2 ms |
| I2 | failed | 2.4 ms |
| I4 | failed | 2.9 ms |
| I5 | failed | 2.9 ms |
| I6 | failed | 4.8 ms |

#### Full suite · FAILED

- Tests ejecutados: 39; fallidos: 10.
- Tiempo del runner: **26.6 s**.
- Espera visible hasta estado final: **32.3 s**.
- Inicio: 2026-10-07T07:05:52.252Z.
- Fallos: CT1, CT2, CT3, E1, I1, I2, I3, I4, I5, I6.

| ID | Estado | Duración medida |
|---|---|---:|
| BU1 | passed | 91.6 ms |
| BU10 | passed | 1.4 ms |
| BU11 | passed | 0.7 ms |
| BU12 | passed | 0.1 ms |
| BU13 | passed | 88.6 ms |
| BU14 | passed | 90.2 ms |
| BU15 | passed | 46.5 ms |
| BU16 | passed | 43.7 ms |
| BU17 | passed | 89.4 ms |
| BU2 | passed | 85.0 ms |
| BU3 | passed | 42.2 ms |
| BU4 | passed | 43.1 ms |
| BU5 | passed | 47.4 ms |
| BU6 | passed | 86.8 ms |
| BU7 | passed | 0.2 ms |
| BU8 | passed | 50.5 ms |
| BU9 | passed | 1.0 ms |
| C1 | passed | 74.7 ms |
| C2 | passed | 3.5 ms |
| C3 | passed | 3.8 ms |
| C4 | passed | 180.8 ms |
| C5 | passed | 57.9 ms |
| C6 | passed | 13.4 ms |
| C7 | passed | 75.5 ms |
| C8 | passed | 78.8 ms |
| CT1 | failed | 29.1 ms |
| CT2 | failed | 2.7 ms |
| CT3 | failed | 6.7 ms |
| E1 | failed | 5526.0 ms |
| FU1 | passed | 1.3 ms |
| FU2 | passed | 1.9 ms |
| FU3 | passed | 1.5 ms |
| FU4 | passed | 43.9 ms |
| I1 | failed | 25.1 ms |
| I2 | failed | 4.2 ms |
| I3 | failed | 4.5 ms |
| I4 | failed | 3.8 ms |
| I5 | failed | 7.1 ms |
| I6 | failed | 12.6 ms |

## Trazas de error

Se conservan las trazas completas disponibles que devolvió el runner por test fallido, hasta el límite de salida del ejecutor (12 000 caracteres por resultado). Cuando un mismo fallo aparece en selected y full, se indican ambas ejecuciones y se evita repetir una traza idéntica.

### Change LoginButton

#### C1 · LoginButton renders an enabled submit action
Aparece en: selected y full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  button:

  Name "Continue":
  <button
    aria-busy="false"
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <button
      aria-busy="false"
      type="submit"
    >
      Continue
    </button>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginButton.test.tsx:10:17
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:1628:35
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:26
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3321:20
    at new Promise (<anonymous>)
    at runWithCancel (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3316:10)
```

#### C2 · LoginButton honors an explicit disabled state
Aparece en: selected y full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  button:

  Name "Continue":
  <button
    aria-busy="false"
    disabled=""
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <button
      aria-busy="false"
      disabled=""
      type="submit"
    >
      Continue
    </button>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginButton.test.tsx:16:17
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:1628:35
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:26
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3321:20
    at new Promise (<anonymous>)
    at runWithCancel (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3316:10)
```

#### E1 · Login journey rejects wrong credentials then reaches home
Aparece en: selected y full suite.

```text
Test timeout of 30000ms exceeded.
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Sign in' })


   5 |   await page.getByLabel('Email').fill('demo@example.com');
   6 |   await page.getByLabel('Password').fill('wrong');
>  7 |   await page.getByRole('button', { name: 'Sign in' }).click();
     |                                                       ^
   8 |   await expect(page.getByRole('alert')).toHaveText('Invalid email or password.');
   9 |   await expect(page).toHaveURL('/');
  10 |   await page.getByLabel('Password').fill('impact-demo');
    at <overlay>/tests/e2e/login.spec.ts:7:55
```

#### C4 · LoginForm submits normalized credentials and reports success
Aparece en: full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  form:

  Name "Sign in":
  <form
    aria-label="Sign in"
    novalidate=""
  />

  --------------------------------------------------
  textbox:

  Name "Email":
  <input
    aria-invalid="false"
    autocomplete="username"
    maxlength="254"
    name="email"
    required=""
    type="email"
  />

  --------------------------------------------------
  button:

  Name "Continue":
  <button
    aria-busy="false"
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <form
      aria-label="Sign in"
      novalidate=""
    >
      <label>
        Email
        <input
          aria-invalid="false"
          autocomplete="username"
          maxlength="254"
          name="email"
          required=""
          type="email"
        />
      </label>
      <label>
        Password
        <input
          aria-invalid="false"
          autocomplete="current-password"
          maxlength="256"
          name="password"
          required=""
          type="password"
        />
      </label>
      <button
        aria-busy="false"
        type="submit"
      >
        Continue
      </button>
    </form>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginForm.test.tsx:27:27
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### C5 · LoginForm validates malformed email before calling the service
Aparece en: full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  form:

  Name "Sign in":
  <form
    aria-label="Sign in"
    novalidate=""
  />

  --------------------------------------------------
  textbox:

  Name "Email":
  <input
    aria-invalid="false"
    autocomplete="username"
    maxlength="254"
    name="email"
    required=""
    type="email"
  />

  --------------------------------------------------
  button:

  Name "Continue":
  <button
    aria-busy="false"
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <form
      aria-label="Sign in"
      novalidate=""
    >
      <label>
        Email
        <input
          aria-invalid="false"
          autocomplete="username"
          maxlength="254"
          name="email"
          required=""
          type="email"
        />
      </label>
      <label>
        Password
        <input
          aria-invalid="false"
          autocomplete="current-password"
          maxlength="256"
          name="password"
          required=""
          type="password"
        />
      </label>
      <button
        aria-busy="false"
        type="submit"
      >
        Continue
      </button>
    </form>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginForm.test.tsx:37:27
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### C6 · LoginForm explains both empty required fields
Aparece en: full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  form:

  Name "Sign in":
  <form
    aria-label="Sign in"
    novalidate=""
  />

  --------------------------------------------------
  textbox:

  Name "Email":
  <input
    aria-invalid="false"
    autocomplete="username"
    maxlength="254"
    name="email"
    required=""
    type="email"
  />

  --------------------------------------------------
  button:

  Name "Continue":
  <button
    aria-busy="false"
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <form
      aria-label="Sign in"
      novalidate=""
    >
      <label>
        Email
        <input
          aria-invalid="false"
          autocomplete="username"
          maxlength="254"
          name="email"
          required=""
          type="email"
        />
      </label>
      <label>
        Password
        <input
          aria-invalid="false"
          autocomplete="current-password"
          maxlength="256"
          name="password"
          required=""
          type="password"
        />
      </label>
      <button
        aria-busy="false"
        type="submit"
      >
        Continue
      </button>
    </form>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginForm.test.tsx:46:32
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:1628:35
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:26
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3321:20
    at new Promise (<anonymous>)
    at runWithCancel (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3316:10)
```

#### C7 · LoginForm disables all controls while the request is pending
Aparece en: full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  form:

  Name "Sign in":
  <form
    aria-label="Sign in"
    novalidate=""
  />

  --------------------------------------------------
  textbox:

  Name "Email":
  <input
    aria-invalid="false"
    autocomplete="username"
    maxlength="254"
    name="email"
    required=""
    type="email"
  />

  --------------------------------------------------
  button:

  Name "Continue":
  <button
    aria-busy="false"
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <form
      aria-label="Sign in"
      novalidate=""
    >
      <label>
        Email
        <input
          aria-invalid="false"
          autocomplete="username"
          maxlength="254"
          name="email"
          required=""
          type="email"
        />
      </label>
      <label>
        Password
        <input
          aria-invalid="false"
          autocomplete="current-password"
          maxlength="256"
          name="password"
          required=""
          type="password"
        />
      </label>
      <button
        aria-busy="false"
        type="submit"
      >
        Continue
      </button>
    </form>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginForm.test.tsx:58:27
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### C8 · LoginForm displays service errors without navigating
Aparece en: full suite.

```text
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Sign in"

Here are the accessible roles:

  form:

  Name "Sign in":
  <form
    aria-label="Sign in"
    novalidate=""
  />

  --------------------------------------------------
  textbox:

  Name "Email":
  <input
    aria-invalid="false"
    autocomplete="username"
    maxlength="254"
    name="email"
    required=""
    type="email"
  />

  --------------------------------------------------
  button:

  Name "Continue":
  <button
    aria-busy="false"
    type="submit"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <form
      aria-label="Sign in"
      novalidate=""
    >
      <label>
        Email
        <input
          aria-invalid="false"
          autocomplete="username"
          maxlength="254"
          name="email"
          required=""
          type="email"
        />
      </label>
      <label>
        Password
        <input
          aria-invalid="false"
          autocomplete="current-password"
          maxlength="256"
          name="password"
          required=""
          type="password"
        />
      </label>
      <button
        aria-busy="false"
        type="submit"
      >
        Continue
      </button>
    </form>
  </div>
</body>
    at Object.getElementError (<overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/config.js:37:19)
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:76:38
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:52:17
    at <overlay>/node_modules/.pnpm/@testing-library+dom@10.4.2/node_modules/@testing-library/dom/dist/query-helpers.js:95:19
    at <overlay>/apps/frontend/src/components/LoginForm.test.tsx:74:27
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

### Change login normalization

#### C4 · LoginForm submits normalized credentials and reports success
Aparece en: selected y full suite.

```text
AssertionError: expected { email: 'Demo@EXAMPLE.COM', …(1) } to deeply equal { email: 'demo@example.com', …(1) }
    at <overlay>/apps/frontend/src/components/LoginForm.test.tsx:29:63
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### FU1 · Email normalization trims and lowercases
Aparece en: selected y full suite.

```text
AssertionError: expected 'Demo@EXAMPLE.COM' to be 'demo@example.com' // Object.is equality
    at <overlay>/apps/frontend/src/auth/normalizeEmail.test.ts:5:49
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:1628:35
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:26
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3321:20
    at new Promise (<anonymous>)
    at runWithCancel (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3316:10)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3301:20
    at new Promise (<anonymous>)
    at runWithTimeout (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3259:10)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3882:64
```

#### FU2 · Login request builder normalizes email without changing password
Aparece en: selected y full suite.

```text
AssertionError: expected { email: 'Demo@EXAMPLE.COM', …(1) } to deeply equal { email: 'demo@example.com', …(1) }
    at <overlay>/apps/frontend/src/auth/buildLoginRequest.test.ts:5:68
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:1628:35
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:26
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3321:20
    at new Promise (<anonymous>)
    at runWithCancel (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3316:10)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3301:20
    at new Promise (<anonymous>)
    at runWithTimeout (file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3259:10)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:3882:64
```

### Change User.authenticate()

#### BU3 · Locked user rejects the correct password
Aparece en: selected y full suite.

```text
AssertionError: expected 'invalid-credentials' to be 'locked' // Object.is equality
    at <overlay>/apps/backend/src/auth/domain/User.test.ts:18:45
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### BU8 · Use case preserves the locked account outcome
Aparece en: selected y full suite.

```text
AssertionError: expected { kind: 'invalid-credentials' } to deeply equal { kind: 'locked' }
    at <overlay>/apps/backend/src/auth/application/AuthenticateUser.test.ts:25:90
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### I4 · HTTP login reports a locked account
Aparece en: selected y full suite.

```text
AssertionError: expected 401 to be 403 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:29:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

### Change POST /login contract

#### CT1 · POST login satisfies the success consumer contract
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 200 // Object.is equality
    at <overlay>/tests/contract/login.test.ts:14:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### CT2 · POST login satisfies the invalid credentials contract
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 401 // Object.is equality
    at <overlay>/tests/contract/login.test.ts:28:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### CT3 · POST login satisfies the request validation error contract
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 400 // Object.is equality
    at <overlay>/tests/contract/login.test.ts:40:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### E1 · Login journey rejects wrong credentials then reaches home
Aparece en: selected y full suite.

```text
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('alert')
Expected: "Invalid email or password."
Received: "Failed to execute 'json' on 'Response': Unexpected end of JSON input"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" getByRole('alert') with timeout 5000ms
  - waiting for getByRole('alert')
    14 × locator resolved to <p role="alert">Failed to execute 'json' on 'Response': Unexpecte…</p>
       - unexpected value "Failed to execute 'json' on 'Response': Unexpected end of JSON input"


   6 |   await page.getByLabel('Password').fill('wrong');
   7 |   await page.getByRole('button', { name: 'Sign in' }).click();
>  8 |   await expect(page.getByRole('alert')).toHaveText('Invalid email or password.');
     |                                         ^
   9 |   await expect(page).toHaveURL('/');
  10 |   await page.getByLabel('Password').fill('impact-demo');
  11 |   await page.getByRole('button', { name: 'Sign in' }).click();
    at <overlay>/tests/e2e/login.spec.ts:8:41
```

#### I1 · HTTP login composes the real repository and aggregate
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 200 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:11:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### I2 · HTTP login rejects the wrong password
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 401 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:17:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### I4 · HTTP login reports a locked account
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 403 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:29:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### I5 · HTTP login rejects malformed JSON before invoking authentication
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 400 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:35:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### I6 · HTTP login maps repository failures without leaking details
Aparece en: selected y full suite.

```text
AssertionError: expected 404 to be 500 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:44:29
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

#### I3 · HTTP login hides whether an email is unknown
Aparece en: full suite.

```text
AssertionError: expected 404 to be 401 // Object.is equality
    at <overlay>/tests/integration/login.test.ts:23:27
    at processTicksAndRejections (node:internal/process/task_queues:104:5)
    at file://<overlay>/node_modules/.pnpm/vitest@5.0.3_@types+node@26.6.4_jsdom@30.1.1_vite@8.3.2_@types+node@26.6.4_esbuild@0.28.2_tsx@4.23.15_/node_modules/vitest/dist/chunks/run.BTlFXlnv.js:2783:20
```

## Reproducción en la demo

En la web abre **QUICK CHANGES**, elige uno de los cuatro cambios anteriores, pulsa **CALCULATE REGRESSION**, entra en **TESTS** y ejecuta primero **RUN SELECTED TESTS** y después **RUN FULL SUITE**. La interfaz ejecuta los tests reales en una copia aislada y presenta el tiempo medido y la salida de cada fallo. Las esperas pueden variar por máquina y carga; los valores de este documento son la captura de referencia de esta sesión.
