import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // call the method created in employeeservice...
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        })
    }, [])

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then(res => {
            EmployeeService.getAllEmployees().then((response) => {
                setEmployees(response.data)
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            })
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
            <table className='table table-bordered table-striped col-sm-12'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link to={`/edit-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                                    <button className='btn btn-danger mx-2' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
