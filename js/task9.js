import users from "./users.js";
const copy = [...users];

const getNamesSortedByFriendsCount = (arr) => {
  return arr.sort(function (prevUser, nextUser) {
    return prevUser.friends.length - nextUser.friends.length;
  });
};

console.log(getNamesSortedByFriendsCount(copy));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
