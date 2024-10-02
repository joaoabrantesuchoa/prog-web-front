import React, { useState } from "react";
import { login, registerUser } from "../api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [role, setRole] = useState<"Aluno" | "Professor">("Aluno");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async () => {
    try {
      const userData = { nome, email, password, role };
      const response = await registerUser(userData);
      alert("Usuário registrado com sucesso!");
      setIsRegistered(true);
      setEmail("");
      setPassword("");
      setNome("");
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar o usuário");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      alert("Login bem-sucedido! Token gerado e salvo.");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Erro ao realizar login");
    }
  };

  return (
    <div>
      <h1>{isRegistered ? "Login" : "Cadastro"}</h1>
      {!isRegistered && (
        <>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label>Função:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "Aluno" | "Professor")}
            >
              <option value="Aluno">Aluno</option>
              <option value="Professor">Professor</option>
            </select>
          </div>
        </>
      )}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {!isRegistered ? (
        <button onClick={handleRegister}>Cadastrar</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {isRegistered ? (
        <p>
          Não tem uma conta?{" "}
          <span
            onClick={() => setIsRegistered(false)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Cadastre-se aqui
          </span>
        </p>
      ) : (
        <p>
          Já tem uma conta?{" "}
          <span
            onClick={() => setIsRegistered(true)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Faça login aqui
          </span>
        </p>
      )}
    </div>
  );
};

export default Login;
