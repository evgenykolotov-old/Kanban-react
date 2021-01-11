import { useState } from 'react';

const modes = {
  button: 'button',
  form: 'form',
}

const statuses = {
  default: 'default',
  error: 'error',
}

export const useCreateForm = ({ onSubmit }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(statuses.default);
  const isButtonMode = mode === modes.button;
  const onChangeInput = (event) => setName(event.target.value);

  const reset = () => {
    setStatus(statuses.default);
    setMode(modes.button);
    setName('');
  }

  const submit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    };
    onSubmit(name).then(reset)
  };

  const setFormMode = () => setMode(modes.form);
  // const setButtonMode = () => setMode(modes.button);

  return {
    name, status, reset, submit,
    setFormMode, isButtonMode, onChangeInput
  };
};
