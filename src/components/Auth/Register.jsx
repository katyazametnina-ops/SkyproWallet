import { useState } from "react";
import { registerUser } from "../../api";
import {
  AuthWrapper,
  AuthCard,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthFooterText,
} from "./Auth.styled";

export default function Register({ onNavigate, onAuthSuccess }) {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await registerUser({
        name: name.trim(),
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
        <AuthTitle>Регистрация</AuthTitle>

        <AuthForm onSubmit={handleRegister}>
          <AuthInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <AuthButton type="submit">Зарегистрироваться</AuthButton>
        </AuthForm>

        <AuthFooterText>
          Уже есть аккаунт? <br />
          <a href="#" onClick={() => onNavigate("login")}>
            Войдите здесь
          </a>
        </AuthFooterText>
      </AuthCard>
    </AuthWrapper>
  );
}
