"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import SelectComponent from "@/components/ui/SelectComponent";

const OPTION_BUTTON = [
  {
    label: "chọn phim",
    value: "",
    listOption: [
      {
        label: "Kẻ ẩn danh",
        value: "",
      },
      {
        label: "Nhiệm vụ cuối cùng",
        value: "",
      },
    ],
  },
  {
    label: "chọn rạp",
    value: "",
    listOption: [
      {
        label: "Kẻ ẩn danh",
        value: "",
      },
      {
        label: "Nhiệm vụ cuối cùng",
        value: "",
      },
    ],
  },
  {
    label: "chọn ngày",
    value: "",
    listOption: [
      {
        label: "Kẻ ẩn danh",
        value: "",
      },
      {
        label: "Nhiệm vụ cuối cùng",
        value: "",
      },
    ],
  },
  {
    label: "chọn suất chiếu",
    value: "",
    listOption: [
      {
        label: "Kẻ ẩn danh",
        value: "",
      },
      {
        label: "Nhiệm vụ cuối cùng",
        value: "",
      },
    ],
  },
];

const CartContent = () => {
  const [movies, setMovies] = useState<any>();

  const selectedOption = useCallback((e: string) => {
    setMovies(e);
  }, []);

  return (
    <div
      className="h-auto"
      style={{
        backgroundImage:
          "url(https://cinestar.com.vn/catalog/view/theme/default/images/line-bg.png), url(https://cinestar.com.vn/catalog/view/theme/default/images/pattern.png)",
        backgroundRepeat: "repeat-x, repeat",
        backgroundPosition: "left top, center top",
      }}
    >
      <div className="w-[80%] mx-auto h-[136px] flex justify-between">
        <div className="w-[32%] h-full">
          <div className="relative w-full flex items-center h-full">
            <Image
              className="absolute -top-4"
              width={114}
              height={130}
              alt="img"
              src={
                "https://cinestar.com.vn/catalog/view/theme/default/images/icon-ticket.png"
              }
            />
            <span
              style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.1)" }}
              className="uppercase text-main text-3xl font-bold pl-[145px]"
            >
              Mua vé online
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-2 w-[80%] mx-auto gap-4">
            {OPTION_BUTTON.map((item, index) => (
              <SelectComponent
                className={`${
                  index === 1 || index === 3 ? "rounded-l-3xl" : "rounded-r-3xl"
                } ${
                  index === 2 || index === 3 ? "rounded-t-3xl" : "rounded-b-3xl"
                }`}
                label={item.label}
                selectedOption={selectedOption}
                key={index}
                listOption={item.listOption}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
