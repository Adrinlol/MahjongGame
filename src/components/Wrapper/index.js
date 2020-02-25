import React, { useState, Fragment, useEffect, useRef } from "react";
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
  const buttonClick = useRef();

  useEffect(() => {
    async function onCardClick(value, id) {
      let newItem = { ...numbers[id], visible: true, disabled: false };
      let prevItem = { ...numbers[card.id], visible: true, disabled: false };

      const updatedArray = [
        ...numbers.slice(0, id),
        newItem,
        ...numbers.slice(id + 1)
      ];

      setNumbers(updatedArray);

      if (card.value === 0 && !value.disabled) {
        setCard({
          value: value.value,
          id: id
        });
      } else if (
        !value.disabled &&
        !value.disabled &&
        value.value !== card.value
      ) {
        setTimeout(() => {
          newItem = { ...newItem, visible: false };
          prevItem = { ...prevItem, visible: false };
          setCard({
            value: 0
          });
          let updatedArray = [
            ...numbers.slice(0, card.id),
            prevItem,
            ...numbers.slice(card.id + 1)
          ];

          setNumbers(updatedArray);
        }, 300);
      } else if (value.value === card.value && !value.disabled) {
        setCard({
          value: 0
        });
        newItem = { ...newItem, disabled: true, visible: true };
        prevItem = { ...prevItem, disabled: true, visible: true };
        let newArr = [
          ...numbers.slice(0, card.id),
          prevItem,
          ...numbers.slice(card.id + 1)
        ];

        const updatedArray = [
          ...newArr.slice(0, id),
          newItem,
          ...newArr.slice(id + 1)
        ];

        setNumbers(updatedArray);
      }
    }
    buttonClick.current = onCardClick;
  }, [card, numbers]);

  return (
    <Fragment>
      <S.Title>Mahjong-like game</S.Title>
      <Row type="flex" justify="center" align="middle">
        <S.Wrapper>
          {numbers.map((item, id) => {
            return (
              <Card
                visible={item.visible}
                number={item.value}
                onClick={() => buttonClick.current(item, id)}
                key={id}
                disabled={item.disabled}
              />
            );
          })}
        </S.Wrapper>
      </Row>
    </Fragment>
  );
};

export default Wrapper;
