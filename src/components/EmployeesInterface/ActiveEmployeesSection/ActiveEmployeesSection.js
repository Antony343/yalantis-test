import React from "react";
import ActiveEmployeeCard from "./ActiveEmployeeCard/ActiveEmployeeCard";
import s from './ActiveEmployeesSection.module.css'

const ActiveEmployeesSection = (props) => {
  return (
    <div className={s.activeEmployeesSection}>
      <div className={s.cardTitle}>{props.month}</div>
      <div>
        {props.activeEmployees && props.activeEmployees.length
          ? props.activeEmployees.map((employee) => {
            return (
              <ActiveEmployeeCard key={employee.id} employee={employee} />
            );
          })
          : null}
      </div>
    </div>
  );
};

export default ActiveEmployeesSection;
