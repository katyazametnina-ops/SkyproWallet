import logoImg from "../../assets/logo-black.svg";
import { StyledHeader, Logo, Nav, HeaderLink } from "./Header.styled";

export default function Header({ currentPage, onNavigate }) {
  const isAuthPage = currentPage === "login" || currentPage === "register";

  return (
    <StyledHeader>
      <Logo src={logoImg} alt="Логотип сайта" />
      {!isAuthPage && (
        <>
          <Nav>
            <HeaderLink
              href="#"
              data-text="Мои расходы"
              $isActive={currentPage === "expenses"}
              onClick={() => onNavigate("expenses")}
            >
              Мои расходы
            </HeaderLink>
            <HeaderLink
              href="#"
              data-text="Анализ расходов"
              $isActive={currentPage === "analytics"}
              onClick={() => onNavigate("analytics")}
            >
              Анализ расходов
            </HeaderLink>
          </Nav>

          <HeaderLink
            href="#"
            data-text="Выйти"
            onClick={() => onNavigate("login")}
          >
            Выйти
          </HeaderLink>
        </>
      )}
    </StyledHeader>
  );
}
