import { remasterEmployeesArrayStructure } from "../../utils/utils";
import { setEmployees } from "./actionCreators";
import { employeesService } from "./api.service";

export const fetchEmployees = () => async (dispatch) => {
  try {
    let resp = await employeesService.getEmployees();
    const restructured = remasterEmployeesArrayStructure(resp.data);
    dispatch(setEmployees(restructured))
  } catch (error) {
    return Promise.reject(error)
  }
};