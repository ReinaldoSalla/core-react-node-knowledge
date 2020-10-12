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
      <h2>collections</h2>
      <table>
        <tr>
          <th>id</th>
          <th>structure</th>
          <th>styling</th>
          <th>animations</th>
          <th>state management</th>
          <th>backend</th>
          <th>cms</th>
          <th>testing</th>
          <th>docs</th>
          <th>extra</th>
        </tr>
        <tr>
          <td>javascripttemporal</td>
          <td>create react app</td>
          <td>classNames && styledcomponents</td>
          <td>transitions/keyframes && react-spring</td>
          <td>useState + useReducer</td>
          <td>graphql apis</td>
          <td>myown admin</td>
          <td>jest</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>e.g. level 1 #1</td>
          <td>gatsby</td>
          <td>antd</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>formik</td>
        </tr>
      </table>
    </>
  );
};

export default ReactEcosystem;