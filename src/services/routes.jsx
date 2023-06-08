import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import HomePage from '../pages/homePage'

const Router = createBrowserRouter(createRoutesFromElements(
    <Route path="/home" element={<HomePage/>}>
        
    </Route>
))

export default Router
