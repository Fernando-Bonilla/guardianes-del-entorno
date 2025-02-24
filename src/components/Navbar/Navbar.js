import './Navbar.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { use, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../userSlice';
import { useEffect } from 'react';

const Navbar = () => {

    const[registerModalVisible, setRegisterModalVisible] = useState(false);
    const[registerModalVisibleLogin, setRegisterModalVisibleLogin] = useState(false);        

    const handleClickRegister = () => {
        setRegisterModalVisible(true);
    }

    const handleClickLogin = () => {
        setRegisterModalVisibleLogin(true);
    }

    const user = useSelector((state) => state.user);

    useEffect(() => {
        // Cierra el modal de login si un usuario está logueado
        if (user) {
            setRegisterModalVisibleLogin(false);
        }
    }, [user]); // Dependencia al estado 'user'

    const dispatch = useDispatch();
    
    return (
        <>
            <div id='Navbar-container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content d-flex align-items-center justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>                                                                               
                            </ul>
                            {user ? (
                                <>
                                    <p className="me-3 mb-0"> Bienvenido {user.name} </p>  
                                    <button type="button" className="btn btn-primary" onClick={() => dispatch(logout())}> Cerrar Sesion </button>                                   
                                </>
                            ) :
                                <>                            
                                    <button type="button" class="btn btn-link" onClick={handleClickLogin}>Login</button>                          
                                    <button type="button" class="btn btn-primary" onClick={handleClickRegister}>Registrarse</button>    
                                </>
                            }
                        </div>
                    </div>
                </nav>
            </div>
            {registerModalVisibleLogin && <Login closeModal={() => setRegisterModalVisibleLogin(false)}/> }
            {registerModalVisible && <Register closeModal={() => setRegisterModalVisible(false)}/> }
        </>
    )

};

export default Navbar;
