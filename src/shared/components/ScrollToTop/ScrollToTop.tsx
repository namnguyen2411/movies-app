import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Button } from '@/shared/components/ui/button'

const ScrollToTop = () => {
  const location = useLocation()
  const [showButton, setShowButton] = useState(false)
  const BREAK_POINT = 0.7

  const handleBackToTop = (behavior: ScrollBehavior | undefined) => {
    window.scrollTo({ top: 0, behavior })
  }

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: 'instant' })
    handleBackToTop('instant')
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      if (scrollY > windowHeight * BREAK_POINT) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showButton && (
        <Button
          onClick={() => handleBackToTop('smooth')}
          className="fixed right-6 bottom-8 z-10"
          aria-label="Back to top"
        >
          <ArrowUp />
        </Button>
      )}
    </>
  )
}

export default ScrollToTop
