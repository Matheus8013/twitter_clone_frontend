import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { useAuth } from './hooks/useAuth'

const Rotas = () => {
    const { isAuthenticated } = useAuth()


    return (
            <Routes>
                <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            </Routes>
    )
}

export default Rotas