import { createBrowserRouter, RouterProvider } from 'react-router'
import { publicRoutes } from '@/routes/publicRoutes'
import Layout from '@/shared/components/Layout'

function App() {
  const router = createBrowserRouter([
    {
      Component: Layout,
      children: publicRoutes
    }
  ])

  return <RouterProvider router={router} />
}

export default App
