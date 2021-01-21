import React, { useEffect, Suspense } from 'react';
import { View, Panel, PanelSpinner } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useSelector, useDispatch } from 'react-redux';

import { pages } from '../../../router';
import { changeRoute } from '../../actions';
import { getActivePanel, getPopout } from '../../selectors';

const Desks = React.lazy(() => import('../../../features/desks/panels/Desks/Desks'));
const Columns = React.lazy(() => import('../../../features/columns/panels/Columns/Columns'));
const Card = React.lazy(() => import('../../../features/card/panels/Card/Card'));

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
          <Suspense fallback={<PanelSpinner />}>
            <Desks />
          </Suspense>
        </Panel>

        <Panel id={pages.COLUMNS} separator={false} className="Columns">
          <Suspense fallback={<PanelSpinner />}>
            <Columns />
          </Suspense>
        </Panel>

        <Panel id={pages.CARD} separator={false}>
          <Suspense fallback={<PanelSpinner />}>
            <Card />
          </Suspense>
        </Panel>
      </View>
    </>
	);
};

export default React.memo(App);
