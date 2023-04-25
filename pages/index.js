import Brands from "@/components/brands";
import HowItWorks from "@/components/howItWorks";

const products = [
  {
    name: "Saree",
    price: 122,
    image:
      "https://images.unsplash.com/photo-1583897544350-a97216a4b019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    discount: 20,
    id: "63b0171ced39b5454ee1461a",
  },
  {
    name: "Shoes",
    price: 122,
    image:
      "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: 20,
    id: "63b0171ced39b5454ee1461b",
  },
  {
    name: "Jacket",
    price: 122,
    image:
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    discount: 20,
    id: "63b0171ced39b5454ee1461c",
  },
  {
    name: "Shirt",
    price: 122,
    image:
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    discount: 20,
    id: "63b0171ced39b5454ee1461d",
  },
];

export default function Home() {
  return (
    <main className="py-5 mb-5 bg-white dark:bg-black">

      {/* Banner */}
      <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 relative">
            <div class="flex flex-col justify-center md:w-1/2 absolute py-6 px-6 md:py-12 lg:px-12 ">
              <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Best Deal
              </h1>
              <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
                Save upto <span class="font-bold">50%</span>
              </p>
            </div>
            <div class="h-full w-full mt-8 md:mt-0 flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80"
                alt=""
                style={{ height: 220 }}
                class="w-full object-cover h-full"
              />
            </div>
          </div>
          <div class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div class="flex flex-col justify-center absolute z-20">
              <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Trending Shoes
              </h1>
              <p class="text-base lg:text-xl text-gray-800 dark:text-white">
                Save Upto <span class="font-bold">30%</span>
              </p>
            </div>
            <div class="flex h-full w-full justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                class="md:w-20 md:h-20 lg:w-full lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shop by categories */}
      <div className="pb-16">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-slate-300">Shop By Category</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="girl-image" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1525171254930-643fc658b64e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80" alt="watch-image" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Tops</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                            </div>
                            <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                                <img className="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="girl-image" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Men</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


      {/* New Arrivals */}
      <div class="container mx-auto pb-16 px-4">
        <h2 class="text-2xl font-bold mb-2">New Arrivals</h2>
        <div class="flex flex-wrap justify-between lg:grid lg:grid-cols-4 lg:gap-x-4">
          {products.map((product) => {
            return (
              <div key={product.id} class="w-full lg:w-auto lg:col-span-1 px-2">
                <div class="mx-auto mt-11 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-48 w-full object-cover object-center"
                    src={product.image}
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                      {product.name}
                    </h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Rs. {product.price}
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        Rs. {product.price}
                      </p>
                      <p class="ml-auto text-base font-medium text-green-500">
                        {product.discount}% off
                      </p>
                    </div>
                    <button class="flex items-center justify-center bg-[#663399] px-2 py-1 text-sm text-white transition hover:bg-purple-700 mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How it works */}
      <div className="mx-auto w-full mt-5">
        <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-slate-300">HOW IT WORKS?</h1>
        </div>
        <div className=" flex justify-center">
          <HowItWorks/>
        </div>
      </div>


      {/* Rent Products */}
      <div class="container mx-auto pb-16 px-4">
        <h2 class="text-2xl font-bold mb-2">Rent Products</h2>
        <div class="flex flex-wrap justify-between lg:grid lg:grid-cols-4 lg:gap-x-4">
          {products.map((product) => {
            return (
              <div key={product.id} class="w-full lg:w-auto lg:col-span-1 px-2">
                <div class="mx-auto mt-11 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    class="h-48 w-full object-cover object-center"
                    src={product.image}
                    alt="Product Image"
                  />
                  <div class="p-4">
                    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">
                      {product.name}
                    </h2>
                    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">
                      Product description goes here.
                    </p>
                    <div class="flex items-center">
                      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                        Rs. {product.price}
                      </p>
                      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                        Rs. {product.price}
                      </p>
                      <p class="ml-auto text-base font-medium text-green-500">
                        {product.discount}% off
                      </p>
                    </div>
                    <button class="flex items-center justify-center bg-[#663399] px-2 py-1 text-sm text-white transition hover:bg-purple-700 mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class="container mx-auto pb-16 px-4">
        <h2 class="text-2xl font-bold mb-2">Brands</h2>
        <Brands/>
      </div>
      


      {/* App */}
        
   




    </main>
  );
}
