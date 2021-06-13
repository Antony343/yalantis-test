import { SET_EMPLOYEES, TOGGLE_ACTIVE_STATUS } from "./actionTypes";

export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });
export const toggleActiveStatus = (employeeId) => ({ type: TOGGLE_ACTIVE_STATUS, employeeId, });