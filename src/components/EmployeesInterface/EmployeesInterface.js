import React from 'react';
import EmployeeSection from './EmployeeSection/EmployeeSection';
import s from './EmployeesInterface.module.css'

const EmployeesInterface = (props) => {
  return (
    <div className={s.sectionsContainer}>
      <div className={s.employeesContainer}>
        <div className={s.sectionTitle}><h2>Employees</h2></div>

        {props.employees.length
          ? props.employees.map((el) => {
            return (
              <EmployeeSection
                key={el.firstLetter}
                firstLetter={el.firstLetter}
                employees={el.section}
                toggleActiveStatus={props.toggleActiveStatus}
              />
            );
          })
          : null}
      </div>
    </div>
  );
};

export default EmployeesInterface;