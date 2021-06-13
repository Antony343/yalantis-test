export const getSectionsByLetterWithParsedData = (employees) => {
  console.log('expensive operation')
  if (employees.length === 0) {
    return [];
  }
  return Object.values(
    employees.reduce((acc, employee) => {
      let firstLetter = employee.lastName[0].toLocaleUpperCase();
      employee.dob = Date.parse(employee.dob);
      if (!acc[firstLetter]) {
        acc[firstLetter] = { firstLetter: firstLetter, section: [employee] };
      } else {
        acc[firstLetter].section.push(employee);
      }
      return acc;
    }, {})
  );
};

export const insertMissingAlphabetLetters = (array) => {
  let arrayCopy = [...array];

  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ].forEach((el) => {
    if (!arrayCopy.map((e) => e.firstLetter).includes(el)) {
      arrayCopy.push({ firstLetter: el });
    }
  });
  return arrayCopy;
};

