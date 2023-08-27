import Header from '@/components/Header'
import Image from 'next/image'
import { ReactNode } from 'react'
import Banner from './components/Banner'
import CartContent from './components/CartContent'

export default function Home({children}: {children: ReactNode}) {
  return (
    <>
      <Banner />
      <CartContent />
    </>
  )
}
