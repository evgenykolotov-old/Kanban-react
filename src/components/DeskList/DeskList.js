import React, { useContext } from 'react';
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem";
import Context from "../App/context";

const DeskList = () => {
  const { desks } = useContext(Context);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => <DeskItem key={id} id={id}>{name}</DeskItem>)}
    </CardGrid>
  );
};

export default DeskList;