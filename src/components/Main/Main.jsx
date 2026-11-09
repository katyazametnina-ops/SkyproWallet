import { StyledMain, MainTitle, ContentWrapper } from "./Main.styled";
import ExpensesTable from ".././ExpensesTable/ExpensesTable";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

export default function Main() {
  return (
    <StyledMain>
      <MainTitle>Мои расходы</MainTitle>

      <ContentWrapper>
        <ExpensesTable />

        <NewExpenseForm />
      </ContentWrapper>
    </StyledMain>
  );
}
