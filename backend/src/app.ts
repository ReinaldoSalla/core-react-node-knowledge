import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
 
// var schema = buildSchema(`
//   type Query {
//     bitcoin: String
//     ethereum: String
//     rollDice(numDice: Int!, numSides: Int): [Int]
//   }
// `);

// var root = {
//   bitcoin: () => {
//     return '(25/11/2020-14h57m) the current value for bitcoin $19,023.20';
//   },
//   ethereum: () => {
//     return '(25/11/2020-15h57m) the current value for ethereum is $588,95';
//   },
//   rollDice: ({ numDice, numSides }) => {
//     return Array(numDice).fill(0).map((_) => {
//       return (1 + Math.floor(Math.random() * (numSides || 6)));
//     })
//   }
// };

var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }
 
  type Message {
    id: ID!
    content: String
    author: String
  }
 
  type Query {
    getMessage(id: ID!): Message
    getFixedMessage: String
  }
 
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);
 
// If Message had any complex fields, we'd put them on this object.
class Message {
  id: string;
  content: string;
  author: string;
  constructor(id: any, {content, author}: any) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}
 
// Maps username to content
var fakeDatabase: any = {};
let id = 0;
 
var root = {
  getMessage: ({id}: any) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, fakeDatabase[id]);
  },
  getFixedMsg: () => 'text for fixed msg',
  createMessage: ({input}: any) => {
    // Create a random id for our "database".
    id++; 
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  updateMessage: ({id, input}: any) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};


var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(3001);
console.log('Running a GraphQL API server at http://localhost:3001/graphql');

/*
mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}
*/