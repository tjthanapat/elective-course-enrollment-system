import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateCourse from './CreateCourse'
import Dashboard from './CourseDashboard';
import Enroll from './Enroll';
import GetStudentData from './GetStudentData';
import CourseManagement from './CourseManagement';
import GradeConfig from './GradeConfig';
import Homepage from './Homepage';
import CourseYearConfig from './CourseYearConfig';
import EditCourse from './EditCourse';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/search/'>
          <GetStudentData/>
        </Route>
        <Route path='/course/enroll'>
          <Enroll/>
        </Route>
        <Route path='/course'>
          <Dashboard/>
        </Route>
        <Route path='/admin/createcourse'>
          <CreateCourse/>
        </Route>
        <Route path='/admin/editcourse'>
          <EditCourse/>
        </Route>
        <Route path='/admin/system/config/year'>
          <CourseYearConfig/>
        </Route>
        <Route path='/admin/config/grade'>
          <GradeConfig/>
        </Route>
        <Route path='/admin'>
          <CourseManagement/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
