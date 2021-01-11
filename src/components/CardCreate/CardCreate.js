import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardCreateFrom from './CardCreateFrom';
import { createCard } from '../../actions';
import Context from '../../components/App/context';

const CardCreate = ({ columnId }) => {
  const { addCard } = useContext(Context);

  const createItem = (name) => {
    return createCard(name, columnId)
      .then(doc => addCard({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  }

  return <CardCreateFrom onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default CardCreate;
