/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_FMP_KEY: string;
}

// interface ImportMetaEnv {
//   VITE_APP_FINNHUB_KEY: string;
// }

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
