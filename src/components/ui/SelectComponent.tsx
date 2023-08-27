"use client";

import React, { useCallback, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SelectComponentProps {
  className?: string;
  classNameSelectOption?: string;
  listOption: any[];
  label: string;
  selectedOption: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  className,
  classNameSelectOption,
  listOption,
  label,
  selectedOption,
}) => {
  const [value, setValue] = useState<string>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const handleSelected = useCallback(
    (e: string) => {
        if(value === e) {
            setValue(undefined)
        } else {
            setValue(e);
            selectedOption(e);
        }
    },
    [selectedOption , value]
  );
  console.log(value);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleOpenModal();
      }}
      onMouseLeave={() => setOpenModal(false)}
      className={`relative text-white px-4 py-2.5 bg-[#000000b3] hover:bg-main duration-200 group flex justify-between ${className} items-center`}
    >
      <span className="pl-2 uppercase"> {value ? value : label}</span>
      <ChevronDownIcon className="h-3.5 w-3.5 text-gray-400 group-hover:text-white duration-200" />
      {openModal ? (
        <div
          className={`absolute top-10 left-2 right-2 z-20 opacity-100 duration-300 flex flex-col overflow-hidden  ${classNameSelectOption} overflow-y-auto  bg-stone-100`}
        >
          {listOption.map((item, index) => (
            <div
              onClick={() => {
                handleSelected(item.label);
              }}
              className={`relative group  hover:bg-main border border-b-main pl-4 flex duration-300 items-center py-2 ${
                value === item.label ? "bg-main" : "bg-stone-100"
              }`}
              key={index}
            >
              <span
                className="text-black duration-200"
                style={{ transition: `all ${(index + 6) * 100}ms` }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`absolute top-10 left-2 right-2 z-20 ${classNameSelectOption} h-0 opacity-0 duration-300 overflow-hidden`}
        >
          {listOption.map((item, index) => (
            <div
              className={`relative border border-mainColor pl-4 flex items-center py-2 `}
              key={index}
            >
              <span
                className=""
                style={{ transition: `all ${(index + 6) * 100}ms` }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </button>
  );
};

export default SelectComponent;
