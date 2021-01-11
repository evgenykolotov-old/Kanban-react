import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Button } from '@vkontakte/vkui';
import { deleteCard } from '../../actions';
import Context from '../../components/App/context';
import './ColumnCard.css';

const ColumnCard = ({ children, id }) => {
  const { removeCard } = useContext(Context);

  const deleteItem= () => {
    return deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };

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
