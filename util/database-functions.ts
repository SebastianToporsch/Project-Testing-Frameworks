import bcrypt from 'bcrypt';

export async function encryptPassword(pw) {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(pw, 10, (err, hash) => {
      resolve(hash);
    });
  });

  return hashedPassword;
}

export async function decryptPassword(hashedPassword: String, password: String) {
  const validPassword = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, hash) => {
      resolve(hash);
    });
  });
  return validPassword;
}

export async function validateEmail(email:String) {

  let regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (String(email).match(regex)) {
    return true;
  } else
    return false;
}