import React from "react";
import styled from "styled-components";

const Computer: React.FC = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>Vivi小站</Title>
    </Wrapper>
  );
};

export default Computer;
