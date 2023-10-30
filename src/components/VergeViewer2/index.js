import React from 'react';
import { IframeContainer } from './styles';


function VergerViewer({ src, title, id }) {
  return (
    <IframeContainer src={src} title={title} frameBorder="0" id={id} />
  )
}

export default VergerViewer
