import React, { useCallback } from 'react';
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useDispatch } from 'react-redux';

import '../Column/Column.css'
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from '../../actions';

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const { route: { params: { deskId } } } = useRoute();
  const createItem = useCallback((name) => dispatch(createColumn(name, deskId)), [dispatch, deskId]);

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default React.memo(ColumnCreate);
