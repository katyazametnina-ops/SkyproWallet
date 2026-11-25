import { useState, useEffect } from "react";
import ExpensesTable from "../ExpensesTable/ExpensesTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  categoryFromApi,
  formatDateFromApi,
} from "../../api";
import { StyledMain, MainTitle, ContentWrapper } from "./Main.styled";

export default function Main({ token }) {
  const [expenses, setExpenses] = useState([]);

  const formatServerData = (serverData) => {
    const list = Array.isArray(serverData)
      ? serverData
      : serverData.transactions || [];

    return list.map((item) => ({
      id: item._id,
      description: item.description,
      category: categoryFromApi[item.category] || item.category,
      date: formatDateFromApi(item.date),
      amount: `${Number(item.sum).toLocaleString("ru-RU")} ₽`,
    }));
  };

  useEffect(() => {
    if (!token) return;

    getTransactions(token)
      .then((data) => {
        setExpenses(formatServerData(data));
      })
      .catch((err) => console.error(err));
  }, [token]);

  const handleDeleteExpense = async (id) => {
    try {
      const updatedList = await deleteTransaction(token, id);
      setExpenses(formatServerData(updatedList));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddExpense = async (newExpense) => {
    try {
      const updatedList = await addTransaction(token, newExpense);
      setExpenses(formatServerData(updatedList));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledMain>
      <MainTitle>Мои расходы</MainTitle>

      <ContentWrapper>
        <ExpensesTable expenses={expenses} onDelete={handleDeleteExpense} />
        <NewExpenseForm onAddExpense={handleAddExpense} />
      </ContentWrapper>
    </StyledMain>
  );
}
