import {
  StyledMain,
  MainTitle,
  ContentWrapper,
  FormCard,
  CardTitle,
} from "./Main.styled";
import ExpensesTable from ".././ExpensesTable/ExpensesTable";

export default function Main() {
  return (
    <StyledMain>
      <MainTitle>Мои расходы</MainTitle>

      <ContentWrapper>
        <ExpensesTable />

        <FormCard>
          <CardTitle>Новый расход</CardTitle>
        </FormCard>
      </ContentWrapper>
    </StyledMain>
  );
}
