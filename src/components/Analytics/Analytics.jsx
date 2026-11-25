import { useState, useEffect } from "react";
import { getTransactions, getPeriodTransactions } from "../../api";
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

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const monthNamesGenitive = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const categoriesConfig = [
  { key: "food", label: "Еда", color: "#D9B6FF" },
  { key: "transport", label: "Транспорт", color: "#FFB53D" },
  { key: "housing", label: "Жилье", color: "#6EE4FE" },
  { key: "joy", label: "Развлечения", color: "#B0AEFF" },
  { key: "education", label: "Образование", color: "#BCEC30" },
  { key: "others", label: "Другое", color: "#FFB9B8" },
];

const MAX_MONTHS = 12;

export default function Analytics({ token }) {
  const [startDate, setStartDate] = useState(new Date(2024, 6, 10));
  const [endDate, setEndDate] = useState(new Date(2024, 6, 10));

  const [calendarMonths, setCalendarMonths] = useState([
    { year: 2024, month: 6 },
    { year: 2024, month: 7 },
  ]);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!token) return;

    getTransactions(token)
      .then((data) => {
        const list = Array.isArray(data) ? data : data.transactions || [];
        if (list.length === 0) return;

        const timestamps = list.map((item) => new Date(item.date).getTime());
        const minDate = new Date(Math.min(...timestamps));
        const maxDate = new Date(Math.max(...timestamps));

        const startMonth = new Date(
          minDate.getFullYear(),
          minDate.getMonth(),
          1,
        );
        const endMonth = new Date(
          maxDate.getFullYear(),
          maxDate.getMonth() + 1,
          1,
        );

        const generatedMonths = [];
        const current = new Date(startMonth);

        while (current <= endMonth) {
          generatedMonths.push({
            year: current.getFullYear(),
            month: current.getMonth(),
          });
          current.setMonth(current.getMonth() + 1);
        }

        const limitedMonths = generatedMonths.slice(-MAX_MONTHS);
        setCalendarMonths(limitedMonths);

        const initialDay = new Date(
          maxDate.getFullYear(),
          maxDate.getMonth(),
          maxDate.getDate(),
        );
        setStartDate(initialDay);
        setEndDate(initialDay);
      })
      .catch((err) => console.error(err));
  }, [token]);

  useEffect(() => {
    if (!token) return;

    const start = `${startDate.getMonth() + 1}-${startDate.getDate()}-${startDate.getFullYear()}`;
    const end = `${endDate.getMonth() + 1}-${endDate.getDate()}-${endDate.getFullYear()}`;

    getPeriodTransactions(token, { start, end })
      .then((data) => {
        const list = Array.isArray(data) ? data : data.transactions || [];
        setTransactions(list);
      })
      .catch((err) => console.error(err));
  }, [token, startDate, endDate]);

  const handleDayClick = (year, month, day) => {
    const clickedDate = new Date(year, month, day);

    if (
      startDate.getTime() === endDate.getTime() &&
      clickedDate.getTime() > startDate.getTime()
    ) {
      setEndDate(clickedDate);
    } else {
      setStartDate(clickedDate);
      setEndDate(clickedDate);
    }
  };

  const formatReadableDate = (date) => {
    return `${date.getDate()} ${monthNamesGenitive[date.getMonth()]} ${date.getFullYear()}`;
  };

  const periodText =
    startDate.getTime() === endDate.getTime()
      ? formatReadableDate(startDate)
      : `период с ${formatReadableDate(startDate)} по ${formatReadableDate(endDate)}`;

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
            {calendarMonths.map(({ year, month }) => {
              const daysInMonth = new Date(year, month + 1, 0).getDate();
              const daysArray = Array.from(
                { length: daysInMonth },
                (_, i) => i + 1,
              );
              const firstDayOfWeek = new Date(year, month, 1).getDay();
              const emptyCellsCount = (firstDayOfWeek + 6) % 7;
              const emptyCells = Array.from({ length: emptyCellsCount });

              return (
                <div key={`${year}-${month}`}>
                  <MonthTitle>
                    {monthNames[month]} {year}
                  </MonthTitle>

                  <DaysGrid>
                    {emptyCells.map((_, index) => (
                      <span key={`empty-${index}`} />
                    ))}

                    {daysArray.map((day) => {
                      const currentDate = new Date(year, month, day);
                      const isSelected =
                        currentDate.getTime() >= startDate.getTime() &&
                        currentDate.getTime() <= endDate.getTime();

                      return (
                        <DayCircle
                          key={`${year}-${month}-${day}`}
                          type="button"
                          $isSelected={isSelected}
                          onClick={() => handleDayClick(year, month, day)}
                        >
                          {day}
                        </DayCircle>
                      );
                    })}
                  </DaysGrid>
                </div>
              );
            })}
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
