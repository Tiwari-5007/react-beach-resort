import { createClient } from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

// const contentful = require('contentful');
// if (process.REACT_APP_API_SPACE) {
//     module.exports = contentful.createClient({
//         space: process.env.REACT_APP_API_SPACE,
//         accessToken: process.env.REACT_APP_ACCESS_TOKEN
//     })
// } 

// export default createClient