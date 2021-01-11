import React, { useContext } from 'react';
import CreateFrom from '../CreateForm/CreateForm';
import { createDesk } from '../../actions';
import Context from '../../components/App/context';

const DeskCreate = () => {
  const { addDesk } = useContext(Context);

  const createItem = (name) => {
    return createDesk(name)
      .then(doc => addDesk({ id: doc.id, ...doc.data() }))
      .catch(console.error)
  };

  return (
    <CreateFrom
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default DeskCreate;
