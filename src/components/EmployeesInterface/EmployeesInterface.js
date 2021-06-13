import React from 'react';
import ActiveEmployeesSection from './ActiveEmployeesSection/ActiveEmployeesSection';
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
                retreiveActiveEmployees={props.retreiveActiveEmployees}
              />
            );
          })
          : null}
      </div>
      <div className={s.activeEmployeesContainer}>
        <div className={s.sectionTitle}><h2 className={s.sectionTitle}>Employees birthday</h2></div>
        {props.activeEmployees.length ? (
          props.activeEmployees.map((el) => {
            return (
              <ActiveEmployeesSection
                key={el.monthName}
                month={el.monthName}
                activeEmployees={el.section}
              />
            );
          })
        ) : (
          <h3 className={s.sectionTitle}>Employees List is empty</h3>
        )}
      </div>
    </div>
  );
};

export default EmployeesInterface;