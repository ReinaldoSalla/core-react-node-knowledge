/* eslint-disable */

import crypto from 'crypto';
import express, { Request, Response, NextFunction } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// const schema = buildSchema(`
//   input MessageInput {
//     content: String!
//     author: String!
//   }

//   type Message {
//     id: ID!
//     content: String!
//     author: String!
//   }

//   type Mutation {
//     createMessage(input: MessageInput): Message
//   }

//   type Query {
//     getMessage(id: ID!): Message
//     getFixedMessage: String
//   }
// `);

// const database: any = {};

// const createMessage = ({ author, content}: any) => {
//   const id = crypto.randomBytes(10).toString('hex');
//   const dataToSave = {
//     author,
//     content,
//     date: new Date()
//   };
//   database[id] = dataToSave;
//   console.log(`Messaged saved. Id = ${id}. data=${JSON.stringify(dataToSave)}`);
//   return { id, ...dataToSave };
// };

// const readMessage = (id: string) => {
//   if (!database[id]) {
//     throw new Error(`No message exists with id ${id}`);
//   }
//   return database[id];
// };

// const root = {
//   createMessage: ({ input }: any) => createMessage(input),
//   getMessage: ({ id }: any) => readMessage(id),
//   getFixedMessage: () => `fixed msg`,
// };

// const app = express();
// app.use(cors());
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(process.env.PORT, () => {
//   console.log(
//     `Running a GraphQL API server at `
//     + `${process.env.HOSTNAME}:${process.env.PORT}`
//   );
// });












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
    ip: String
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
    console.log(`returned by class = ${JSON.stringify(new Message(id, input))}`) 
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
  id: (args: any, request: Request) => {
    return request.ip
  }
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(process.env.PORT, () => {
  console.log(
    `Running a GraphQL API server at `
    + `${process.env.HOSTNAME}:${process.env.PORT}`
  );
});

/*
post
mutation {
	createMessage(input: {
		author: "author0",
		content: "content0"
  }) {
		id
	}
}

returns
{
  "data": {
    "createMessage": {
      "id": "1"
    }
  }
}




get
query {
	getMessage(id: "1") {
	  id
	}
}

{
  "data": {
    "getMessage": {
      "id": "1"
    }
  }
}
*/

