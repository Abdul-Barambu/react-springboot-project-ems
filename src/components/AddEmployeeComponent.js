import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

export const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const history = useHistory();
    const {id} = useParams();
    const employee = {firstName, lastName, emailId};

    // make the function to use save and update
    const saveEmployee = (e) => {
        e.preventDefault();

        EmployeeService.createEmployees(employee).then(res => {
            console.log(res.data)
            history.push("/")
        }).catch(e => {
            console.log(e)
        })

    }

    const updateEmployee = (e) => {

        e.preventDefault();
        

        if(id){
            EmployeeService.updateEmployee(id, employee).then(res => {
                history.push("/");
            }).catch(e => {
                console.log(e)
            })
        } else {
            console.log("Request Not Found")
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(e => {
            console.log(e);
        })
    }, [])

    const title = () => {
        if(id){
            return(
                <>
                 <h2 className='text-center'>Update Employee</h2>
                 </>
            )

        }
        else {
            return(
                <>
                 <h2 className='text-center'>Add Employee</h2>
                 </>
            )
        }
    }

    const buttonlicked = () => {
        if(id){
            return(
                <>
                 <button className="btn btn-success mb-2 fw-bold" onClick={(e) => updateEmployee(e)}>UPDATE</button>
                 </>
            )

        }
        else {
            return(
                <>
                 <button className="btn btn-success mb-2 fw-bold" onClick={(e) => saveEmployee(e)}>SAVE</button>
                 </>
            )
        }
    }
    return (
        <div>
            <br /> <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <form>
                            {title()}
                            <div className="form-group mb-2 pt-2">
                                <label className="form-label fw-bold">First Name : </label>
                                <input type="text" className="form-control" 
                                        placeholder="Enter First Name"
                                        name='firstName'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                 />
                            </div>

                            <div className="form-group mb-2 ">
                                <label className="form-label fw-bold">Last Name : </label>
                                <input type="text" className="form-control" 
                                        placeholder="Enter Last Name"
                                        name='lastName'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                 />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label fw-bold">Email ID : </label>
                                <input type="email" className="form-control" 
                                        placeholder="Enter Email Address"
                                        name='emailId'
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                 />
                            </div>
                            {buttonlicked()}
                            <Link to='/' className='btn btn-danger mb-2 fw-bold mx-2'>CANCEL</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

