import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { CardGrid, Div } from '@vkontakte/vkui';
import ColumnCard from '../ColumnCard/ColumnCard';
import CardCreate from '../CardCreate/CardCreate';
import { getCards } from '../../actions';
import Context from '../../components/App/context';
import './Cards.css';

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);

  useEffect(() => {
    getCards(columnId).then(setCards);
  // eslint-disable-next-line
  }, []);

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

export default Cards;
