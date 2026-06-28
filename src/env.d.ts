/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GITHUB_TOKEN?: string;
  readonly PUBLIC_CALENDLY_URL?: string;
  readonly PUBLIC_CALENDLY_EMBED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
