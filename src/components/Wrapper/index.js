import React, { useState, Fragment } from "react";
import { Row } from "antd";

import Card from "../Card";
import generateNumbers from "../GenerateNumbers";

import * as S from "./styles";

const Wrapper = () => {
  const [numbers, setNumbers] = useState(generateNumbers(1, 50));
  const [card, setCard] = useState({
    value: 0,
    id: 0
  });

  const onCardClick = (value, id) => {
    let newItem = { ...numbers[id], visible: true };

    const updatedArray = [
      ...numbers.slice(0, id),
      newItem,
      ...numbers.slice(id + 1)
    ];

    setNumbers(updatedArray);

    if (value.value === card.value.value && !value.disabled) {
      setCard({
        value: 0,
        id: 0
      });
    } else
      setTimeout(() => {
        newItem = { ...numbers[id], visible: false };
        let prevArray = { ...numbers[card.id], visible: false };
        setCard({
          value: value,
          id: id
        });
        let newArr = [
          ...numbers.slice(0, card.id),
          prevArray,
          ...numbers.slice(card.id + 1)
        ];

        const newArray = [
          ...newArr.slice(0, id),
          newItem,
          ...newArr.slice(id + 1)
        ];
        setNumbers(newArray);
      }, 300);
  };

  const cardListing = numbers.map((item, id) => {
    return (
      <Card
        visible={item.visible}
        number={item.value}
        onClick={() => onCardClick(item, id)}
        key={id}
        disabled={item.disabled}
      />
    );
  });

  return (
    <Fragment>
      <S.Title>Mahjong-like game</S.Title>
      <Row type="flex" justify="center" align="middle">
        <S.Wrapper>{cardListing}</S.Wrapper>
      </Row>
    </Fragment>
  );
};

export default Wrapper;
