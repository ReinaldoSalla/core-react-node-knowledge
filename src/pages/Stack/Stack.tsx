import React from 'react';
import './Stack.css';

/*
id             main   css
1              cra    styled components
2              next   css modules
3              gatby  tailwind
4                -    materialui
*/

const data = {
  main: [
    'cra',
    'next',
    'gatsby'
  ],
  rendering: [
    'client side rendering',
    'server side rendering',
    'static content generation',
    'incremental static regeneration'
  ],
  css: [
    'css modules',
    'styled components',
    'tailwind'
  ]
};

// eslint-disable-next-line
// [[cra. client side rendering, css modules], [next, server side, styled components]]

function Stack() {
  return (
    <div>
      <h1>React Stack</h1>
      <table>
        <tr>
          {Object.keys(data).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
        {/* <tr>
          <td>1</td>
          <td>cra</td>
          <td>styled components</td>
        </tr>
        <tr>
          <td>2</td>
          <td>next</td>
          <td>css modules</td>
        </tr>
        <tr>
          <td>3</td>
          <td>gatsby</td>
          <td>tailwind</td>
        </tr> */}
        {Object.values(data).map((array, index) => (
          <tr key={index.toString()}>
            {array.map((string) => (
              <td key={string}>{string}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Stack;
