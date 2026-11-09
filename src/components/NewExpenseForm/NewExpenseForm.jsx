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

export default function NewExpenseForm() {
  const [selectedCategory, setSelectedCategory] = useState("Еда");

  return (
    <FormWrapper>
      <FormTitle>Новый расход</FormTitle>

      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label htmlFor="description">Описание</Label>
          <Input id="description" type="text" placeholder="Введите описание" />
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
          <Input id="date" type="text" placeholder="Введите дату" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="amount">Сумма</Label>
          <Input id="amount" type="number" placeholder="Введите сумму" />
        </FormGroup>

        <SubmitButton type="submit">Добавить новый расход</SubmitButton>
      </Form>
    </FormWrapper>
  );
}
