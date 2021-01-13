import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Button } from '@vkontakte/vkui';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../actions';
import './ColumnCard.css';

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();
  const deleteItem= () => dispatch(deleteCard(id));

  return (
    <Card size="l" mode="outline">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteItem}>Удалить</Button>
      </Div>
    </Card>
  )
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default ColumnCard;
