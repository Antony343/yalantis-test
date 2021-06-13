import { SET_EMPLOYEES, TOGGLE_ACTIVE_STATUS } from "./actionTypes";

const initialState = {
  employees: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      let employeesWithActiveStatus = action.employees.map(el => ({ ...el, isActive: false }));

      return {
        ...state,
        employees: employeesWithActiveStatus,
      };
    }
    case TOGGLE_ACTIVE_STATUS: {
      let toggledEmployees = state.employees.map((employee) => {
        if (employee.id === action.employeeId) {
          return { ...employee, isActive: !employee.isActive }
        }
        return employee
      });

      return {
        ...state,
        employees: toggledEmployees
      }
    }

    default:
      return state;
  }
};

export default employeesReducer;
