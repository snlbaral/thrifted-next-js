import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'

export default function Brands() {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

  const brands = [
    {
        img: "https://cdn.icon-icons.com/icons2/2845/PNG/512/puma_logo_icon_181343.png"
    },
    {img:"https://cdn.icon-icons.com/icons2/2699/PNG/512/adidas_logo_icon_169639.png"},
    {img:"https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_nike_icon_157863.png"},
    {img:"https://cdn.icon-icons.com/icons2/2845/PNG/512/gucci_logo_icon_181352.png"},
    {img:"https://cdn.icon-icons.com/icons2/2845/PNG/512/zara_logo_icon_181327.png"},
    {img:"https://cdn.icon-icons.com/icons2/2845/PNG/512/prada_logo_icon_181409.png"},
  ]


  return (
    <div className="flex items-center pt-8 pb-16 gap-6">
        {brands.map(brand=>{
            return(
      <div className="h-32 w-32" key={brand.img}>
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0 rotate-[-120deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
            <div className="h-full w-full rounded-md bg-white shadow-lg flex items-center justify-center">
                <img src={brand.img} className='w-full h-full object-contain'/>
            </div>
        </Transition>
      </div>
            )
        })}
    </div>
  )
}
