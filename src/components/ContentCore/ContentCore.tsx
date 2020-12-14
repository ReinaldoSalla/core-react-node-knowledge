import React, { useEffect, FunctionComponent } from 'react';
import {
  ContentCoreWrapper,
  ContentCoreHeading,
  ContentCoreTitle,
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
  ContentCoreHighlight
} from './ContentCore.styles';
import { ContentCoreProps } from './ContentCore.types';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min.js';
import './prism.css';

const ContentCore: FunctionComponent<ContentCoreProps> = ({ 
  // introDomNode,
  // setupDomNode,
  // jsxDomNode,
  // stylingDomNode,
  // useStateDomNode,
  // useReducerDomNode,
  // finalCodeDomNode,
  data
}): JSX.Element => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ContentCoreWrapper>
      <ContentCoreHeading>{data.simpleStateManagement.title}</ContentCoreHeading>
      {data.simpleStateManagement.text.map((element, index) => (
        <section key={element.subtitle}>
          <ContentCoreTitle>{index + 1}. {element.subtitle}</ContentCoreTitle>
          {element.paragraphsLinksCommandsCode.map((innerElement, innerIndex) => {
            if (innerElement.hasOwnProperty('paragraph')) {
              return <ContentCoreText key={innerIndex}>{innerElement.paragraph}</ContentCoreText>
            } else if (innerElement.hasOwnProperty('command')) {
              return (
                <ContentCoreContainer>
                  {innerElement.command.map((innerInnerElement, innerInnerIndex) => (
                    <ContentCoreCommand key={innerInnerIndex}>
                      {innerInnerElement}
                    </ContentCoreCommand>
                  ))}
                </ContentCoreContainer>
              );
            } else if (innerElement.hasOwnProperty('code')) {
              return (
                <pre className='language-jsx'>
                  <code className='language-jsx' 
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                   {innerElement.code} 
                  </code>
                </pre>
              );
            }
          })} 
        </section>
      ))}
    </ContentCoreWrapper>
