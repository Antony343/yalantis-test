export const getSectionsByLetterWithParsedDataAndActiveStatus = (employees) => {
  if (employees.length === 0) {
    return [];
  }
  return Object.values(
    employees.reduce((acc, employee) => {
      employee.dob = Date.parse(employee.dob);
      employee.isActive = false;
      let firstLetter = employee.lastName[0].toLocaleUpperCase();
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

export const remasterEmployeesArrayStructure = employees => {
  let sortedByAlphabetEmployees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  // sectioning array by first lastName letters accordingly to the alphabet
  let sectionedEmployees = getSectionsByLetterWithParsedDataAndActiveStatus(sortedByAlphabetEmployees);

  sectionedEmployees = insertMissingAlphabetLetters(sectionedEmployees);
  // sorting array after inserting missing letters
  sectionedEmployees.sort((a, b) => a.firstLetter.localeCompare(b.firstLetter));
  return sectionedEmployees
}

export const getSectionsByMonth = (employees) => {
  if (!employees.length) {
    return employees;
  }

  let sections = Object.values(
    employees.reduce((acc, employee) => {
      let month = new Date(employee.dob).toLocaleString("en-us", {
        month: "long",
      });
      if (!acc[month]) {
        acc[month] = { monthName: month, section: [employee] };
      } else {
        acc[month].section.push(employee);
      }
      return acc;
    }, {})
  );

  sections.forEach((el) => el.section.sort((a, b) => a.dob - b.dob));

  return sections;
};