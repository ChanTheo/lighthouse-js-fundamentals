const ageCalculator = function (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator('theo', 1995, 2019));
