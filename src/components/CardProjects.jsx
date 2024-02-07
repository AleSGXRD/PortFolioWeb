import React from 'react'
import './CardProjects.css'
import projectsJSON from '../model/projects.json'
import imgProject from '../assets/profile.jpg'
import { ObtainSVG } from '../logic/ObtainSVG'

const BREAK_POINT =  '/public'

function CardProjects(){
    const projects = projectsJSON.projects;
    

    return(
        <div className="card card-projects">
            <p className='tittle'>Proyectos</p>
            
            <div className='card-projects-list'>
              {
                projects.map((value,index) =>
                {
                    const direct = (value.image);
                    return <a href={value.link} target='_blank' className="card-project-element" key={index}>
                      <div className="card-project-element-presentation">
                        <img className="card-project-element-image" src={direct} alt="Image Project" />
                          <div className="card-project-element-technologies">
                            {ObtainSVG(value.technologies)}
                          </div>
                      </div>
                      <div className="card-project-element-descriptions">
                        <p className='tittle'>{value.tittle}</p>
                        <p>{value.description}</p>
                      </div>
                    </a>
                }
                )
              }
            </div>
        </div>
    )
}

export default CardProjects;