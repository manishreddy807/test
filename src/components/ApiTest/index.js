import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function APiTest() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fetchedData, setFetchedData] = useState('')
   async function fetchData(){
       const {data} = await axios.post(
           'localhost:3002/register'
       )
        setFetchedData(data)
   }
  
   useEffect(() => {
       fetchData()
   }, [])

    const submitform = async (e) => {
         e.preventdefault()
         fetchData()
    }
  return (
    <div className='d-flex flex-row'>
        <form className='d-flex flex-column' onSubmit = {submitform}>
            <label htmlFor='username'>username</label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor='email'>email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor='password'>password</label>
            <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor='confrmpasswrd'>confirm password</label>
            <input id='confrmpasswrd' type="password" />
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}
