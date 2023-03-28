import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarDropdown(props) {
  return (
    <>
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className={`${props.className}`}>{props.button}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-[999] overflow-hidden inline-table sm:!w-auto right-0 mt-2 origin-top-right divide-y divide-black/5 dark:divide-white/10 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 focus:outline-none ${props.itemsclass}`}
          >
            {props.dropdownitem.map((item,index) => (
              <Menu.Item  key={index}>
                {({ active}) => (                  
                  <a                 
                  href={item.link}                  
                  className={classNames(
                    active ? "bg-black/5 dark:bg-white/20 rounded-lg" : "",
                    "group flex gap-1 items-center px-2 py-2 text-sm "
                    )}
                    >
                    {item.icon ? <Image src={item.icon} alt="" /> : ""}
                    <span className="sm:whitespace-nowrap">
                      {item.title}
                    </span>
                  </a> 
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
