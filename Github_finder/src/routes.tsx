import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import "./index.css";

export const AppRoutes = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>} />
            

            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
        
        </BrowserRouter>
    )
}