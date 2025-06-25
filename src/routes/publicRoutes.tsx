import type { RouteObject } from 'react-router'
import Home from '@/pages/Home'

export const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '*',
    lazy: async () => {
      const Component = await import('@/pages/NotFound')
      return { Component: Component.default }
    }
  }
]
