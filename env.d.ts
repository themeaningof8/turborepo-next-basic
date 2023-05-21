declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: string;
        readonly SANITY_STUDIO_TITLE: string;
        readonly SANITY_STUDIO_PROJECT_ID: string;
        readonly SANITY_STUDIO_DATASET: string;
        readonly SANITY_STUDIO_API_VERSION: string;
        // NEXT_PUBLIC_ is required for the env variables to be exposed to the browser
        readonly NEXT_PUBLIC_SANITY_TITLE: string;
        readonly NEXT_PUBLIC_SANITY_PROJECT_ID: string;
        readonly NEXT_PUBLIC_SANITY_DATASET: string;
        readonly NEXT_PUBLIC_SANITY_API_VERSION: string;
      }
    }
  }
}