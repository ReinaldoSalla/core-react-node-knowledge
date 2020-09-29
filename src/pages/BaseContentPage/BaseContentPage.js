import React, { useEffect } from 'react';
import './BaseContentPage.css';

const BaseContentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='basecontentpage'>
      <h1>React - Rendering</h1>
      <h2>1. Intro</h2>
      <p className='basecontentpage-text'>
        The idea of this guide is to explore JSX, styling and state management (useState and useReducer) in React. We'll use create-react-app to setup the project structure.
      </p>
      <h2>2. Setup</h2>
      <p className='basecontentpage-text'>
        Install the latest recommended version of <a className='basecontentpage-link' href='https://nodejs.org/en/' target='_blank'>Node.js</a>
      </p>
      <p className='basecontentpage-text'>
        To setup the project, type in your terminal
      </p>
      <div className='basecontentpage-wrapper'>
        <span className='basecontentpage-wrapper-text'>
          $ npx create-react-app jsexpert-rendering 
        </span>
        <span className='basecontentpage-wrapper-text'>
          $ cd jsexpert-rendering
        </span>
        <span className='basecontentpage-wrapper-text'>
          $ npm run start
        </span>
      </div> 
      <p className='basecontentpage-text'>
        After {' '}
          <span className='basecontentpage-text-background'> 
            npm run start 
          </span> is finished, React will lauch a server in <a className='basecontentpage-link' href='http://localhost:3000' target='_blank'>localhost:3000</a>. There are some files which are unnecessary for this guide. You can leave them if you want, but if you're interested in cleaning up, to start with the minimum amout of files and code, you may do the following.
      </p>
      <p className='basecontentpage-text'>
        Inside the src folder, delete App.test.js, index.css, logo.svg, serviceWorker.js and setupTests.js
      </p>
      <p className='basecontentpage-text'>
        Then write this code in index.js
      </p>
      <p className='basecontentpage-text'>
        And this code in App.js
      </p>
      <p className='basecontentpage-text'>
        If you find yourself deleting these files too often, you can alternatively clone this <a href='https://google.com' target='_blank'>repository</a>. Of course service workers and testes are important for projects in production, but for guides and experimentation, they can be removed.
      </p>
      <h2>2. JSX</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <h2>3. Styling</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <h2>4. useState</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <h2>5. useReducer</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <h2>5. useReducer</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
    </div>
  );
};

export default BaseContentPage;







//vanilla js
// import React, { useEffect } from 'react';
// import './BaseContentPage.css';

// const BaseContentPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className='basecontentpage'>
//       <h1>React - Rendering</h1>
//       <h2>1. Intro</h2>
//       <p className='basecontentpage-text'>
//         Node: We'll be using Node.js to play around with JavaScript syntax and data structures. If you already have another method for executing vanilla JavaScript, you may skip the setup.
//       </p>
//       <h2>2. Setup</h2>
//       <p className='basecontentpage-text'>
//         Install the latest recommended version of <a className='basecontentpage-link' href='https://nodejs.org/en/' target='_blank'>Node.js</a>
//       </p>
//       <p className='basecontentpage-text'>
//         Create a file named app.js
//       </p>
//       <p className='basecontentpage-text'>
//         To execute a file, hit it in your terminal
//       </p>
//       <div className='basecontentpage-wrapper'>
//         <span className='basecontentpage-wrapper-text'>
//           $ node app.js
//         </span>
//       </div>

//       <h2>2. JSX</h2>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <h2>3. Styling</h2>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <h2>4. useState</h2>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <h2>5. useReducer</h2>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <h2>5. useReducer</h2>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//       <p className='basecontentpage-text'>
//         React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
//       </p>
//     </div>
//   );
// };

// export default BaseContentPage;
