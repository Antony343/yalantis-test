import React from "react";
import s from "./EmployeeCard.module.css";
import RadioButtons from "./RadioButtons";

const EmployeeCard = (props) => {
  return (
    <div>
      <span className={props.employee.isActive ? s.active : null}>
        {`${props.employee.lastName} ${props.employee.firstName}`}
      </span>
      <RadioButtons employee={props.employee} toggleActiveStatus={props.toggleActiveStatus}/>
    </div>
  );
}

export default React.memo(EmployeeCard);
