import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { CardGrid, Div } from "@vkontakte/vkui";

import './Cards.css';
import ColumnCard from '../ColumnCard/ColumnCard';
import CardCreate from '../CardCreate/CardCreate';
import { fetchCards } from '../../actions';
import { getCards } from '../../selectors';

const Cards = ({ columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  useEffect(() => {
    dispatch(fetchCards(columnId));
  // eslint-disable-next-line
  }, [dispatch, columnId]);

  return (
    <>
      <CardGrid>
        {cards.map(({ id, name }) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
      </CardGrid>

      <Div className="Cards__createButton">
        <CardCreate columnId={columnId} />
      </Div>
    </>
  )
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default React.memo(Cards);
