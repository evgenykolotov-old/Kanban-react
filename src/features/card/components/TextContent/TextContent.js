import React from 'react';
import marked from 'marked';
import { useSelector } from 'react-redux';
import { Div } from '@vkontakte/vkui';
import { getText } from '../../selectors';
import './TextContent.css';

const TextContent = () => {
  const text = useSelector(getText);
  const content = text.replace(/\\n/g, '\n');
  if (!text) {
    return null;
  }
  return (
    <Div className="TextContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  )
};

export default React.memo(TextContent);
