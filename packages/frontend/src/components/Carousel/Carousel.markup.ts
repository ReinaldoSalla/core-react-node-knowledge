import { titleGenerator, checkGenerator } from './Carousel.utils';

const markup = [
  {
    name: 'javascript',
    title: titleGenerator('JavaScript'),
    description: 'From data processing to asynchronous programming',
    check: checkGenerator('JavaScript')
  },
  {
    name: 'react',
    title: titleGenerator('React'),
    description:
      'Modern frontend development with the popular facebook library',
    check: checkGenerator('React')
  },
  {
    name: 'full-stack',
    title: titleGenerator('Full Stack'),
    description:
			'Dynamic backend structures with Node.js and GraphQL',
    check: checkGenerator('Node')
  }
];

export default markup;