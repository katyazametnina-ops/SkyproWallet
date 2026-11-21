import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 20px 120px;

  align-items: center;
`;

export const Logo = styled.img`
  height: 19px;
  display: block;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 48px;
`;

export const HeaderLink = styled.a`
  position: relative;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? "#7334EA" : "#000000")};
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  transition: color 0.2s ease;
  &:hover {
    color: #7334ea;
    font-weight: 600;
  }
  &::after {
    content: "";
    display: ${(props) => (props.$isActive ? "block" : "none")};

    position: absolute;
    bottom: -4px;
    left: 0px;
    right: 0px;

    height: 1px;
    background-color: #7334ea;
  }
  &::before {
    content: attr(data-text);
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-weight: 600;
  }
`;
