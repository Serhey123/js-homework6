import users from "./users.js";

const getUsersWithGender = (arr, gender) => {
  return arr
    .filter(function (user) {
      return user.gender == gender;
    })
    .map(function (user) {
      return user.name;
    });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
