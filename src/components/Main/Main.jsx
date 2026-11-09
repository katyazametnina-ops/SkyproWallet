import {
  StyledMain,
  MainTitle,
  ContentWrapper,
  TableCard,
  FormCard,
  CardTitle,
} from "./Main.styled";

export default function Main() {
  return (
    <StyledMain>
      <MainTitle>Мои расходы</MainTitle>

      <ContentWrapper>
        {/* Левая карточка */}
        <TableCard>
          <CardTitle>Таблица расходов</CardTitle>
        </TableCard>

        {/* Правая карточка */}
        <FormCard>
          <CardTitle>Новый расход</CardTitle>
        </FormCard>
      </ContentWrapper>
    </StyledMain>
  );
}
