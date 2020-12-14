const block1 = `
onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'xyz' 
  };
}`;

const data: any = {
  simpleStateManagement: {
    title: 'React - Simple State Management',
    text: [
      {
        subtitle: 'Intro',
        paragraphsLinksCommandsCode: [ 
          {
            paragraph: 'The guide aims to explore the useState hook from react. We\'l build a Navbar that re-renders a list of items when hovered over. We\'l also create a form and a table, wich will share data by lifting the state up.'
          },
        ] 
      },
      {
        subtitle: 'Setup',
        paragraphsLinksCommandsCode: [ 
          {
            paragraph: 'Install the latest recommended version of'
          },
          {
            paragraphWithEndLink: 'Install the latest recommended version of *Node.js'
          },
          {
            paragraphWithMiddleLink: 'Install the latest recommended version of *Node.js* and in the future deno'
          },
          {
            command: [
              '$ npx create-react-app progrtmp-simple-state-management',
              '$ cd progrtmp-simple-state-management',
              '$ npm run start'
            ]
          },
          {
            paragraph: 'When "npm run start" finishes, React will lauch the app in http://localhost:3000'
          },
        ] 
      },
      {
        subtitle: 'Navbar',
        paragraphsLinksCommandsCode: [
          {
            paragraph: 'The code bellow blablalba'
          },
          {
            code: block1
          }
        ]
      },
    ]
  }
};

export default data;
