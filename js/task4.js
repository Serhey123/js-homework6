import users from "./users.js";

const getInactiveUsers = (arr) => {
  return arr.filter(function (user) {
    return !user.isActive;
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
