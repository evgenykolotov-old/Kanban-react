import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Header, Button, ActionSheet, ActionSheetItem, usePlatform, IOS } from '@vkontakte/vkui';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Cards from '../Cards/Cards';
import { deleteColumn } from '../../actions';
import Context from '../../components/App/context';
import './Column.css';

const Column = ({ name, id }) => {
  const { removeColumn, setPopout } = useContext(Context);
  const osname = usePlatform();

  const deleteItem = () => {
    return deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };

  const showColumnOptions = () => {
    setPopout((
      <ActionSheet onClose={() => setPopout(null)}>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Удалить</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    ))
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