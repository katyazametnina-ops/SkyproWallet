import logoImg from "../../assets/logo-black.svg";
import { StyledHeader, Logo, Nav, HeaderLink } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Logo src={logoImg} alt="Логотип сайта" />
      <Nav>
        <HeaderLink href="#" data-text="Мои расходы" $isActive>
          Мои расходы
        </HeaderLink>
        <HeaderLink href="#" data-text="Анализ расходов">
          Анализ расходов
        </HeaderLink>
      </Nav>
      <HeaderLink href="#" data-text="Выйти">
        Выйти
      </HeaderLink>
    </StyledHeader>
  );
}
