// eslint-disable-next-line import/no-extraneous-dependencies
const enzyme = require('enzyme');
// eslint-disable-next-line import/no-extraneous-dependencies
const Adapter = require('enzyme-adapter-react-16');

module.exports = enzyme.configure({ adapter: new Adapter() });
