import users from "./users.js";

const getUsersWithEyeColor = (arr, color) => {
  return arr.filter(function (user) {
    return user.eyeColor == color;
  });
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
