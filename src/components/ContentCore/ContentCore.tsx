import React from 'react';
import {
  ContentCoreText
} from './ContentCore.styles';

const ContentCore = ({ introDomNode }) => {
  console.log(introDomNode);
  return (
    <>
      <div ref={introDomNode}>
        <h2>1. Intro</h2>
        <ContentCoreText>
          The idea of this guide is to explore JSX, styling and state management in React, by creating a resposive and interactive webpage. We'll use create-react-app to setup the project.
        </ContentCoreText>
      </div>
    </>
  );
};

export default ContentCore;