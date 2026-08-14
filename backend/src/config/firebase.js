// import * as admin from "firebase-admin";
// import serviceAccount from "../../firebase.json" with { type: "json" };
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// export default admin

import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const serviceAccount = JSON.parse(
  fs.readFileSync(path.resolve("./firebase.json"), "utf-8")
);

admin.initializeApp({
  credential: admin.cert(serviceAccount),
});

export default admin;
