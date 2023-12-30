import NextAuth from 'next-auth'
import { type Provider } from 'next-auth/providers'
import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import Discord from '@auth/core/providers/github'

export const { handlers: { GET, POST }, auth } = NextAuth({ providers: [GitHub as Provider, Google as Provider, Discord as Provider] })