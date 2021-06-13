import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { retreiveActiveEmployees, toggleActiveStatus } from '../redux/employees-reducer/actionCreators';
import { fetchEmployees } from '../redux/employees-reducer/actions';
import { getActiveEmployees, getEmployees } from '../redux/employees-reducer/selectors';
import EmployeesInterface from '../components/EmployeesInterface/EmployeesInterface';

const EmployeesInterfaceContainer = (props) => {
  useEffect(() => {
    props.fetchEmployees()
  }, [])

  return (
    <EmployeesInterface {...props} />
  )
}

const mapStateToProps = state => {
  return {
    employees: getEmployees(state),
    activeEmployees: getActiveEmployees(state)
  }
}

export default connect(mapStateToProps, { fetchEmployees, toggleActiveStatus, retreiveActiveEmployees })(EmployeesInterfaceContainer);