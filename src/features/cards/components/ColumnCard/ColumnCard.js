import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Div, Card } from '@vkontakte/vkui';
import { useRouter } from 'react-router5';

import { pages } from '../../../../router';
import './ColumnCard.css';

const ColumnCard = ({ children, id }) => {
  const router = useRouter();
  const goToCardPage = useCallback(() => router.navigate(pages.CARD, { cardId: id }), [router, id]);

  return (
    <Card size="l" mode="outline" onClick={goToCardPage}>
      <Div className="ColumnCard__wrapper">
        {children}
      </Div>
    </Card>
  )
};

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}

export default React.memo(ColumnCard);
