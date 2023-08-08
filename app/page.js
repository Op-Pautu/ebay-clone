"use client"

import CarouselComp from './components/CarouselComp'
import MainLayout from './layouts/MainLayout'
export default function Home() {
  return (
    <main className="">
        <MainLayout>
          <CarouselComp/>
        </MainLayout>
    </main>
  )
}
