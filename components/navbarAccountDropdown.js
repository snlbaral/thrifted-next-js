import { Menu, Transition } from "@headlessui/react";
import {
  ArrowLeftCircleIcon,
  ArrowPathRoundedSquareIcon,
  CreditCardIcon,
  GlobeAltIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { Fragment, useEffect, useRef, useState } from "react";

const items = [
  {
    label: "Account",
    value: "/profile",
    icon: <UserIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "Addresses",
    value: "/address",
    icon: <GlobeAltIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "Order History",
    value: "/orders",
    icon: <ShoppingCartIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "Sales History",
    value: "/sales",
    icon: (
      <ArrowPathRoundedSquareIcon className="mr-2 h-5 w-5" aria-hidden="true" />
    ),
  },
  {
    label: "Payout",
    value: "/payout",
    icon: <CreditCardIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "Create Post",
    value: "/create-post",
    icon: <PlusCircleIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "My Closet",
    value: "/my-closet",
    icon: <UserCircleIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
  {
    label: "Logout",
    value: "/logout",
    icon: <ArrowLeftCircleIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
  },
];

export default function NavbarAccountDropdown() {
  return (
    <div className="text-right flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className={"flex"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((item) => {
                return (
                  <Menu.Item key={item.label}>
                    {({ active }) =>
                      item.label === "Logout" ? (
                        <button
                          onClick={() => signOut()}
                          className={`${
                            active ? "bg-[#663399] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      ) : (
                        <a
                          href={item.value}
                          className={`${
                            active ? "bg-[#663399] text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {item.icon}
                          {item.label}
                        </a>
                      )
                    }
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
