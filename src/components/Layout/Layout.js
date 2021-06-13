import classes from './Layout.module.css'
import { Route } from 'react-router-dom';
import EmployeesInterfaceContainer from '../EmployeesInterface/EmployeesInterfaceContainer';


const Layout = (props) => {
  return (
    <div className={classes.layoutContainer}>
      <Route path='/employee' render={() => <EmployeesInterfaceContainer />} />
    </div>
  )
}

export default Layout;