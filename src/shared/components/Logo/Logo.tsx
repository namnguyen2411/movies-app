import type { ClassValue } from 'clsx'
import { Link } from 'react-router'
import logo from '@/shared/assets/images/logo.png'
import { cn } from '@/shared/lib/utils'

interface LogoProps {
  className?: ClassValue
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className={cn('h-[60px]', className)} />
    </Link>
  )
}
export default Logo
