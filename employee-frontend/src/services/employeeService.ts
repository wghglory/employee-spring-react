import axios from 'axios';
import {Employee} from '../models/Employee';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8081/api/v1/employees';

export function saveEmployee(employee: Employee) {
  return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export function getEmployees() {
  return axios.get(EMPLOYEE_API_BASE_URL);
}

export function deleteEmployee(id: string) {
  return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
}

export function getEmployeeById(id: string) {
  return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
}

export function updateEmployee(employee: Employee, id: string) {
  return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee);
}
