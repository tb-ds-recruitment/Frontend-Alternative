import {
  Outlet,
  Router,
  RootRoute,
  Route,
} from '@tanstack/react-router'

import { HomePage } from './routes/home'
import { ReduceTaskPage } from './routes/reduce-task'

const rootRoute = new RootRoute({
  component: () => <Outlet />,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const reduceTaskRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/reduce',
  component: ReduceTaskPage,
})

const routeTree = rootRoute.addChildren([indexRoute, reduceTaskRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
