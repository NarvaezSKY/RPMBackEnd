import Jwt from "jsonwebtoken";

import { TOKEN_SECRET } from "../Config/Token.js";

export const AuthRequired = (re, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "no esta autorizado el token" });
  Jwt.verify(token, TOKEN_SECRET, (err, motoviajero) => {
    if (err) return res.status(403).json({ message: "token inavlido" });
    req.motoviajero = motoviajero;
    next();
  });
};
