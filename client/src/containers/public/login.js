import React from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-md">
      <h3 className="font-semibold text-2xl mb-3">Đăng nhập</h3>
      <div className="w-full flex flex-col gap-5">
        <InputForm label={"Số điện thoại"} id={"phone"}></InputForm>
        <InputForm label={"Mật khẩu"} id={"password"}></InputForm>
        <Button
          text="Đăng nhập"
          textColor="bg-blue-500"
          bgColor="text-white"
          fullWidth
        ></Button>
      </div>
      <div className="mt-7 flex items-center justify-between">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Quên mật khẩu?
        </small>
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Tạo tài khoản
        </small>
      </div>
    </div>
  );
};

export default Login;
