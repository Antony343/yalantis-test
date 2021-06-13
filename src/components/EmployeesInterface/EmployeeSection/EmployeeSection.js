import React from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import s from './EmployeeSection.module.css'

const EmployeeSection = (props) => {
  return (
    <div className={s.employeeContainer}>
      <div className={s.employeeCardTitle}>
        {props.firstLetter}
      </div>
      <div>
        {props.employees && props.employees.length
          ? props.employees.map((employee) => {
            return (
              <EmployeeCard key={employee.id} employee={employee} toggleActiveStatus={props.toggleActiveStatus} retreiveActiveEmployees={props.retreiveActiveEmployees} />
            );
          })
          : "-----"}
      </div>
    </div>
  );
};

export default EmployeeSection;
