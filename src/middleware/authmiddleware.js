
// authMiddleware.js
const jwt = require('jsonwebtoken');

const authentication = async ({req,res}) => {
  try {
    // Get the token from cookies
    console.log(req.headers.authorization);
    const authToken = req.headers.authorization.split(' ')[1];
    if (!authToken) {
      return null;
    }
    // Verify the token
    const decoded = jwt.verify(authToken, process.env.SECRET_KEY);
    if (decoded) {
       return {user:decoded};
      
    } else {
      return null
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = { authentication };

