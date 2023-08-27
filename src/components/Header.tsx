/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import IconMenuButton from "./IconMenuButton";

const MENU_HEADER = [
  { title: "Phim", path: "/phimdangchieu" },
  { title: "Lịch Chiếu", path: "/lichchieu" },
  { title: "Rạp và giá", path: "/rapvagia" },
  { title: "Khuyến mãi", path: "/khuyenmai" },
  { title: "Hỏi và đáp", path: "/" },
  { title: "Tin tức", path: "/" },
  { title: "Giới thiệu", path: "/" },
  { title: "Liên hệ", path: "/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        background:
          "url(https://cinestar.com.vn/catalog/view/theme/default/images/line-bg.png) repeat-x left top",
      }}
      className={`${
        scrolled
          ? "fixed top-0 w-full z-20 py-4 lg:py-1 duration-300 bg-black/50 h-16 lg:h-20"
          : "py-4 lg:py-3 z-20 fixed top-0 left-0 right-0 duration-300 h-24 lg:h-32"
      }`}
    >
      <div className="flex px-2 lg:px-0 items-center justify-between lg:w-[93%] lg:mx-auto">
        <div className="w-[80%] lg:w-[20%] relative h-16">
          <img
            src={`https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png`}
            className={` ${
              scrolled
                ? "h-14 mx-auto lg:h-24 lg:scale-50 duration-500 absolute left-24 lg:-left-10 -top-3"
                : "h-14 lg:h-24 lg:scale-100 duration-500 absolute left-0 lg:-top-2"
            }`}
            alt="Logo"
          />
        </div>

        {/* PC && Laptop */}
        <div className="hidden lg:flex flex-col gap-2.5 mr-0 items-end">
          <div
            className={`${
              scrolled
                ? "duration-500 h-0 overflow-hidden opacity-0"
                : "w-[50%] duration-500 h-11 opacity-100 flex gap-4  items-center justify-end"
            }`}
          >
            {/* <span className="w-72 text-stone-100">
            {userInfo ? `Xin chào, ${userInfo.userName}` : ""}
          </span> */}
            <form className="flex w-[70%] bg-black lg:py-1.5 pl-4 pr-2 mr-2 rounded-full">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="focus:outline-none flex-grow bg-transparent text-stone-100 w-full"
              />
              <div>
                <Image
                  alt="logo"
                  width={40}
                  height={40}
                  className="hover:opacity-60 duration-200 cursor-pointer"
                  src="https://cinestar.com.vn/catalog/view/theme/default/images/icon-search.png"
                />
              </div>
            </form>
          </div>
          <div className="flex gap-4">
            <div className="relative h-14 w-14 group overflow-hidden">
              <div className="flex rounded-full bg-main absolute top-[5px] bottom-[7px] left-1.5 right-1.5 group-hover:-top-14 group-hover:bottom-14 duration-300 cursor-pointer">
                <HomeIcon className="h-6 w-6 text-white m-auto mb-3" />
              </div>
              <div className="flex rounded-full bg-secondary absolute group-hover:top-[5px] group-hover:bottom-[7px] left-1.5 right-1.5 top-14 -bottom-14 duration-300 cursor-pointer">
                <HomeIcon className="h-6 w-6 text-white m-auto mb-3" />
              </div>
            </div>

            <div className="flex items-center border border-main rounded-full">
              {MENU_HEADER.map((item, index) => (
                <Link
                  className={`text-lg text-stone-50 uppercase px-2.5 py-2 ${
                    pathname === item.path ? "bg-secondary" : "bg-main"
                  } ${index === 0 && "rounded-l-full pl-4 ml-1"} ${
                    index === MENU_HEADER.length - 1 &&
                    "rounded-r-full pr-4 mr-1"
                  } hover:bg-secondary duration-200 font-semibold my-1`}
                  href={item?.path as string}
                  key={index}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div
          className={`lg:hidden ${
            scrolled ? "mb-6 duration-500" : "mb-0 duration-500"
          }`}
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <IconMenuButton openMenu={openMenuMobile} />
        </div>
      </div>

      {/* Menu Mobile */}
      {openMenuMobile ? (
        <div
          onClick={() => setOpenMenuMobile(false)}
          className="fixed inset-0 duration-700 opacity-100 h-full z-40"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div></div>
        </div>
      ) : (
        <div className="fixed inset-0 duration-700 opacity-0 h-0 overflow-hidden"></div>
      )}

      {/* Menu Mobile */}
      {openMenuMobile ? (
        <div className="absolute duration-700 opacity-100 w-[80%] right-0 h-[500px] z-50 rounded-md top-[88px] bg-white flex flex-col">
          <div
            className="px-4 py-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <form className="flex w-full bg-black rounded-full items-center py-1.5">
              <div className="px-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-stone-100" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="focus:outline-none flex-grow bg-transparent text-stone-100 w-52 duration-0"
              />
            </form>
          </div>
          <div className="bg-[#44003a] flex-1 rounded-bl-md">
            <HomeIcon className="h-8 w-8 text-white m-auto bg-secondColor p-1 rounded-full my-3" />
            <div className="flex flex-col justify-center bg-stone-100 text-mainColor font-semibold uppercase">
              {MENU_HEADER.map((item, index) => (
                <Link
                  className={`py-2 border-y border-[#44003a]/30 w-full text-center`}
                  href={item.path}
                  key={index}
                  onClick={() => setOpenMenuMobile(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute duration-700 opacity-0 w-0 h-[500px]  right-0 top-[88px] bg-white"></div>
      )}
    </div>
  );
}
