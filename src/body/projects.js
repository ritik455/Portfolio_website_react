import React from 'react'

export default function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <div className='projects_container'>
           <div className='projects_child'>
            <h3>Portfolio website</h3>
            <p>It is a simple portfolio website made using HTML and CSS.</p>
            <div className='projects_child_button_group'>
              <button className='projects_button'>
                <a href='https://github.com/ritik455/Personal-Site'>CODE</a>
              </button>
              <button className='projects_button'>
                <a href='https://ritik455.github.io/Portfolio-Website/'>DEMO</a>
              </button>
            </div>
           </div>
           <div className='projects_child'>
              <h3>Tin Dog</h3>
              <p>It is a simple website built using HTML and CSS.</p>
              <div className='projects_child_button_group'>
              <button className='projects_button'>
                <a href='https://github.com/ritik455/TinDog-Website'>CODE</a>
              </button>
              <button className='projects_button'>
                <a href='https://ritik455.github.io/TinDog-Website/'>DEMO</a>
              </button>
            </div>
           </div>
        </div>
    </div>
  )
}
