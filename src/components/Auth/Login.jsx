import {
  AuthButton,
  AuthCard,
  AuthFooterText,
  AuthForm,
  AuthInput,
  AuthTitle,
  AuthWrapper,
} from "./Auth.styled";

export default function Login({ onNavigate }) {
  const handleLogin = (e) => {
    e.preventDefault();
    onNavigate("expenses");
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <AuthTitle>Вход</AuthTitle>

        <AuthForm onSubmit={handleLogin}>
          <AuthInput type="email" placeholder="Эл. почта" />
          <AuthInput type="password" placeholder="Пароль" />

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
