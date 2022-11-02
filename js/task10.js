import users from "./users.js";

const getSortedUniqueSkills = (arr) => {
  return arr
    .reduce(function (acc, user) {
      acc.push(...user.skills);
      return acc;
    }, [])
    .reduce(function (acc, skill) {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
