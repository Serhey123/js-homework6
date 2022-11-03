import users from "./users.js";

const getSortedUniqueSkills = (arr) => {
  const skills = [];
  const userSkills = arr.forEach(function (user) {
    skills.push(...user.skills);
  });

  const uniqueSkills = skills
    .reduce(function (acc, skill) {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, [])
    .sort();
  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
