import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PanelHeaderSimple, PanelSpinner, PanelHeaderBack } from '@vkontakte/vkui';
import CardContent from '../../components/CardContent/CardContent';
import { fetchCard } from '../../actions';
import { useRoute } from 'react-router5';
import { getName } from '../../selectors';
import { goBack } from '../../../../app/actions';

const Card = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoader] = useState(true);
  const { route: { params: { cardId } } } = useRoute();
  const cardName = useSelector(getName);
  const goToColumns = useCallback(() => dispatch(goBack()), [dispatch]);

  useEffect(() => {
    if (cardId) {
      setLoader(true);
      dispatch(fetchCard(cardId)).finally(() => setLoader(false));
    }
  }, [cardId, dispatch]);

  return (
    <>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToColumns} />}>
        Карточка {cardName ? `"${cardName}"` : ''}
      </PanelHeaderSimple>
      {isLoading ? <PanelSpinner /> : <CardContent />}
    </>
  );
};

export default React.memo(Card);
