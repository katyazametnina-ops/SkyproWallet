import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #f4f5f6;
  min-height: calc(100vh - 64px); /* Растягиваем серый фон до конца экрана */
  padding: 36px 120px 80px;
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 32px;
`;

/* Контейнер, который ставит Таблицу и Форму рядом */
export const ContentWrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: flex-start;
`;

/* Белая карточка слева (для таблицы) */
export const TableCard = styled.div`
  flex: 1; /* Занимает всё доступное широкое место слева */
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

/* Белая карточка справа (для формы) */
export const FormCard = styled.div`
  width: 379px; /* Фиксированная ширина по макету */
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

/* Заголовки внутри белых карточек ("Таблица расходов" и "Новый расход") */
export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 24px;
`;
