import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import List from '../pages/List';
import Single from '../pages/Single';
import New from '../pages/New';
import Layout from '../layout/Layout';
import { productInput, userInput } from '../constant/form';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { hotelColumns, roomColumns, userColumns } from '../dummydata';
import NewHotel from '../pages/NewHotel';
import NewRoom from '../pages/NewRoom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/signin" />; // Fixed "signin" to "login" to match the route
    }
    return children;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/signin' element={<Login />} />
            <Route path='/' element={<Layout />} >
                <Route path='/' element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path='/users'>
                    <Route index element={
                        <ProtectedRoute>
                            <List columns={userColumns} />
                        </ProtectedRoute>
                    } />
                    <Route path=':userId' element={
                        <ProtectedRoute>
                            <Single />
                        </ProtectedRoute>
                        } />
                    <Route path='new' element={<New inputs={userInput} title="Add New User" />} />
                </Route>
                <Route path='/hotels'>
                    <Route index element={
                        <ProtectedRoute>
                            <List columns={hotelColumns} />
                        </ProtectedRoute>
                        } />
                    <Route path=':productId' element={
                        <ProtectedRoute>
                            <Single />
                        </ProtectedRoute>
                        } />
                    <Route path='new' element={
                        <ProtectedRoute> 
                            <NewHotel /> 
                        </ProtectedRoute>
                        } />
                </Route>
                <Route path='/rooms'>
                    <Route index element={
                        <ProtectedRoute>
                            <List columns={roomColumns} />
                        </ProtectedRoute>
                        } />
                    <Route path=':productId' element={
                        <ProtectedRoute>
                            <Single />
                        </ProtectedRoute>
                        } />
                    <Route path='new' element={
                        <ProtectedRoute> 
                            <NewRoom /> 
                        </ProtectedRoute>
                        } />
                </Route>
            </Route>
        </>
    )
);

function Routing() {
    return (
        <RouterProvider router={router} />
    );
}

export default Routing;
