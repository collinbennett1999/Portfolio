import React from 'react'
import './Header.css'
import Resume from '../../assets/CollinBennettResume.pdf'

//import CV from '../../assets/cv.pdf';
const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} className="btn" download>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
