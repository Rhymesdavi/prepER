// import { isAuthenticated } from '@/lib/actions/auth.action'
import { isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthentcated = await isAuthenticated()

  if (!isUserAuthentcated) redirect("/sign-in")
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="logo.svg" width={38} height={32} alt='Logo' />
          <h2 className='text-primary-100'>PrepER</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout
