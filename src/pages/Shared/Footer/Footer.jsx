import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor: "#4A4A4A"}}>
            <Container>
                <div className="text-center text-white p-5">
                    <p className="bg-dark p-5 rounded">
                        Copyright &copy; 2023 | <strong>Yumma Chef Recipe Hunter</strong> by <a href="https://github.com/csmahmud99" target="_blank" style={{color: "#FFC107"}} className="fw-semibold text-decoration-none">CS Mahmud</a> | All Rights Reserved.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;