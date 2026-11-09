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

export default function ExpensesTable() {
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
          {mockExpenses.map((item) => (
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
