import React, { useCallback } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../../components";
import icon from "../../utils/icon";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";

const { CiCirclePlus } = icon;

const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);

  return (
    <div className="w-[1100px] flex items-center justify-between">
      <img src={logo} alt="logo" className="h-[70px] object-contain" />
      <div className="flex items-center gap-1">
        <small>Xin chào</small>
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-blue-500"
          onClick={goLogin}
        ></Button>
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-blue-500"
          onClick={goLogin}
        ></Button>
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-red-500"
          IcAfter={CiCirclePlus}
        ></Button>
      </div>
    </div>
  );
};

export default Header;
