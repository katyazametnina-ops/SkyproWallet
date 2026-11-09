import {
  TableWrapper,
  TableHeader,
  TableTitle,
  Table,
  Th,
  Td,
  ActionTd,
  IconButton,
} from "./ExpensesTable.styled";
import cartIcon from "../../assets/Cart.svg";

export default function ExpensesTable({ expenses }) {
  return (
    <TableWrapper>
      <TableHeader>
        <TableTitle>Таблица расходов</TableTitle>
      </TableHeader>

      <Table>
        <thead>
          <tr>
            <Th>Описание</Th>
            <Th>Категория</Th>
            <Th>Дата</Th>
            <Th>Сумма</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <Td>{item.description}</Td>
              <Td>{item.category}</Td>
              <Td>{item.date}</Td>
              <Td>{item.amount}</Td>
              <ActionTd>
                <IconButton type="button" title="Удалить">
                  <img src={cartIcon} alt="иконка корзины" />
                </IconButton>
              </ActionTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}
