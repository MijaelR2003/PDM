import React from "react";
import { AuthButtonServer } from "@/app/components/Auth/AuthButtonServer";
import { Input } from "@nextui-org/react";
import EyeSlashFilledIcon from "../components/Icons/EyesSlashFilledIcon";
import EyeFilledIcon from "../components/Icons/EyeFilledIcon";
import LoginForm from "../components/Login/Login";

export default function Login() {
  return (
    <>
      {/* <div>Inicia sesión aqui</div> */}
      <LoginForm>
        <AuthButtonServer />
      </LoginForm>
    </>
  );
}
