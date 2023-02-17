import faunadb from 'faunadb';


const ena = new faunadb.Client({secret: process.env.FAUNA_KEY!,
                                scheme: 'https'});
console.log(ena)
export default ena;