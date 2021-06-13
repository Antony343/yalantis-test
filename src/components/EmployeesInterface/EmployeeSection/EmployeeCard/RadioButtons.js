import React from 'react';

const RadioButtons = props => {

  const handleOnChange = () => {
    props.toggleActiveStatus(props.employee.id);
    props.retreiveActiveEmployees(props.employee)
  }

  return (
    <form>
      <div className="radio">
        <label>
          <input type="radio" value="notActive" checked={!props.employee.isActive} onChange={handleOnChange} />
          Not Active
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="active" checked={props.employee.isActive} onChange={handleOnChange} />
          Active
        </label>
      </div>
    </form>
  )
}

export default RadioButtons;