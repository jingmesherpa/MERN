import React from 'react'

import { Route, Routes } from 'react-router-dom'
const mainroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' >Hello from Home</Route>
            <Route path='/about'> </Route>
            <Route path='/footer'></Route>
        </Routes>
    </div>
  )
}

export default mainroute