// 495
const bcrypt = require('bcrypt');

//495 first model
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hash);
}

//495 second model
const hashPassword2 = async (password) => {
    const hash = await bcrypt.hash(password, 12);
    console.log(hash);
}

// 495
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}

hashPassword('mypass'); // $2b$12$0FjbkkQzq0hyErmAjHGa4eSBihvSX7x63f40AcyXXpY8u2Qbt/sFG
login('mypass', '$2b$12$0FjbkkQzq0hyErmAjHGa4eSBihvSX7x63f40AcyXXpY8u2Qbt/sFG')
console.log("Second model");
hashPassword2('anotherPass');