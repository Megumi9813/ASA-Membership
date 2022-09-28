import React from 'react'
import Iframe from 'react-iframe'
import { useLocation } from 'react-router-dom';

function Theater({courses}) {
    const location = useLocation();

  return (
    <>
        {courses.map(course => course.classes
            .filter(ielt => location.pathname === ielt.path)
            .map(ielt => (
                <div className="theater" key={course.id}>
                    <div className="video-player">
                        <div className="video-player_wrapper">
                            <div className="video_wrapper">
                                <Iframe url={ielt.video}/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="ielt__content">
                                <h1 className='theater-title'>{ielt.title}</h1>
                                <div className='theater_para-wrapper'>
                                    <p className='course_para-theater'>{ielt.para}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
    </>
  )
}

export default Theater