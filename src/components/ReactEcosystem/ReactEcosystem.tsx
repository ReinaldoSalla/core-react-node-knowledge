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
          <th>language</th>
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
          <td>typescript</td>
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
          <td>uw #1</td>
          <td>-</td>
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
        <tr>
          <td>so #1</td>
          <td>typescript</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>mongodb</td>
        </tr>
        <tr>
          <td>so #2</td>
          <td>typescript</td>
          <td>-</td>
          <td>materialui</td>
          <td>-</td>
          <td>-</td>
          <td>aws, firebase</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>react native, algorithms, ux/ui principles, crm/erp/streaming</td>
        </tr>
        <tr>
          <td>so #3</td> {/* id*/}
          <td>-</td> {/* language */}
          <td>-</td> {/* structure */}
          <td>-</td> {/* styling */}
          <td>-</td> {/* animations*/}
          <td>-</td> {/* state management */}
          <td>-</td> {/*backend*/}
          <td>-</td> {/* cms*/}
          <td>-</td> {/* testing */}
          <td>-</td> {/* docs */}
          <td>-</td> {/* extra */}
        </tr>
        <tr>
          <td>so #4</td> {/* id*/}
          <td>-</td> {/* language */}
          <td>next.js</td> {/* structure */}
          <td>sass</td> {/* styling */}
          <td>-</td> {/* animations*/}
          <td>redux, mobx, apollo, relay</td>  {/* state management */}
          <td>-</td> {/*backend*/}
          <td>-</td> {/* cms*/}
          <td>mocha/chai, jasmine, jest, enzyme</td> {/* testing */}
          <td>storybook, abobe</td> {/* docs */}
          <td>aws</td> {/* extra */}
        </tr>
        <tr>
          <td>so #5</td> {/* id*/}
          <td>typescript</td> {/* language */}
          <td>-</td> {/* structure */}
          <td>-</td> {/* styling */}
          <td>-</td> {/* animations*/}
          <td>redux</td>  {/* state management */}
          <td>graphql apis</td> {/*backend*/}
          <td>-</td> {/* cms*/}
          <td>-</td> {/* testing */}
          <td>-</td> {/* docs */}
          <td>-</td> {/* extra */}
        </tr>
      </table>
    </>
  );
};

export default ReactEcosystem;