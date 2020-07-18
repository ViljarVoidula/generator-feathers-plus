
/* eslint quotes: 0 */
// Defines Sequelize model for service `nedb1`. (Can be re-generated.)
const merge = require('lodash.merge');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nedb2Id: {
      type: DataTypes.INTEGER
    },
    testObject: {
      type: DataTypes.JSONB
    },
    testString: {
      type: DataTypes.TEXT
    },
    multiType: {
      type: DataTypes.REAL
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
