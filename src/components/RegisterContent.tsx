import React from "react";

const RegisterContent = () => {
  return (
    <div
      className="h-16"
      style={{
        background:
          "url(https://cinestar.com.vn/catalog/view/theme/default/images/pattern.png) repeat center top",
      }}
    >
      <div className="w-[82%] mx-auto flex justify-between h-full">
        <div className="flex h-full gap-10">
          <div
            className="h-full flex items-center"
            style={{
              background:
                "url(https://cinestar.com.vn/catalog/view/theme/default/images/icon-register.png) no-repeat left 1px",
            }}
          >
            <span className="mb-[1px] pl-[70px] cursor-pointer text-main hover:text-secondary duration-200 font-semibold uppercase">
              Đăng ký thành viên
            </span>
          </div>
          <div
            className="h-full flex items-center"
            style={{
              background:
                "url(https://cinestar.com.vn/catalog/view/theme/default/images/icon-login.png) no-repeat left top",
            }}
          >
            <span className="mb-[1px] pl-12 cursor-pointer text-main hover:text-secondary duration-200 font-semibold uppercase">
              Đăng nhập
              <param name="" value="" />
            </span>
          </div>
        </div>
        <div
          className="h-full flex items-center"
          style={{
            background:
              "url(https://cinestar.com.vn/catalog/view/theme/default/images/icon-call.png) no-repeat left 7px",
          }}
        >
          <span className="pl-16 text-3xl font-bold text-[#f37520]">
            099 999 9999
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;
