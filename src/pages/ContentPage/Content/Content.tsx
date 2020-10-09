import React, { useEffect } from 'react';
import './Content.css';

const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='content_wrapper'>
      <h1>React - Rendering</h1>
      <div className='content_container'>
        <div>
          <h2>1. Intro</h2>
          <p className='content_text'>
            The idea of this guide is to explore JSX, styling and state management in React, by creating a resposive and interactive webpage. We'll use create-react-app to setup the project.
          </p>
          <h2>2. Setup</h2>
          <p className='content_text'>
            Install the latest recommended version of <a className='content_link' href='https://nodejs.org/en/' target='_blank'>Node.js </a>
          </p>
          <p className='content_text'>
            To start the project, type in your terminal
          </p>
          <div className='content_area'>
            <span className='content_command'>
              $ npx create-react-app jsexpert-rendering 
            </span>
            <span className='content_command'>
              $ cd jsexpert-rendering
            </span>
            <span className='content_command'>
              $ npm run start
            </span>
          </div>
          <p className='content_text'>
            After {' '} npm run start is finished, React will lauch the app in <a className='content_link' href='http://localhost:3000' target='_blank'>localhost:3000</a>. There are some files which are unnecessary for this guide. You can leave them if you want, but if you're interested in cleaning up, you may do the following.
          </p>
          <p className='content_text'>
            Inside the src folder, delete App.test.js, index.css, logo.svg, serviceWorker.js and setupTests.js
          </p>
          <p className='content_text'>
            Write this code in index.js
          </p>
          <p className='content_text'>
            And this code in App.js
          </p>
          <p className='content_text'>
            If you find yourself deleting these files too often, you can alternatively clone this <a className='content_link' href='https://google.com' target='_blank'>repository</a>. Service workers and testes are important for projects in production, but for guides like this one, they can be removed.
          </p>
        </div>
        <ul className='content_sidebar'>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              1. Intro
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />              
            <span className='content-sidebar-text'>
              2. Setup
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              3. JSX
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              4. Styling
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              5. useState
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              6. useReducer
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              7. Final Code
            </span>
          </li>
        </ul >
      </div>
    </div>
  );
};

export default Content;