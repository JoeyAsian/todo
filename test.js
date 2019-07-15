const bcrypt = require('bcryptjs')


let password = "my password"

console.log(password);

// how to encrypt stuff
let encryptedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

console.log(encryptedPass);

if (bcrypt.compareSync(password, encryptedPass)){
    console.log("welcome you're logged in");
}
else {
    console.log("ACCESS DENIED")
}

// how we decrypt stuff