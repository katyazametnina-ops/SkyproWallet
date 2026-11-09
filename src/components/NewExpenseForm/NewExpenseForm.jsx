import { useState } from "react";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormGroup,
  Label,
  Input,
  CategoriesList,
  CategoryTag,
  SubmitButton,
} from "./NewExpenseForm.styled";
import foodIcon from "../../assets/NewExpenseForm-eda.svg";
import transportIcon from "../../assets/NewExpenseForm-transport.svg";
import housingIcon from "../../assets/NewExpenseForm-dom.svg";
import entertainmentIcon from "../../assets/NewExpenseForm-razvlecheniya.svg";
import educationIcon from "../../assets/NewExpenseForm-obrazovanie.svg";
import otherIcon from "../../assets/NewExpenseForm-drugoe.svg";

const categories = [
  { name: "Еда", icon: foodIcon },
  { name: "Транспорт", icon: transportIcon },
  { name: "Жилье", icon: housingIcon },
  { name: "Развлечения", icon: entertainmentIcon },
  { name: "Образование", icon: educationIcon },
  { name: "Другое", icon: otherIcon },
];

export default function NewExpenseForm({ onAddExpense }) {
  const [selectedCategory, setSelectedCategory] = useState("Еда");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || !date.trim() || !amount.trim()) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description,
      category: selectedCategory,
      date: date,
      amount: `${amount} ₽`,
    };

    onAddExpense(newExpense);
    setDescription("");
    setDate("");
    setAmount("");
    setSelectedCategory("Еда");
  };

  const isFormInvalid = !description.trim() || !date.trim() || !amount.trim();

  return (
    <FormWrapper>
      <FormTitle>Новый расход</FormTitle>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <Input
            id="description"
            type="text"
            placeholder="Введите описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Категория</Label>
          <CategoriesList>
            {categories.map((category) => (
              <CategoryTag
                key={category.name}
                type="button"
                $isActive={selectedCategory === category.name}
                onClick={() => setSelectedCategory(category.name)}
              >
                <img src={category.icon} alt="" />
                {category.name}
              </CategoryTag>
            ))}
          </CategoriesList>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="date">Дата</Label>
          <Input
            id="date"
            type="text"
            placeholder="Введите дату"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="amount">Сумма</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Введите сумму"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isFormInvalid}>
          Добавить новый расход
        </SubmitButton>
      </Form>
    </FormWrapper>
  );
}