//     <ContentCoreWrapper>
//       <ContentCoreHeading>React - Rendering</ContentCoreHeading>
//       <section ref={introDomNode}>
//         <ContentCoreTitle>1. Intrwo</ContentCoreTitle>
//         <ContentCoreText>
//           The idea of this guide is to explore JSX, styling and state management in React, by creating a resposive and interactive webpage. We'll use create-react-app to setup the project.
//         </ContentCoreText>
//       </section>
//       <section ref={setupDomNode}>
//         <ContentCoreTitle>2. Setup</ContentCoreTitle>
//         <ContentCoreText>
//           Install the latest recommended version of <ContentCoreLink  href='https://nodejs.org/en/' target='_blank'  rel="noopener noreferrer"> Node.js </ContentCoreLink>
//         </ContentCoreText>
//         <ContentCoreText>
//           To start the project, type in your terminal
//         </ContentCoreText>
//         <ContentCoreContainer>
//           <ContentCoreCommand>
//             $ npx create-react-app jsexpert-rendering
//           </ContentCoreCommand>
//           <ContentCoreCommand>
//             $ cd jsexpert-rendering
//           </ContentCoreCommand>
//           <ContentCoreCommand>
//             $ npm run start
//           </ContentCoreCommand>
//         </ContentCoreContainer>
//         <ContentCoreText>
//           When <ContentCoreHighlight> npm run start </ContentCoreHighlight>finishes, React will lauch the app in <ContentCoreLink  href='http://localhost:3000' target='_blank' rel="noopener noreferrer">localhost:3000</ContentCoreLink>. There are some files which are unnecessary for this guide. You can leave them if you want, but if you're interested in cleaning up, you may do the following.
//         </ContentCoreText>
//         <ContentCoreText>
//           Inside the src folder, delete App.test.js, index.css, logo.svg, serviceWorker.js and setupTests.js
//         </ContentCoreText>
//         <ContentCoreText>
//           White this code in index.js
//         </ContentCoreText>
//         <ContentCoreText>
//           And this code in App.js
//         </ContentCoreText>
//         <ContentCoreText>
//           If you find yourself deleting these files too often, you can alternatively clone this <a  href='https://google.com' target='_blank' rel="noopener noreferrer">repository</a>. Service workers and testes are important for projects in production, but for guides like this one, they can be removed.
//         </ContentCoreText>
//         <ContentCoreText>
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText>
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <pre className="language-javascript">
//           <code className="language-javascript" style={{ whiteSpace: 'pre-wrap' }}>
//             {`
// onSubmit(e) {
//   e.preventDefault();
//   const job = {
//     title: 'Developer',
//     company: 'Facebook' 
//   };
// }
// `}
//           </code>
//         </pre>
//         <pre className="language-jsx">
//           <code className="language-jsx"style={{ whiteSpace: 'pre-wrap' }}>
//             {`
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(    
//     element,    
//     document.getElementById('root')  
//   );
// }
// setInterval(tick, 1000);
// `}
//           </code>
//         </pre>
//       </section>
//       <section ref={jsxDomNode}>
//         <ContentCoreTitle>3. JSX</ContentCoreTitle>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//       </section>

//       <section ref={stylingDomNode}>
//         <ContentCoreTitle>4. Styling</ContentCoreTitle>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//       </section>

//       <section ref={useStateDomNode}>
//         <ContentCoreTitle>5. useState</ContentCoreTitle>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//       </section>

//       <section ref={useReducerDomNode}>
//         <ContentCoreTitle>6. useReducer</ContentCoreTitle>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//       </section>

//       <section ref={finalCodeDomNode}>
//         <ContentCoreTitle>7. Final Code</ContentCoreTitle>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//         <ContentCoreText >
//           For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
//         </ContentCoreText>
//       </section>





//       {/* React - JSX */}
//       <ContentCoreHeading>React - JSX</ContentCoreHeading>

//       <section>
//         <ContentCoreTitle>1. Intrwo</ContentCoreTitle>
//         <ContentCoreText>
//           The idea of this guide is to explore JSX by bulding commmon components found on most web aplications, like Navbars, Banners, Lists, Galeries, Footers and more
//         </ContentCoreText>
//       </section>

//       <section>
//         <ContentCoreTitle>2. Setup</ContentCoreTitle>
//         <ContentCoreText>
//           Install the latest recommended version of <ContentCoreLink  href='https://nodejs.org/en/' target='_blank'  rel="noopener noreferrer"> Node.js </ContentCoreLink>
//         </ContentCoreText>
//         <ContentCoreText>
//           To start the project, type in your terminal
//         </ContentCoreText>
//         <ContentCoreContainer>
//           <ContentCoreCommand>
//             $ npx create-react-app reacthub-jsx --template typescript
//           </ContentCoreCommand>
//           <ContentCoreCommand>
//             $ cd reacthub-jsx
//           </ContentCoreCommand>
//           <ContentCoreCommand>
//             $ npm run start
//           </ContentCoreCommand>
//         </ContentCoreContainer>
//         <ContentCoreText>
//           When <ContentCoreHighlight> npm run start </ContentCoreHighlight>finishes, React will lauch the app in <ContentCoreLink  href='http://localhost:3000' target='_blank' rel="noopener noreferrer">localhost:3000</ContentCoreLink>
//         </ContentCoreText>
//         <ContentCoreText>
//           Inside the src folder ;/
//         </ContentCoreText>
//       </section>

//       <section>
//         <ContentCoreTitle>3. Navbar</ContentCoreTitle>
//         <ContentCoreText>
//           Again inside the src folder, create a folder called components. And inside
//           the components folder, create another folder called Navbar. Finally, inside 
//           the Navbar folder, create 3 files: Navbar.tsx, Navbar.styles.ts and index.ts. 
//           If you are a experienced React developer and rather use another structure for
//           your files, fell free to use it, since React does't put any restraits on how we
//           structure our apps. 
//         </ContentCoreText>
//         <ContentCoreText>
          
//         </ContentCoreText>
//       </section>


//     </ContentCoreWrapper>

  );
};

export default ContentCore;