import React from 'react'
import './Skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaPython } from 'react-icons/fa'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaJava } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'

const icons = [
  FaPython,
  CgCPlusPlus,
  FaJava,
  FaReact,
  SiPostgresql,
  SiDjango,
]
const data1 = [
  {
    icon: FaPython,
    language: 'Python',
    experience: 'Experienced',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    language: 'C++',
    experience: 'Experienced',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    language: 'Java',
    experience: 'Intermediate',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    language: 'HTML, CSS, JavaScript',
    experience: 'Beginner',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    language: 'PostgreSQL',
    experience: 'Intermediate',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    language: 'Django',
    experience: 'Experienced',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

const data2 = [
  
]

const skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Programming</h3>
          <div className='skills__content'>
          {
            data1.map(({language, experience, about}, index) => {
              const Icon = icons[index];
              return (
                <article className='skills__details'>
                  <Icon size={30} className='skills__details-icon'/>
                  <div>
                    <h4>{language}</h4>
                    <small className='text-light'>{experience}</small>
                  </div>
                </article>
              )
              
            })
          }
          </div>
        </div>
        <div className='skills__backend'>
        <h3>Circuit Design</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills