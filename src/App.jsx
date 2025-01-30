// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './components/Home'
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
import StudentAssignment from './pages/students/Assignment'
// import ExamsSection from './pages/students/Exams'
import AttendanceSection from './pages/students/Attendance'
import StudentExamsSection from './pages/students/Exams'
import StudentPerformanceSection from './pages/students/Performance'
import StudentLibrarySection from './pages/students/Library'
import StudentProfileSection from './pages/students/Profile'
import StudentAnnouncementSection from './pages/students/Announcement'
import TeacherClasses from './pages/teachers/Classes'
import TeacherStudent from './pages/teachers/Student'
import TeacherExames from './pages/teachers/Exames'
import TeacherAssignment from './pages/teachers/Assignment'
import TeacherPerformanceSection from './pages/teachers/Performance'
import TeacherAttendance from './pages/teachers/Attendance'
import TeacherEventCalendar from './pages/teachers/Events'
import TeacherSettingsProfile from './pages/teachers/Profile'
import TeacherAnnouncement from './pages/teachers/Announcement'
import ErrorPage from './pages/ErrorPage'
import TeachersTeacher from './pages/teachers/Teachers'
import Home from './pages'
import MainLayout from './layouts/MainLayout'
import AboutUs from './pages/about-us'
import ContactUs from './pages/contact-us'
import Information from './pages/information'

function App() {

  
  return (
    <div className='h-screen'>
      <Routes>
      <Route path='*' element={<ErrorPage />}/>


      <Route path='/choose-user' element={<ChooseUser />}/>

      <Route path='/' element={<MainLayout><Home/> </MainLayout> }/>

      {/* <Route path='home' element={<><Home /></> }/> */}

      {/* <Route path='/prospectus' element={<><Home /></> }/> */}


      <Route path='/about-us' element={<><AboutUs /></> }/>
      <Route path='/information' element={<><Information /></> }/>
      <Route path='/contact-us' element={<><ContactUs /></> }/>


      
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

      {/* student section */} 
      <Route path='/student/assignment' element={<StudentAssignment />}/>
      <Route path='/student/announcement' element={<StudentAnnouncementSection />}/>
      <Route path='/student/profile' element={<StudentProfileSection />}/>
      <Route path='/student/attendance' element={<AttendanceSection />}/>
      <Route path='/student/exams' element={<StudentExamsSection />}/>
      <Route path='/student/performance' element={<StudentPerformanceSection />}/>
      <Route path='/student/library' element={<StudentLibrarySection />}/>

     {/* teacher section */}
      <Route path='/teacher/classes' element={<TeacherClasses />}/>
      <Route path='/teacher/exams' element={<TeacherExames />}/>
      <Route path='/teacher/students' element={<TeacherStudent />}/>
      <Route path='/teacher/teachers' element={<TeachersTeacher />}/>
      <Route path='/teacher/assignments' element={<TeacherAssignment />}/>
      <Route path='/teacher/performances' element={<TeacherPerformanceSection />}/>
      <Route path='/teacher/attendances' element={<TeacherAttendance />}/>
      <Route path='/teacher/announcements' element={<TeacherAnnouncement />}/>
      <Route path='/teacher/events' element={<TeacherEventCalendar />}/>
      <Route path='/teacher/settings' element={<TeacherSettingsProfile />}/>

      </Routes>
    </div>
  )
}

export default App
