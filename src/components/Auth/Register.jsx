import {
  AuthWrapper,
  AuthCard,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthButton,
  AuthFooterText,
} from "./Auth.styled";

export default function Register({ onNavigate }) {
  const handleRegister = (e) => {
    e.preventDefault();
    onNavigate("expenses");
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <AuthTitle>Регистрация</AuthTitle>

        <AuthForm onSubmit={handleRegister}>
          <AuthInput type="text" placeholder="Имя" />
          <AuthInput type="email" placeholder="Эл. почта" />
          <AuthInput type="password" placeholder="Пароль" />

          <AuthButton type="submit">Зарегистрироваться</AuthButton>
        </AuthForm>

        <AuthFooterText>
          Уже есть аккаунт? <br />
          <a href="#">Войдите здесь</a>
        </AuthFooterText>
      </AuthCard>
    </AuthWrapper>
  );
}
