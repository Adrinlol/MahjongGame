import antd from "antd/dist/antd.css";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 80px);
  grid-template-columns: repeat(10, 80px);
  grid-gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #000;
  font-weight: 600;
`;
