import React, { useEffect } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';

import Desks from '../../../features/desks/panels/Desks/Desks';
import Columns from '../../../features/columns/panels/Columns/Columns';

import { pages } from '../../../router';
import { changeRoute } from '../../actions';
import { getActivePanel, getPopout } from '../../selectors';

const App = () => {
  const dispatch = useDispatch();
  const activePanel = useSelector(getActivePanel);
  const popout = useSelector(getPopout);
  const { router, route } = useRoute();

  useEffect(() => {
    router.subscribe((...args) => dispatch(changeRoute(...args)));

    dispatch(changeRoute({ route }));
    // eslint-disable-next-line
  }, [dispatch, route, router]);

  if (!activePanel) return null;

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
