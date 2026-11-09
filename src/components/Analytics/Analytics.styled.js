import styled from "styled-components";

export const AnalyticsMain = styled.main`
  background-color: #f4f5f6;
  min-height: calc(100vh - 64px);
  padding: 36px 120px 80px;
`;

export const AnalyticsTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 34px;
  align-items: stretch;
`;

export const CalendarCard = styled.div`
  width: 379px;
  height: 540px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px 0 0 0;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 24px;
  padding: 0 32px;
`;

export const WeekDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  gap: 6px;
  text-align: center;
  font-size: 12px;
  color: #999999;
  padding: 0 31px 6px 32px;
  border-bottom: 0.5px solid #999999;
`;

export const MonthsScrollBox = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px 25px 24px 32px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 30px;
  }
`;

export const MonthTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 12px;
  margin-top: 24px;

  &:first-child {
    margin-top: 0;
  }
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  gap: 6px;
`;

export const DayCircle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  background-color: ${(props) => (props.$isSelected ? "#F1EBFD" : "#F4F5F6")};
  color: ${(props) => (props.$isSelected ? "#7334EA" : "#000000")};

  &:hover {
    background-color: #f1ebfd;
    color: #7334ea;
  }
`;

export const ChartCard = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalHeader = styled.div`
  margin-bottom: 20px;
`;

export const TotalAmount = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 12px;
`;

export const PeriodSubtitle = styled.p`
  font-size: 12px;
  color: #999999;

  span {
    font-weight: 600;
    color: #999999;
  }
`;

export const BarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 387px;
  padding-top: 30px;
  gap: 16px;
`;

export const BarColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

export const BarValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 12px;
  white-space: nowrap;
`;

export const BarFill = styled.div`
  width: 100%;
  max-width: 94px;
  height: ${(props) => props.$height || "4px"};
  background-color: ${(props) => props.$color || "#D9B6FF"};
  border-radius: 12px;
  margin-bottom: 12px;
  transition: height 0.3s ease;
`;

export const BarLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  text-align: center;
`;
