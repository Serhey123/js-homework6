import users from "./users.js";

const getUserNames = (arr) => {
  return arr.map(function (user) {
    return user.name;
  });
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
