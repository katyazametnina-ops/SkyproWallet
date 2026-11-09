import styled from "styled-components";

export const AuthWrapper = styled.main`
  background-color: #f4f5f6;
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const AuthCard = styled.div`
  width: 379px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const AuthTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  margin-bottom: 24px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 0.5px solid #999999;
  border-radius: 6px;
  font-family: inherit;
  font-size: 12px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #7334ea;
    background-color: #f1ebfd;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  background-color: #7334ea;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5e22d0;
  }
`;

export const AuthFooterText = styled.p`
  margin-top: 24px;
  font-size: 12px;
  color: #999999;
  text-align: center;
  line-height: 1.5;

  a {
    color: #999999;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #7334ea;
    }
  }
`;
