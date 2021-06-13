import React from "react";

const ActiveEmployeeCard = (props) => {
  let d = new Date(props.employee.dob);

  return (
    <div>
      <span>
        {`${props.employee.lastName} ${props.employee.firstName} - ${d.getDate()} ${d.toLocaleString('en-us', { month: 'long' })}, ${d.getFullYear()} year`}
      </span>
    </div>
  )
}

export default React.memo(ActiveEmployeeCard);
