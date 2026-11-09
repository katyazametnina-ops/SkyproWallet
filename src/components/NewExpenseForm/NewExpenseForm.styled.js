import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 379px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 0.5px solid #999999;
  border-radius: 6px;
  font-family: inherit;
  font-size: 12px;
  color: #000000;
  outline: none;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #7334ea;
    background-color: #f1ebfd;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const CategoryTag = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  border-radius: 30px;
  border: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: ${(props) => (props.$isActive ? "#F1EBFD" : "#F4F5F6")};
  color: ${(props) => (props.$isActive ? "#7334EA" : "#000000")};

  &:hover {
    background-color: #f1ebfd;
    color: #7334ea;
  }
  img {
    width: 14px;
    height: 14px;
    display: block;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
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

  &:disabled {
    background-color: #999999;
    cursor: not-allowed;
  }
`;
