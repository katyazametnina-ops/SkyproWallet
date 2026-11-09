import { StyledMain, MainTitle, ContentWrapper } from "./Main.styled";
import ExpensesTable from ".././ExpensesTable/ExpensesTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import { useState } from "react";

const mockExpenses = [
  {
    id: 1,
    description: "Пятерочка",
    category: "Еда",
    date: "03.07.2024",
    amount: "3 500 ₽",
  },
  {
    id: 2,
    description: "Яндекс Такси",
    category: "Транспорт",
    date: "03.07.2024",
    amount: "730 ₽",
  },
  {
    id: 3,
    description: "Аптека Вита",
    category: "Здоровье",
    date: "03.07.2024",
    amount: "1 200 ₽",
  },
  {
    id: 4,
    description: "Бургер Кинг",
    category: "Фастфуд",
    date: "03.07.2024",
    amount: "950 ₽",
  },
  {
    id: 5,
    description: "Делимобиль",
    category: "Авто",
    date: "02.07.2024",
    amount: "1 320 ₽",
  },
];

export default function Main() {
  const [expenses, setExpenses] = useState(mockExpenses);
  return (
    <StyledMain>
      <MainTitle>Мои расходы</MainTitle>

      <ContentWrapper>
        <ExpensesTable expenses={expenses} />

        <NewExpenseForm />
      </ContentWrapper>
    </StyledMain>
  );
}
