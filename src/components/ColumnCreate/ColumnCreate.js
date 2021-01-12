import React from 'react';
import { Div } from "@vkontakte/vkui";
import { useRoute } from "react-router5";
import { useSelector, useDispatch } from 'react-redux';
import '../Column/Column.css'
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from '../../actions/actions';

const ColumnCreate = () => {
  const dispatch = useDispatch();
  const desks = useSelector(state => state.desks);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};
  const createItem = (name) => dispatch(createColumn(name, desk.id));

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
