
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
# Nedb1 database.
type Nedb1 {
  id: ID
  _id: ID
  nedb2Id: ID
  nedb2: Nedb2!
  movies: Movies
}
 
# Nedb2 database.
type Nedb2 {
  id: ID
  _id: ID
  nedb1Id: ID
  nedb1: Nedb1!
}
 
# Movies
type Movies {
  title: String
  actors: [String]
}

type Query {
  getNedb1(key: JSON, query: JSON, params: JSON): Nedb1
  findNedb1(query: JSON, params: JSON): [Nedb1]!
  getNedb2(key: JSON, query: JSON, params: JSON): Nedb2
  findNedb2(query: JSON, params: JSON): [Nedb2]!
}
`;

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
