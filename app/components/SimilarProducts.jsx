"use client"

import { BiLoader } from "react-icons/bi"
import Product from "./Product"

const SimilarProducts = () => {
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
        <>
            <div>
                <div className="border-b py-1 mx-auto max-w-[1200px]"/>

                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar sponspored items</div>
                        
                        {products.length > 0 ? 
                            <div className="grid grid-cols-5 gap-4">
                                {products.map(product => (
                                    <Product key={product.id} product={product}/>
                                ))}
                            </div>
                          : <div className="flex items-center justify-center">
                                <div className="flex items-center justify-center gap-4 font-semibold">
                                    <BiLoader size={30} className="text-blue-400 animate-spin"/>
                                    Loading products...
                                </div>
                            </div>
                        }
                </div>
            </div>
        </>
            )
        }
        
        export default SimilarProducts