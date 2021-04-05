// 495
const bcrypt = require("bcrypt");

//495 first model
const hashPassword = async (password) => {
  // number of rounds
  const salt = await bcrypt.genSalt(12);
  console.log("This is the salt number: " + salt);
  const hash = await bcrypt.hash(password, salt);
  console.log(`salt: ` + salt);
  console.log("hash: " + hash);
};

hashPassword("mypass");

//495 second model
const hashPassword2 = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  console.log(hash);
};

// 495;
const login = async (pw, hashedPw) => {
  // compare the password with the hashed password
  const result = await bcrypt.compare(pw, hashedPw);
  console.log("This is the result of the login: " + result);
  if (result) {
    console.log("LOGGED YOU IN! SUCCESSFUL MATCH!");
  } else {
    console.log("INCORRECT!");
  }
};

login("mypass", "$2b$12$7n4Vl/TmN1ojb1saMuBNCuFJtOK.FwUZPWi88lApydPJhet3ylmOa");
login("mypass", "$2b$12$IOEb.QjPuQtpSXyOm6qSKuMFA3sTWT7pETM.ZagImlQEw5AoQ50He");
login("mypass", "$2b$12$IOEb.QjPuQtpSXyOm6qSKuMFA3sTWT7pETM.ZagImlQEw5AoQ50Hm");

hashPassword2("mypass");
login("mypass", "$2b$12$IOEb.QjPuQtpSXyOm6qSKuMFA3sTWT7pETM.ZagImlQEw5AoQ50Hm");

// hashPassword("mypass"); // $2b$12$0FjbkkQzq0hyErmAjHGa4eSBihvSX7x63f40AcyXXpY8u2Qbt/sFG
// login("mypass", "$2b$12$0FjbkkQzq0hyErmAjHGa4eSBihvSX7x63f40AcyXXpY8u2Qbt/sFG");
// console.log("Second model");
// hashPassword2("anotherPass");
