import React, { useEffect } from 'react';
import { CopyBlock, CodeBlock, monokai } from 'react-code-blocks';
import './BaseContentPage.css';

const BaseContentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='basecontentpage'>
      <h1>React - Rendering</h1>
      <h2>1. Setup</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <h2>2. JSX</h2>
      <p className='basecontentpage-text'>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      </p>
      <CopyBlock
        language='jsx'
        text={`import React from 'react'`}
        theme={monokai}
        showLineNumbers={false}
        codeBlock
      />
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