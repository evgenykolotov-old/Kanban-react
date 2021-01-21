import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from "react-router5";
import { useDispatch } from "react-redux";
import { Card, Div, Button, ActionSheet, ActionSheetItem, IOS, usePlatform } from "@vkontakte/vkui";
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';

import './DeskItem.css';
import { pages } from "../../../../router";
import { deleteDesk } from "../../actions";
import { setPopout } from "../../../../app/actions";
import DeskEdit from "../DeskEdit/DeskEdit";

const DeskItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const osname = usePlatform();
  const router = useRouter();
  const [isEditableState, setEditableState] = useState(false);

  const goToColumnPanel = useCallback(() => router.navigate(pages.COLUMNS, { deskId: id }), [router, id]);

  const deleteItem = useCallback((event) => {
    event.stopPropagation();
    dispatch(deleteDesk(id));
  }, [dispatch, id]);

  const editItem = useCallback((event) => {
    event.stopPropagation();
    setEditableState(true);
  }, []);

  const onEditDesk = useCallback(() => {
    setEditableState(false);
  }, []);

  const showDeskOptions = useCallback((event) => {
    event.stopPropagation();
    dispatch(setPopout((
      <ActionSheet onClose={() => dispatch(setPopout(null))}>
        <ActionSheetItem autoclose onClick={editItem}>Редактировать</ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Удалить</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    )))
  }, [dispatch, osname, deleteItem, editItem]);

  if (isEditableState) {
    return <DeskEdit onSubmit={onEditDesk} id={id} name={children} />
  }

  return (
    <Card size="l" onClick={goToColumnPanel}>
      <Div className="DeskItem__content">
        {children}
        <Button className="DeskItem__button" mode="outline" onClick={showDeskOptions}>
          <Icon16MoreHorizontal />
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default React.memo(DeskItem);
