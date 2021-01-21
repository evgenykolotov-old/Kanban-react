import React, { useState, useCallback } from 'react';
import { FixedLayout, Button, Div, Textarea } from "@vkontakte/vkui";
import { useSelector, useDispatch } from 'react-redux';
import { getText, getId } from '../../selectors';
import TextContent from '../TextContent/TextContent';
import { deleteCard, editCard } from "../../actions";
import { goBack } from "../../../../app/actions";
import './CardContent.css';

const CardContent = () => {
  const dispatch = useDispatch();
  const text = useSelector(getText);
  const id = useSelector(getId);
  const [isEditableMode, setEditableMode] = useState(!text);
  const [value, setValue] = useState(text || '');
  const changeMode = useCallback(() => {
    if (isEditableMode && value.trim().length) {
      dispatch(editCard(id, { text: value }))
        .finally(() => setEditableMode(!isEditableMode));
    } else {
      setEditableMode(!isEditableMode);
    }
  }, [isEditableMode, value, id, dispatch]);
  const changeValue = useCallback(({ target: { value } }) => setValue(value), []);
  const deleteItem = useCallback(() => {
    dispatch(deleteCard(id)).finally(() => dispatch(goBack()));
  }, [dispatch, id]);

  return (
    <>
      {isEditableMode ? (
        <Div>
          <Textarea value={value} onChange={changeValue} />
        </Div>
      ) : <TextContent />}

      <FixedLayout vertical="bottom">
        <Div className="CardContent__buttons">
          <Button mode="commerce" size="l" onClick={changeMode}>{isEditableMode ? 'Сохранить' : 'Изменить'}</Button>
          <Button mode="destructive" size="l" onClick={deleteItem}>Удалить</Button>
        </Div>
      </FixedLayout>
    </>
  );
};

export default React.memo(CardContent);
