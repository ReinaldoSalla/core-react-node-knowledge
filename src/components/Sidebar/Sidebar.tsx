import React, { useRef } from 'react';
import { useSpring, useTransition, useChain, config } from 'react-spring';
import { 
  SidebarWrapper,
  SidebarContainer,
  SidebarTitle,
  SidebarContent,
  SidebarExit
} from './Sidebar.styles';

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

const ItemMappedFromData = ({ style, title, contents }) => (
  <SidebarContainer style={style}>
    <SidebarTitle>{title}</SidebarTitle>
    {contents.map((content, index) => (
      <ul key={index}>
        <SidebarContent>{content}</SidebarContent>
      </ul>
    ))}
  </SidebarContainer>
);

const partialItems = data.map(({ title, contents }) => (
  ({ style }) => (
    <ItemMappedFromData 
      style={style}
      title={title}
      contents={contents}
    />
  )
));

const remainingItem = ({ style, toggleSidebar }) => (
  <SidebarExit 
    style={style}
    onClick={toggleSidebar}
  >
    X
  </SidebarExit>
);

const rawItems = [...partialItems, remainingItem];

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
    isSidebarVisible ? data : [],
    item => item.title,
    {
      ref: transitionsRef,
      unique: true,
      trail: 200,
      from: { opacity: 0, transform: 'scale(0.9)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.9)' }
    },
  );

  useChain(
    isSidebarVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSidebarVisible ? 0.4 : 0.5]
  );

  return (
    <SidebarWrapper style={spring}>
      {transitions.map(({ item, key, props }) => (
        <SidebarContainer style={props} key={key}>
          <SidebarTitle>{item.title}</SidebarTitle>
          {item.contents.map((content, index) => (
            <ul key={index}>
              <SidebarContent>{content}</SidebarContent>
            </ul>
          ))}
        </SidebarContainer>
      ))}
      <SidebarExit onClick={toggleSidebar}>X</SidebarExit>
    </SidebarWrapper>
  );
};

export default Sidebar;