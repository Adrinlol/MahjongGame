import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  box-shadow: 0px 2px 9px #ccc;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 2px 9px #999;
  }
`;

export const Number = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: ${props => !props.visible ? 'none' : 'block'};
`;
