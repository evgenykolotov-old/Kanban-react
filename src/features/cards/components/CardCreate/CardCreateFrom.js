import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Div } from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';

import { useCreateForm } from "../../../../components/CreateForm/hooks";
import './CardCreateForm.css';

const CardCreateForm = ({ onSubmit }) => {
  const {
    name,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        onClick={setFormMode}
        before={<Icon24Add />}
        size="l"
        mode="outline"
        stretched
      >
        Добавить карточку
      </Button>
    );
  }

  return (
    <Card size="l" mode="outline">
      <Div>
        <form onSubmit={submit}>
          <input
            className="CardCreateForm__input"
            autoFocus
            value={name}
            onChange={onChangeInput}
            placeholder="Введите название карточки"
          />

          <div className="CardCreateForm__buttons">
            <Button onClick={submit} mode="commerce" className="CardCreateForm__actionButton">Добавить</Button>
            <Button onClick={reset} mode="tertiary"><Icon24Dismiss /></Button>
          </div>
        </form>
      </Div>
    </Card>
  );
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardCreateForm;