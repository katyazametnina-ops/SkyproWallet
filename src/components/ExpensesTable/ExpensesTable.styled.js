import styled from "styled-components";

export const TableWrapper = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const TableTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 24px;
  font-size: 12px;
  color: #000000;
`;

export const FilterButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 12px;
  color: #000000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: #7334ea;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Th = styled.th`
  font-size: 12px;
  font-weight: 400;
  color: #999999;
  padding-bottom: 6px;
  border-bottom: 0.5px solid #999999;
`;

export const Td = styled.td`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  padding: 14px 0 0;
`;

export const ActionTd = styled(Td)`
  text-align: right;
  white-space: nowrap;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 12px;
  color: #999999;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: #7334ea;
  }
`;
