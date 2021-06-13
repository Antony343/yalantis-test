import { RETRIEVE_ACTIVE_EMPLOYEES, SET_EMPLOYEES, TOGGLE_ACTIVE_STATUS } from "./actionTypes";

const mapEmployeesToActivateOne = (employees, employeeId) => {
  // find activated employee in state and return for him new object with changed "isActive" property else => previous state
  return employees.map((e) => {
    if (e.section) {
      for (let i = 0; i < e.section.length; i++) {
        if (e.section[i].id === employeeId) {
          e.section[i] = { ...e.section[i], isActive: !e.section[i].isActive }
        }
      }
    }
    return e
  });
}

const getActiveEmployeesList = (activeEmployees, actionEmployee) => {
  const currentDate = new Date();
  const actionEmployeeCurrentDob = Date.parse(`${currentDate.getFullYear()}-${new Date(actionEmployee.dob).getMonth() + 1}-${new Date(actionEmployee.dob).getDate()}`);

  // is chosen employee is active and his dob will happen later this year or it't today add him to the activeEmployees list alse return prev state
  let filteredActiveEmployees = activeEmployees.length && actionEmployee.isActive
    ? activeEmployees.filter((e) => e.id !== actionEmployee.id)
    : (actionEmployeeCurrentDob > currentDate.getTime()) ? [...activeEmployees, actionEmployee] : [...activeEmployees];

  return filteredActiveEmployees.sort((a, b) => a.dob - b.dob);
}

const initialState = {
  employees: [],
  activeEmployees: []
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return {
        ...state,
        employees: action.employees,
      };
    }
    case TOGGLE_ACTIVE_STATUS: {

      return {
        ...state,
        employees: mapEmployeesToActivateOne(state.employees, action.employeeId)
      }
    }
    case RETRIEVE_ACTIVE_EMPLOYEES: {
      return {
        ...state,
        activeEmployees: getActiveEmployeesList(state.activeEmployees, action.employee),
      };
    }
    default:
      return state;
  }
};

export default employeesReducer;
