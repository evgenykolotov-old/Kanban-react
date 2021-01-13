import React, { useEffect } from 'react';
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { fetchColumns } from '../../actions';
import { getDesks, getColumns } from '../../selectors';
import './Columns.css';

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const desks = useSelector(getDesks);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};
  const goToDesks = () => window.history.back();

  useEffect(() => {
    dispatch(fetchColumns(deskId));
    // eslint-disable-next-line
  }, [dispatch, deskId]);

  return (
    <>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Доска {desk.name ? `«${desk.name}»` : ''}</PanelHeaderSimple>

      <Gallery
        className="Columns__list"
        slideWidth="85%"
        align="left"
      >
        {columns.map(({ id, name }) => <Column key={id} name={name} id={id} />)}

        <ColumnCreate />
      </Gallery>
    </>
  )
};

export default Columns;
