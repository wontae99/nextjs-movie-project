import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const hashedPassword = hash(password, 12);

  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = compare(password, hashedPassword);

  return isValid;
}

export async function createUser(name, email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Something went wrong!");
  // }

  // console.log(data);

  return data;
}
