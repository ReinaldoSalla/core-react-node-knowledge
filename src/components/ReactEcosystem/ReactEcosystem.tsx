import React from 'react';
import { options } from './ReactEcosystem.data';
import './ReactEcosystem.css';

const ReactEcosystem = () => {
  return (
    <>
      <h1>React Ecosystem</h1>
      <h2>options</h2>
      {options.map((option, index) => (
        <div key={index}>
          <h3>{option.title}</h3>
          <ol>  
            {option.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
};

export default ReactEcosystem;