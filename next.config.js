
const withTM = require('next-transpile-modules')(['react-contentful', 'flatted', 'flatted/cjs']); // pass the modules you would like to see transpiled

module.exports = withTM();