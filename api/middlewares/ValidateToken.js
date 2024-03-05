import Jwt from "jsonwebtoken";

import { TOKEN_SECRET } from "../config/Token.js";

export const AuthRequired = (req, res, next) => {
  const token = req.headers.authorization;;

  if (!token)
    return res.status(401).json({ message: "no esta autorizado el token" });
  Jwt.verify(token, TOKEN_SECRET, (err, motoviajero) => {
    if (err) return res.status(403).json({ message: "token inavlido" });
    req.motoviajero = motoviajero;
    next();
  });
};
