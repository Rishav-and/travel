import React from 'react'
import './Info.css';
import { useLocation } from 'react-router-dom'

export const Info = () => {
    const location = useLocation(); 
  return (
    <div>
    <div className='profile'>
            <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=
            " alt="profile-pic"/>
        </div>
    <h2 className='name'>Hi! I am {location.state.name}</h2>
    <h3 className='occupation'>I am a {location.state.occupation}</h3>
    <h3 className='emailInfo'>Email: {location.state.email}</h3>
    </div>
  )
}