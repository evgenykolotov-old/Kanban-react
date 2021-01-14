import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Header, Button, ActionSheet, ActionSheetItem, usePlatform, IOS } from '@vkontakte/vkui';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import { useDispatch } from 'react-redux';

import Cards from '../../../cards/components/Cards/Cards';
import { deleteColumn } from '../../actions';
import { setPopout } from '../../../../app/actions';
import './Column.css';

const Column = ({ name, id }) => {
  const dispatch = useDispatch();
  const osname = usePlatform();

  const deleteItem = () => dispatch(deleteColumn(id));

  const showColumnOptions = () => {
    dispatch(setPopout((
      <ActionSheet onClose={() => dispatch(setPopout(null))}>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Удалить</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    )))
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header className="Column__title">{name}</Header>
        <Button
          className="Column__headerButton"
          mode="overlay_outline"
          onClick={showColumnOptions}
        >
          <Icon24MoreHorizontal />
        </Button>
      </div>
      <Card className="Column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  )
};

Column.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Column;
