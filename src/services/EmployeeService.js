import axios from "axios";

const EMPLOYEE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

 class EmployeeService{
    // create a method
    getAllEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL);
    }

    createEmployees(employee){
        return axios.post(EMPLOYEE_REST_API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_REST_API_URL+'/'+employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_REST_API_URL+'/'+employeeId);
    }
}

export default new EmployeeService();