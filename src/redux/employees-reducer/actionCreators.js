import { RETRIEVE_ACTIVE_EMPLOYEES, SET_EMPLOYEES, TOGGLE_ACTIVE_STATUS } from "./actionTypes";

export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });
export const toggleActiveStatus = (employeeId) => ({ type: TOGGLE_ACTIVE_STATUS, employeeId, });
export const retreiveActiveEmployees = (employee) => ({type: RETRIEVE_ACTIVE_EMPLOYEES, employee,});