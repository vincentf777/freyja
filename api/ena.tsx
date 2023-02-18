import faunadb from 'faunadb';
import { GraphQLClient, gql } from 'graphql-request';

const ena = new faunadb.Client({secret: process.env.FAUNA_KEY!,
                                scheme: 'https'});

// const ena = new GraphQLClient('https://graphql.fauna.com/graphql', {
//     headers: {
//         authorization: `Bearer ${process.env.FAUNA_KEY!}`,
//     },
// });

console.log(ena)
export default ena;