import { appRouter } from '@/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    
    createContext: () => ({}),
  })
}
    // @ts-expect-error context already passed from express middleware

export { handler as GET, handler as POST }