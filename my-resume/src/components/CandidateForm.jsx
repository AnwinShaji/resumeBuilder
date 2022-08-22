import React from 'react'
import "./CandidateForm.scss"
import About from './form/About'
import Education from './form/Education'
import Hobbies from './form/Hobbies'
import Summary from './form/Summary'
const CandidateForm = () => {
  return (
    <div className='candidate-form-container'>
        {/* About me */}
        <About/>
        {/* Hobbies */}
        <Hobbies/>
        {/* Summary */}
        <Summary/>
        {/* Edication */}
        <Education/>
    </div>
  )
}

export default CandidateForm