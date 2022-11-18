import React from "react";
import styled from "styled-components";

const Computer: React.FC = () => {
  const Title = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Wrapper = styled.div`
    background: papayawhip;
    height: 100%;
    width: 100%;
    position: absolute;
  `;

  return (
    <Wrapper>
      <Title>Vivi小站</Title>
    </Wrapper>
  );
};

export default Computer;
