import React from 'react'
import { Link } from 'react-router-dom'

const ProjectHistory = () => {
  return (
    <div className='dark:bg-theme-dark-background text-theme-light-text dark:text-theme-dark-text
    h-screen w-full flex flex-col'>
        <h1 className='text-4xl font-bold'> Project History Page</h1>
        <Link to="/">Home</Link>
    </div>
  );
}

export default ProjectHistory
