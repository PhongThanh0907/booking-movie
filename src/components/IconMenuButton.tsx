import React from "react";

interface IconMenuButtonProps {
  openMenu: boolean;
}

const IconMenuButton: React.FC<IconMenuButtonProps> = ({ openMenu }) => {
  return (
    <div className="h-[26px] w-11 relative flex justify-center z-10">
      <div
        className={`h-1.5 w-9 bg-gradient-to-r from-[#ADFF2F] to-mainColor absolute rounded-sm  ${
          openMenu
            ? "top-0 bottom-0 rotate-45 my-auto duration-500"
            : "top-0 duration-300"
        } `}
      />
      <div
        className={`h-1.5 w-9 bg-gradient-to-r from-[#ADFF2F] to-mainColor absolute top-0 bottom-0 m-auto line-center duration-300 rounded-sm ${
          openMenu ? " opacity-0" : "opacity-100 "
        }`}
      />
      <div
        className={`h-1.5 w-9 bg-gradient-to-r from-[#ADFF2F] to-mainColor absolute  line-bottom rounded-sm ${
          openMenu
            ? "top-0 bottom-0 -rotate-45 my-auto duration-500"
            : "bottom-0 duration-300"
        }`}
      />
    </div>
  );
};

export default IconMenuButton;
