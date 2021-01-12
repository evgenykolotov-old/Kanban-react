import React, { useEffect } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';
import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { pages } from "../../router";
import { changeRoute } from '../../actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(state => state.activePanel);
  const popout = useSelector(state => state.popout);
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe((...args) => dispatch(changeRoute(...args)));

    dispatch(changeRoute({ route }));
    // eslint-disable-next-line
  }, [dispatch]);

  if (!activePanel) {

    return null;
  }
  return (
    <>
      <View activePanel={activePanel} header={false} popout={popout}>
        <Panel id={pages.DESKS} separator={false}>
          <Desks />
        </Panel>

        <Panel id={pages.COLUMNS} separator={false} className="Columns">
          <Columns />
        </Panel>
      </View>
    </>
	);
};

export default App;
