import bcrypt from 'bcrypt';

export async function encryptPassword(pw: string) {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(pw, 10, (_err: any, _hash: unknown) => {
      resolve(_hash);
    });
  });

  return hashedPassword;
}

export async function decryptPassword(hashedPassword: String, password: String) {
  const validPassword = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (_err: any, _hash: unknown) => {
      resolve(_hash);
    });
  });
  return validPassword;
}

export async function validateEmail(email: String) {

  let regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (String(email).match(regex)) {
    return true;
  } else
    return false;
}