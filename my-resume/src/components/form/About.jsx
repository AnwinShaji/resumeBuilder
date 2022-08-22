import React from 'react'

const About = () => {
    const firstName=document.getElementById("fname")
    console.log(firstName.value)
  return (
    <>
    First Name
    <input type="text" placeholder='First name' id='fname'/>
    Last Name
        <input type="text" placeholder='Last name' id='lname'/>
        Date of Birth
        <input type="date" placeholder='DD-MM-YYYY' id='dob'/>
        Address
        <input type="text" placeholder='Address' id='address'/>
        Mobile Number
        <input type="text" placeholder='Mobile' id='mob'/>
        </>
  )
}

export default About