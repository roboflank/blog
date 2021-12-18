import Link from 'next/link'
import { useLocale } from '@/lib/locale'

const Vercel = () => {
  const locale = useLocale()

  return <Link href={'/feed'}>{locale.NAV.RSS}</Link>
}

export default Vercel
