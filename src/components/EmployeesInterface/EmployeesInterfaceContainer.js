import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleActiveStatus } from '../../redux/employees-reducer/actionCreators';
import { fetchEmployees } from '../../redux/employees-reducer/actions';
import { getEmployees } from '../../redux/employees-reducer/selectors';
import EmployeesInterface from './EmployeesInterface';


const EmployeesInterfaceContainer = ({ employees, fetchEmployees, toggleActiveStatus }) => {

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <EmployeesInterface employees={employees} toggleActiveStatus={toggleActiveStatus} />
  )
}

const mapStateToProps = state => {
  return {
    employees: getEmployees(state)
  }
}

export default connect(mapStateToProps, { fetchEmployees, toggleActiveStatus })(EmployeesInterfaceContainer);