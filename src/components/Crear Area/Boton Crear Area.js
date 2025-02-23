import React, { useState } from 'react';
import CrearAreaModal from './CrearAreaModal.js';



const BotonCrearArea = () => {
    const [mostrarModal, setMostrarModal] = useState(false);
    console.log("boton crear area")

    return (
        <>
            <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>
                Crear Área
            </button>
            {mostrarModal && (
                <CrearAreaModal closeModal={() => setMostrarModal(false)} /* area={{}} */ />
            )}            
        </>
    );
};

export default BotonCrearArea;

