import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, FormLayout, Input } from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';

import { useCreateForm } from "../../../../components/CreateForm/hooks";

const ColumnCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
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
        size="xl"
        mode="overlay_secondary"
      >
        Добавьте еще колонку
      </Button>
    );
  }

  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={submit}>
        <Input
          autoFocus
          value={name}
          onChange={onChangeInput}
          status={status}
          placeholder="Введите название колонки"
        />

        <div>
          <Button onClick={submit}>Добавить</Button>
          <Button onClick={reset} mode="tertiary">Отменить</Button>
        </div>
      </FormLayout>
    </Card>
  );
};

ColumnCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColumnCreateForm;
