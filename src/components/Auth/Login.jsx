import { useState } from "react";
import { loginUser } from "../../api";
import {
  AuthWrapper,
  AuthCard,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthFooterText,
} from "./Auth.styled";

export default function Login({ onNavigate, onAuthSuccess }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser({
        login: login.trim(),
        password: password.trim(),
      });

      onAuthSuccess(data.user.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <AuthTitle>Вход</AuthTitle>

        <AuthForm onSubmit={handleLogin}>
          <AuthInput
            type="text"
            placeholder="Эл. почта"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <AuthInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p
              style={{
                color: "#F25050",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          <AuthButton type="submit">Войти</AuthButton>
        </AuthForm>

        <AuthFooterText>
          Нужно зарегистрироваться? <br />
          <a href="#" onClick={() => onNavigate("register")}>
            Регистрируйтесь здесь
          </a>
        </AuthFooterText>
      </AuthCard>
    </AuthWrapper>
  );
}
