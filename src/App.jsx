// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Screen from './components/Screen'
import ChooseUser from './components/ChooseUser'
import TeacherSignin from './components/TeacherSignin'
import StudentSignIn from './components/StudentSignin'
import AdminSignIn from './components/AdminSignin'
import AdminDashboard from './pages/admin/Dashboard'
import StudentDashboard from './pages/students/Dashboard'
import TeacherDashboard from './pages/teachers/Dashboard'
import Classes from './pages/admin/Classes'
import Exam from './pages/admin/Exam'
import Attendance from './pages/admin/Attendance'
import Performance from './pages/admin/Performance'
import Teachers from './pages/admin/Teachers'
import Student from './pages/admin/Students'
import Assignment from './pages/admin/Assignment'
import Library from './pages/admin/Library'
import Announcement from './pages/admin/Announcement'
import EventCalendar from './pages/admin/EventCalendar'
import SettingsProfile from './pages/admin/SettingsProfile'

function App() {

  
  return (
    <div className='h-screen'>
      <Routes>
      {/* <Route path='/' element={<Screen />}/> */}

      <Route path='/' element={<Home />}/>
      <Route path='/choose-user' element={<ChooseUser />}/>
      <Route path='/admin-signin' element={<AdminSignIn />}/>
      <Route path='/student-signin' element={<StudentSignIn />}/>
      <Route path='/teacher-signin' element={<TeacherSignin />}/>
      {/* <Route path='/choose-user' element={<TeacherSignin />}/> */}


      {/* all dashboard routes  */}
      <Route path='/admin/dashboard' element={<AdminDashboard />}/>
      <Route path='/student/dashboard' element={<StudentDashboard />}/>
      <Route path='/teacher/dashboard' element={<TeacherDashboard />}/>

      {/* admin sections */}
      <Route path='/admin/classes' element={<Classes />}/>
      <Route path='/admin/exams' element={<Exam />}/>
      <Route path='/admin/attendance' element={<Attendance />}/>
      <Route path='/admin/performance' element={<Performance />}/>
      <Route path='/admin/teachers' element={<Teachers />}/>
      <Route path='/admin/students' element={<Student />}/>
      <Route path='/admin/assignments' element={<Assignment />}/>
      <Route path='/admin/library' element={<Library />}/>
      <Route path='/admin/announcement' element={<Announcement />}/>
      <Route path='/admin/event' element={<EventCalendar />}/>
      <Route path='/admin/settings' element={<SettingsProfile />}/>
      </Routes>
    </div>
  )
}

export default App
