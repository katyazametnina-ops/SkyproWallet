import { useState } from "react";
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

const chartData = [
  { label: "Еда", amount: "3 590 ₽", height: "328px", color: "#D9B6FF" },
  { label: "Транспорт", amount: "1 835 ₽", height: "169px", color: "#FFB53D" },
  { label: "Жилье", amount: "0 ₽", height: "4px", color: "#6EE4FE" },
  {
    label: "Развлечения",
    amount: "1 250 ₽",
    height: "109px",
    color: "#B0AEFF",
  },
  { label: "Образование", amount: "600 ₽", height: "65px", color: "#BCEC30" },
  { label: "Другое", amount: "2 306 ₽", height: "212px", color: "#FFB9B8" },
];

export default function Analytics() {
  const [selectedDays, setSelectedDays] = useState([
    10, 11, 12, 13, 14, 15, 16,
  ]);

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      if (selectedDays.length > 1) {
        setSelectedDays(selectedDays.filter((d) => d !== day));
      }
    } else {
      setSelectedDays([...selectedDays, day].sort((a, b) => a - b));
    }
  };

  const periodText =
    selectedDays.length === 1
      ? `${selectedDays[0]} июля 2024`
      : `период с ${selectedDays[0]} по ${selectedDays[selectedDays.length - 1]} июля 2024`;

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
                  $isSelected={selectedDays.includes(day)}
                  onClick={() => toggleDay(day)}
                >
                  {day}
                </DayCircle>
              ))}
            </DaysGrid>

            <MonthTitle>Август 2024</MonthTitle>
            <DaysGrid>
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
            <TotalAmount>9 581 ₽</TotalAmount>
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
