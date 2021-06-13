import { createSelector } from "reselect";
import { getSectionsByLetterWithParsedData, insertMissingAlphabetLetters } from "../../utils/utils";

export const getEmployees = createSelector((state) => state.employeesPage.employees, (employees) => {
  if (!employees.length) return employees

  let sortedByAlphabetEmployees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName));

  // sectioning array by first lastName letters accordingly to the alphabet
  let sectionedEmployees = getSectionsByLetterWithParsedData(sortedByAlphabetEmployees);

  sectionedEmployees = insertMissingAlphabetLetters(sectionedEmployees);
  // sorting array after inserting missing letters
  sectionedEmployees.sort((a, b) => a.firstLetter.localeCompare(b.firstLetter));
  
  return sectionedEmployees
}
)