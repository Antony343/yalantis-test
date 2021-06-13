import { createSelector } from "reselect";
import { getSectionsByMonth } from "../../utils/utils";

export const getEmployees = (state) => state.employeesPage.employees;

export const getActiveEmployees = createSelector((state) => state.employeesPage.activeEmployees, (activeEmployees) => {
  let structuredActiveEmployees = getSectionsByMonth(activeEmployees);
  return structuredActiveEmployees
});