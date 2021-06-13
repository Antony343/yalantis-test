import { setEmployees } from "./actionCreators";
import { employeesService } from "./api.service";

export const fetchEmployees = () => (dispatch) => {
  employeesService
    .getEmployees()
    .then((resp) => dispatch(setEmployees(resp.data)))
    .catch((err) => console.error(err));
};