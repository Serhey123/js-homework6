import users from "./users.js";

const calculateTotalBalance = (arr) => {
  return arr.reduce(function (acc, user) {
    return (acc += user.balance);
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
