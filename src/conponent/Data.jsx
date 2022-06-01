import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { useEffect,useState } from 'react'

const Data = () => {
  const {state} = useContext(AuthContext)
 const [data, setdata] = useState()
useEffect(() => {
  fetch('https://reqres.in/api/users?page=2')
  .then((r)=> r.json())
  .then((d)=> setdata(d.data))
}, [state])

console.log(data)

  return (
      state=="login"?<div>
        {data.map(e=>{
          return  <ul key ={e.id}>
          <p> first name : {e.first_name}</p>
        </ul>

         

        })}
         </div>: <div> login first</div>
  )
}

export default Data