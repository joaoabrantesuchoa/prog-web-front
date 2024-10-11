"use client";

import React, { useState } from "react";
import InputField from "../InputField";
import ActionButton from "../ActionButton";
import { useRouter } from "next/navigation";
import { getUserInformationByEmail, login } from "@/app/api/route";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    try {
      await login(email, password);
      await getUserInformationByEmail(email);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form className="w-full">
      <InputField
        type="email"
        placeholder="Email"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/eba08ea0d154a1484afc3ddd26dbf4ce5f462e59671d997dab66d3edd44666d6?apiKey=fd6afd361a0f4b339d9fff46b2790faa&"
        className="mt-0"
        value={email}
        onChange={handleEmailChange}
      />
      <InputField
        type="password"
        placeholder="Senha"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/335aeb7d78653b6c99a1484fef7e418d6577c066860251ce4a94e20ea290aa58?apiKey=fd6afd361a0f4b339d9fff46b2790faa&"
        className="mt-7"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="flex relative gap-5 justify-between mt-7 w-full font-medium text-white whitespace-nowrap max-w-[400px]">
        <ActionButton
          text="Entre"
          onClick={handleLoginClick}
          buttonType={"button"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
