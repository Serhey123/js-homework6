import users from "./users.js";

const getUserWithEmail = (arr, email) => {
  return arr.find(function (user) {
    return user.email == email;
  });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
