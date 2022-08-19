import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { closeSidebar } from './Nav'

function Sidebar({ courses }) {
    const [open, setOpen] = useState(false)

  return (
    <div className="sidebar">
        <ul>
            <div className="aside">
                <Link to="">
                    <li className='submenu' onClick={closeSidebar}>
                        <div>
                            <FontAwesomeIcon icon="fa-house" className='sidebar-icon'/>
                            <span>Home</span>
                        </div>
                    </li>
                </Link>
                <Link to="/">
                    <li className='submenu' onClick={closeSidebar}>
                        <div>
                            <FontAwesomeIcon icon="fa-list" className='sidebar-icon'/>
                            <span>Dashboard</span>
                        </div>
                    </li>
                </Link>
                {courses
                    .map(course => {
                        // console.log({course})
                    return (
                        <li className='submenu' onClick={() => setOpen(!open)} key={course.title}>
                            <div className='submenu_title'>
                                <div className='submenu_active'>
                                    <FontAwesomeIcon icon="fa-earth-americas" className='sidebar-icon'/>
                                    <span>{course.title}</span>
                                </div>
                                <FontAwesomeIcon icon="fa-angle-down" className={open ? 'submenu-icon submenu-down close' : 'submenu-icon submenu-down'}/>
                                <FontAwesomeIcon icon="fa-angle-up" className={open ? 'submenu-icon submenu-up open' : 'submenu-icon submenu-up'} />
                            </div>  
                            <ul className={open ? 'submenu-option open' : 'submenu-option'}>
                                {course.classes?.map(data => {
                                    // console.log({data})
                                    return (
                                        <Link to={data.path} key={data.title} onClick={closeSidebar}>
                                            <li>{data.title}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </li>
                    )}
                    )}
            </div>
        </ul>
    </div>
  )
}

export default Sidebar