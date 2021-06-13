import classes from './Layout.module.css'
import { Route } from 'react-router-dom';
import EmployeesInterfaceContainer from '../../containers/EmployeesInterfaceContainer';

const Layout = () => {
  return (
    <div className={classes.layoutContainer}>
      <Route path='/employees' render={() => <EmployeesInterfaceContainer />} />
    </div>
  )
}

export default Layout;