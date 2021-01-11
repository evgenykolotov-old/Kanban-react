import React from 'react';
import { PanelHeaderSimple, Div } from '@vkontakte/vkui';
import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';

const Desks = () => (
  <>
    <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
    <Div><DeskCreate /></Div>
    <DeskList />
  </>
);

export default Desks;
