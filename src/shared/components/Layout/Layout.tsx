import { Outlet } from 'react-router'
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import ScrollToTop from '@/shared/components/ScrollToTop'

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
