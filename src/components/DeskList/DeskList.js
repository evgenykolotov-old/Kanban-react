import React, { useEffect } from 'react';
import { CardGrid } from "@vkontakte/vkui";
import { useSelector, useDispatch } from 'react-redux';
import DeskItem from "../DeskItem/DeskItem";
import { fetchDesks } from '../../actions/actions';

const DeskList = () => {
  const dispatch = useDispatch();
  const desks = useSelector(state => state.desks);

  useEffect(() => {
    dispatch(fetchDesks());
    // eslint-disable-next-line
  }, [dispatch]);

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