import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CardCreateFrom from './CardCreateFrom';
import { createCard } from '../../actions/actions';

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();

  const createItem = (name) => {
    dispatch(createCard(name, columnId));
  }

  return <CardCreateFrom onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default CardCreate;
