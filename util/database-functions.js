import bcrypt from 'bcrypt'

export async function encryptPassword (pw) {
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(pw, 10, (_err, _hash) => {
      resolve(_hash)
    })
  })

  return hashedPassword
}

export async function decryptPassword (hashedPassword, password) {
  const validPassword = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (_err, _hash) => {
      resolve(_hash)
    })
  })
  return validPassword
}

export async function validateEmail (email) {
  const regex = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'

  if (String(email).match(regex)) {
    return true
  } else { return false }
}

const functions = {
  encryptPassword,
  decryptPassword,
  validateEmail
}

export default functions
