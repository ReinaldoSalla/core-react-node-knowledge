import React, { useRef } from 'react';
import { useSpring, useTransition, useChain, config } from 'react-spring';
import { 
  SidebarWrapper,
  Exit
} from './Sidebar.styles';
import SidebarTopic from '../SidebarTopic';
import SidebarExit from '../SidebarExit';

const data = [
  {
    title: 'JavaScript',
    contents: [
      'Functions',
      'Loops',
      'Generators',
      'Promises',
      'Async Await'
    ]
  },
  {
    title: 'React',
    contents: [
      'Rendering',
      'State',
      'Side Effects',
      'Memoization',
      'Lazy Loading',
      'React Router',
      'Styled Components',
      'React Spring'
    ]
  },
  {
    title: 'Node',
    contents: [
      'GraphQL',
      'FaunaDB',
      'Authentication'
    ]
  },
];

const symbol = ['x'];

const partialItems = data.map(({ title, contents }) => (
  ({ style }) => (
    <SidebarTopic 
      style={style}
      title={title}
      contents={contents}
    />
  )
));

const exitItem = symbol.map((item) => (
  ({ style, toggleSidebar }) => (
    <SidebarExit 
      style={style}
      exitSymbol={item}
      toggleSidebar={toggleSidebar}
    />
  )
));

const test = ({ style, toggleSidebar }) => (
  <Exit 
    style={style}
    onClick={toggleSidebar}
  >
    X
  </Exit>
  // <SidebarExit style={style} toggleSidebar={toggleSidebar} />
);


const rawItems = [...partialItems, test];

const items = rawItems.map((rawItem, index) => ({
  component: rawItem,
  key: index
}));

const Sidebar = ({
  isSidebarVisible,
  toggleSidebar
}) => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();

  const spring = useSpring({
    config: config.slow,
    ref: springRef,
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: async (next) => {
      await next({
        opacity: isSidebarVisible ? 1 : 0,
        transform: isSidebarVisible ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'
      });
    }
  });

  const transitions = useTransition(
    isSidebarVisible ? items : [],
    item => item.key,
    {
      ref: transitionsRef,
      unique: true,
      trail: isSidebarVisible ? 200 : 100,
      from: { opacity: 0, transform: 'scale(0.9)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.9)' }
    },
  );

  useChain(
    isSidebarVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSidebarVisible ? 0.4 : 0.6]
  );

  return (
    <SidebarWrapper style={spring}>
      {transitions.map(({ item, key, props }) => (
        <item.component
          style={props}
          key={key}
          toggleSidebar={toggleSidebar}
        />
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;