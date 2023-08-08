"use client"

import CarouselComp from './components/CarouselComp'
import Product from './components/Product'
import MainLayout from './layouts/MainLayout'
export default function Home() {
  
  const products = [
    {
      id: 1,
      title: 'Brown Leather Bag',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum porro optio. Quidem omnis sunt autem. Sint, ipsa doloribus ullam necessitatibus perferendis, quia porro eum possimus, similique assumenda corporis laudantium!",
      url: 'https://picsum.photos/id/7',
      price: 2500
    },
    {
      id: 2,
      title: 'School Books',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum porro optio. Quidem omnis sunt autem. Sint, ipsa doloribus ullam necessitatibus perferendis, quia porro eum possimus, similique assumenda corporis laudantium!",
      url: 'https://picsum.photos/id/20',
      price: 1999
    }
  ]
  
  
  return (
    <main className="">
    <MainLayout>
    <CarouselComp/>
    <div className='max-w-[1200px] mx-auto'>
    <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
    <div className="grid grid-cols-5 gap-4">
    { products.map(product => (
      <Product key={product.id} product={product}/>
      ))}
      </div>
      
      </div>
      </MainLayout>
      </main>
      )
    }
    