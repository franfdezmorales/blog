import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Discord from 'next-auth/providers/discord'

export const { handlers: { GET, POST }, auth } = NextAuth({ providers: [ GitHub, Google, Discord ] })