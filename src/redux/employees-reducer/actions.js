import { remasterEmployeesArrayStructure } from "../../utils/utils";
import { setEmployees } from "./actionCreators";
import { employeesService } from "./api.service";

export const fetchEmployees = () => (dispatch) => {
  employeesService
    .getEmployees()
    .then((resp) => {
      const restructured = remasterEmployeesArrayStructure(resp.data);
      dispatch(setEmployees(restructured))}
      )
    .catch((err) => console.error(err));
};