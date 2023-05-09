import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Addrooms from '../adminpages/Addrooms'
import Showrooms from '../adminpages/Showrooms'
import Addemployee from '../adminpages/Addemployee'
import Showemployee from '../adminpages/Showemployee'
const Sidebar = () => {
  const navigation=useNavigate()
  const adminemail = sessionStorage.getItem("user_email");
  if(adminemail !== "mohmat646@gmail.com" || adminemail === null ){
      navigation("/loginsignup")
  }else{
  return (
    <>
     <div className="roomimg">
        <img src="images\roombg.png" alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '18%', objectFit: 'cover'}} />
      </div>
      <div className=''>
    <div className='col-lg-12 d-flex'>
      <div className='sidebar col-lg-3'>
        <ul>
          <li> <a className='logo' href="#"><img height={"120px"} width={"200px"} src="images\logoWorld_OF_Hyatt.png" alt="" /></a></li>
        </ul>
        <ul className='sidebaritem col-lg-12'>
          <li className='col-lg-12'> <Link to={'addrooms'}>Add room</Link></li>
          <li className='col-lg-12'> <Link to={'showrooms'}>Show Rooms</Link></li>
          <li className='col-lg-12'> <Link to={'addemployee'}>Add Employees</Link></li>
          <li className='col-lg-12'> <Link to={'showemployee'}>Show Employees</Link></li>
        </ul>
      </div>
<div className='sidbardata col-lg-9'>
         <Routes>
            <Route path='/addrooms' element={<Addrooms/>}/>
          </Routes>
          <Routes>
            <Route path='/showrooms' element={<Showrooms/>}/>
          </Routes>
          <Routes>
            <Route path='/addemployee' element={<Addemployee/>}/>
          </Routes>
          <Routes>
            <Route path='/showemployee' element={<Showemployee/>}/>
          </Routes>
</div>
    </div>
    </div>
    </>
  
  )
  }
}

export default Sidebar