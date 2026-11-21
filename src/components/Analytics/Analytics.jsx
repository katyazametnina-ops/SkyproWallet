import { useState, useEffect } from "react";
import { getPeriodTransactions } from "../../api";
import {
  AnalyticsMain,
  AnalyticsTitle,
  ContentWrapper,
  CalendarCard,
  CardTitle,
  WeekDaysGrid,
  MonthsScrollBox,
  MonthTitle,
  DaysGrid,
  DayCircle,
  ChartCard,
  TotalHeader,
  TotalAmount,
  PeriodSubtitle,
  BarsContainer,
  BarColumn,
  BarValue,
  BarFill,
  BarLabel,
} from "./Analytics.styled";

const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const julyDays = Array.from({ length: 31 }, (_, i) => i + 1);
const augustDays = Array.from({ length: 31 }, (_, i) => i + 1);

const categoriesConfig = [
  { key: "food", label: "Еда", color: "#D9B6FF" },
  { key: "transport", label: "Транспорт", color: "#FFB53D" },
  { key: "housing", label: "Жилье", color: "#6EE4FE" },
  { key: "joy", label: "Развлечения", color: "#B0AEFF" },
  { key: "education", label: "Образование", color: "#BCEC30" },
  { key: "others", label: "Другое", color: "#FFB9B8" },
];

export default function Analytics({ token }) {
  const [startDay, setStartDay] = useState(10);
  const [endDay, setEndDay] = useState(10);

  const [transactions, setTransactions] = useState([]);

  const handleDayClick = (day) => {
    if (startDay === endDay && day > startDay) {
      setEndDay(day);
    } else {
      setStartDay(day);
      setEndDay(day);
    }
  };

  const periodText =
    startDay === endDay
      ? `${startDay} июля 2024`
      : `период с ${startDay} по ${endDay} июля 2024`;

  useEffect(() => {
    if (!token) return;

    const start = `7-${startDay}-2024`;
    const end = `7-${endDay}-2024`;

    getPeriodTransactions(token, { start, end })
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, [token, startDay, endDay]);

  const totalSum = transactions.reduce((acc, item) => acc + item.sum, 0);

  const chartData = categoriesConfig.map((cat) => {
    const categorySum = transactions
      .filter((item) => item.category === cat.key)
      .reduce((acc, item) => acc + item.sum, 0);

    const heightPx =
      totalSum > 0
        ? Math.max(Math.round((categorySum / totalSum) * 328), 4)
        : 4;

    return {
      label: cat.label,
      amount: `${categorySum.toLocaleString("ru-RU")} ₽`,
      height: `${heightPx}px`,
      color: cat.color,
    };
  });

  return (
    <AnalyticsMain>
      <AnalyticsTitle>Анализ расходов</AnalyticsTitle>

      <ContentWrapper>
        <CalendarCard>
          <CardTitle>Период</CardTitle>

          <WeekDaysGrid>
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </WeekDaysGrid>

          <MonthsScrollBox>
            <MonthTitle>Июль 2024</MonthTitle>
            <DaysGrid>
              {julyDays.map((day) => (
                <DayCircle
                  key={`july-${day}`}
                  type="button"
                  $isSelected={day >= startDay && day <= endDay}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </DayCircle>
              ))}
            </DaysGrid>

            <MonthTitle>Август 2024</MonthTitle>
            <DaysGrid>
              <span />
              <span />
              <span />
              {augustDays.map((day) => (
                <DayCircle key={`aug-${day}`} type="button">
                  {day}
                </DayCircle>
              ))}
            </DaysGrid>
          </MonthsScrollBox>
        </CalendarCard>

        <ChartCard>
          <TotalHeader>
            <TotalAmount>{totalSum.toLocaleString("ru-RU")} ₽</TotalAmount>
            <PeriodSubtitle>
              Расходы за <span>{periodText}</span>
            </PeriodSubtitle>
          </TotalHeader>

          <BarsContainer>
            {chartData.map((item) => (
              <BarColumn key={item.label}>
                <BarValue>{item.amount}</BarValue>
                <BarFill $height={item.height} $color={item.color} />
                <BarLabel>{item.label}</BarLabel>
              </BarColumn>
            ))}
          </BarsContainer>
        </ChartCard>
      </ContentWrapper>
    </AnalyticsMain>
  );
}
