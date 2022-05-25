import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';

import PropTypes from 'prop-types';
import ToggleStatus from '../container/togglestatus'

const ContactComponent = ({contact}) => {
    
    const [estado, setestado] = useState(contact.conectado);
    
    const cambiaEstado = () => {
        setestado(!estado)
    }

    return (
        <div>
            <p>Nombre: {contact.nombre}</p>
            <p>Apellido: {contact.apellido}</p>
            <p>email: {contact.email}</p>
            <p>Estado: {estado ? "Contacto en linea" : "Contacto No Disponible"}</p>
            <ToggleStatus handler={ cambiaEstado } />
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
