import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <>
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <Image
          width={900}
          height={600}
          src="/images/hero.png"
          alt="hero image"
          className="object-cover object-center w-full mb-8 rounded-lg shadow-lg h-60 bg-gray-100 dark:bg-gray-700"
        />
        <div className="flex items-baseline justify-center my-8"></div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <p className="text-lg">Title</p>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <Image src="/icons/li.svg" width={24} height={24} alt="check" />
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <Image src="/icons/li.svg" width={24} height={24} alt="check" />

            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <Image src="/icons/li.svg" width={24} height={24} alt="check" />

            <span>
              Team size: <span className="font-semibold">1 developer</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <Image src="/icons/li.svg" width={24} height={24} alt="check" />

            <span>
              Premium support: <span className="font-semibold">6 months</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <Image src="/icons/li.svg" width={24} height={24} alt="check" />

            <span>
              Free updates: <span className="font-semibold">6 months</span>
            </span>
          </li>
        </ul>
        <a
          href="#"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
    </>
  );
}
