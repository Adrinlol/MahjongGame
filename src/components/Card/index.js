import React, { Fragment } from "react";
import * as S from "./styles";

const Card = props => {
  return (
    <Fragment>
      {props.visible ? (
        <S.Card {...props}>
          <S.Number {...props}>{props.number}</S.Number>
        </S.Card>
      ) : (
        <S.Card {...props} onClick={props.onClick}>
          <S.Number {...props}>{props.number}</S.Number>
        </S.Card>
      )}
    </Fragment>
  );
};

export default Card;
