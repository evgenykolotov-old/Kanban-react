import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, FormLayout, Input } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { useCreateForm } from './hooks';

const CreateFrom = ({ onSubmit, placeholder, actionTitle }) => {
  const { name, status, reset, submit, setFormMode,
    isButtonMode, onChangeInput } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        onClick={setFormMode}
        before={<Icon24Add />}
        size="xl"
        mode="outline"
      >
        {actionTitle}
      </Button>
    )
  }

  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={submit}>
        <Input
          autoFocus
          value={name}
          onChange={onChangeInput}
          status={status}
          placeholder={placeholder}
          />
        <div>
          <Button onClick={submit}>{actionTitle}</Button>
          <Button onClick={reset} mode="tertiary">Отменить</Button>
        </div>
      </FormLayout>
    </Card>
  );
};

CreateFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
}

export default CreateFrom;
