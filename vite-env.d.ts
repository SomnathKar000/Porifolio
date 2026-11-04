/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_CV?: string;
  readonly REACT_APP_EMAIL?: string;
  readonly REACT_APP_PHONE?: string;
  readonly REACT_APP_IMAGE?: string;
  readonly VITE_CV?: string;
  readonly VITE_EMAIL?: string;
  readonly VITE_PHONE?: string;
  readonly VITE_IMAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

