import * as axios from 'axios';

const APIConfig = axios.create({
  baseURL: `https://yalantis-react-school-api.yalantis.com/api/task0`
});

export const employeesService = {
  getEmployees() {
    return APIConfig
            .get(`users`)
  }
}