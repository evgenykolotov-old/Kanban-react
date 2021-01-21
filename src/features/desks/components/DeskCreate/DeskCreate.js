import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import CreateFrom from '../../../../components/CreateForm/CreateForm';
import { createDesk } from '../../actions';

const DeskCreate = () => {
  const dispatch = useDispatch();
  const createItem = useCallback((name) => dispatch(createDesk(name)), [dispatch]);

  return (
    <CreateFrom
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default React.memo(DeskCreate);
