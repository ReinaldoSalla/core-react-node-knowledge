import React from 'react';
import './Stack.css';

/*
id             main   css
1              cra    styled components
2              next   css modules
3              gatby  tailwind
*/

function Stack() {
  return (
    <div>
      <h1>React Stack</h1>
      <table>
        <tr>
          <th>id</th>
          <th>main</th>
          <th>css</th>
        </tr>
        <tr>
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
        </tr>
      </table>
    </div>
  );
}

export default Stack;
