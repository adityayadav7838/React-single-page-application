import React from 'react'
import {userParams} from "react-router-dom"
import { useApi } from '../../customHooks/CustomHooks'
const EditProfile = () => {
    
    let id=userParams()
    console.log(id);
  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <label >Username:</label>
        <input type="text" />
        <br />

        <label >Email:</label>
        <input type="text" />
        <br />
        <label >Password:</label>
        <input type="text" />
        <br />
        <button type='submit'>update</button>
      </form>
    </div>
  )
}

export default EditProfile
