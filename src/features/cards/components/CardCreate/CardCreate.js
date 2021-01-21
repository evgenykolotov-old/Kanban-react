import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CardCreateForm from './CardCreateForm';
import { createCard } from '../../actions';

const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();
  const createItem = useCallback((name) => dispatch(createCard(name, columnId)), [dispatch, columnId]);

  return <CardCreateForm onSubmit={createItem} />;
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default React.memo(CardCreate);
