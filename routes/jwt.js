// import JWT , {JwtPayload} from "jsonwebtoken";
var JWT = require("jsonwebtoken");
// export class Jwt {
//   SecretKey = "PARDEEPSECRECTKEY";
//   // static genToken(payload: JwtPayload){ // for type script
//   static genToken(payload){
//       return JWT.sign(payload,secretKey )
//   }
//   static verifyToken(token){
//     return JWT.verify(token, secretKey)
//   }
// }
const SecretKey = "PARDEEPSECRECTKEY";
const genToken = (payload) => {
  const minute1expire = Math.floor(Date.now() / 1000) + 60 * 1;
  const hour1expire = "1h";
  const second120expire = "120ms";
  return JWT.sign(payload, SecretKey, { expiresIn: second120expire });
};

const verifyToken = (token) => {
  try {
    const roll = JWT.verify(token, SecretKey, function (err, decoded) {
      if(err !== null){
        return { err: err['message'], decoded }; // bar
      }else{
        return { err, decoded }
      }
    });
    return roll;
  } catch (e) {
    return {
      err: e.message, 
      decoded: {}
    }
  }
};

module.exports = {
  SecretKey,
  genToken,
  verifyToken,
};
