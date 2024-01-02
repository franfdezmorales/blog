declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POSTGRES_URL: string
            POSTGRES_URL_NON_POOLING: string
            POSTGRES_USER: string
            POSTGRES_HOST: string
            POSTGRES_PASSWORD: string
            POSTGRES_DATABASE: string
            KV_REST_API_URL: string
            KV_REST_API_TOKEN: string
            AUTH_GITHUB_ID: string
            AUTH_GITHUB_SECRET: string
            AUTH_GOOGLE_ID: string
            AUTH_GOOGLE_SECRET: string
            AUTH_DISCORD_ID: string
            AUTH_DISCORD_SECRET: string
            AUTH_SECRET: string
            AUTH_ADMIN_EMAIL: string
            CLOUDFARE_IMAGES_BEARER_TOKEN: string
            CLOUDFARE_IMAGES_ACCOUNT_ID: string
            NEXT_PUBLIC_CLOUDFARE_ACCOUNT_HASH: string
        }
    }
}

export { }