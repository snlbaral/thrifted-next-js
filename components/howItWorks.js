import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HowItWorks() {
  let [tabs] = useState({
    "I am a Seller": [
      {
        id: 1,
        title: 'Step 1 - LIST IT',
        desc: 'Take a photo and upload to your closet in less than 60 seconds–right from your phone!',
        img: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/img-seller-step1@2x-3ec30dbeb85b48fa5c27593d658bb49f.jpg'
      },
      {
        id: 2,
        title: 'Step 2 - SHARE IT',
        desc: 'Share listings to your network for shoppers to discover! More sharing = more sales!',
        img: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/img-seller-step2@2x-148b666953f6509fb91aa967e31e1a45.jpg'
      },
      {
        id: 3,
        title: 'Step 3 - EANR CASH',
        desc: 'Shipping is easy with our pre-paid label, and you’ll get cash in your pocket when the item is delivered!',
        img: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/img-seller-step3@2x-85d805680df052386ef865e0b3137561.jpg'
      },
      
    ],
    "I am a Buyer": [
        {
            id: 1,
            title: 'Step 1 - DISCOVER ITEMS',
            desc: 'From women to men to kids, discover a wide selection of items across thousands of brands—at prices up to 70% off!',
            img: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/img-buyer-step1@2x-15e5bdf5ad0412c4316759f56158a473.jpg'
          },
          {
            id: 2,
            title: 'Step 2 - GET STYLED',
            desc: 'Find the perfect look with personalized recommendations from millions of stylists, right at your fingertips!',
            img: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/img-buyer-step2@2x-40d93ebe2183079e0230d370163beb2e.jpg'
          },
          {
            id: 3,
            title: 'Step 3 - SPREAD THE LOVE',
            desc: 'Orders arrive in two days with Priority Mail shipping. If you love it, leave the seller a note to let them know!',
            img: 'https://d2gjrq7hs8he14.cloudfront.net/webpack4/img-buyer-step3@2x-c6eea0559bc4a3f86e512e16326abf89.jpg'
          },
    ],
    
  })

  return (
    <div className="w-full max-w-lg px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(tabs).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-purple-600 ring-opacity-60 ring-offset-2 ring-offset-purple-900 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-gray-900 shadow text-purple-700'
                    : 'text-blue-700 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(tabs).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white dark:bg-gray-900 p-3',
                'ring-white dark:right-gray-900 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800 grid grid-cols-3 gap-4"
                  >
                    <img src={post.img} className='w-full h-24 object-cover'/>
                    <div className='col-span-2'>
                    <h3 className="text-sm font-medium leading-5 text-gray-800 dark:text-slate-200">
                      {post.title}
                    </h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                      <li>{post.desc}</li>
                    </ul>
                    </div>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
