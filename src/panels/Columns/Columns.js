import React, { useEffect, useContext } from 'react';
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions';
import { pages } from '../../router';
import { useRouter } from 'react-router5';
import Context from '../../components/App/context';
import './Columns.css';

const Columns = () => {
  const router = useRouter();
  const { columns, setColumns, desks } = useContext(Context);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};
  const goToDesks = () => router.navigate(pages.DESKS);

  useEffect(() => {
    if (desk.id) {
      getColumns(desk.id).then(setColumns);
    }
    // eslint-disable-next-line
  }, [desk]);

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
