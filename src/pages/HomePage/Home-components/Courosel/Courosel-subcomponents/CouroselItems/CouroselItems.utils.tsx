import React from 'react';
import CouroselItem from './CouroselItems';

const titleGenerator = (name: string): string => `${name} Guides`;

const checkGenerator = (name: string): string => `Check ${name} Tutorials`;

const texts = [
	{
		name: 'javascript',
		title: titleGenerator('JavaScript'),
		description: 'From data processing and asyncronous programming',
		check: checkGenerator('JavaScript'),
	},
	{
		name: 'react',
		title: titleGenerator('React'),
		description: 'Modern frontend development with the popular facebook library',
		check: checkGenerator('React'),
	},
	{
		name: 'node',
		title: titleGenerator('Node'),
		description:
			'Dynamic backend structures with Node and GraphQl',
		check: checkGenerator('Node'),
	},
];

const couroselItems = texts.map(({ name, title, description, check }) => {
  return ({ style, scrollToJavascript, scrollToReact, scrollToNode }) => (
    <CouroselItem 
      style={style}
      name={name}
      title={title}
      description={description}
			check={check}
			scrollToJavascript={scrollToJavascript}
			scrollToReact={scrollToReact}
			scrollToNode={scrollToNode}
    />
  );
});

export default couroselItems;