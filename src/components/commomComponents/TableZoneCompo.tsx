import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
`;
const Wrapper = styled.div`
  background: #d6aefb;
  height: 500px;
  width: 70%;
  margin: 20px;
  display: inline-block;
`;

const TableZoneCompo: React.FC = () => {
  return (
    <Wrapper>
      <Title>各种表格组件</Title>
    </Wrapper>
  );
};

export default TableZoneCompo;
