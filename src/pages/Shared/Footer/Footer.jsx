import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare, FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#4A4A4A" }}>
            <Container className="pt-5">
                <div className="text-center">
                    <div>
                        <h2 className="text-white">Find Us on Social Medias</h2>
                        <hr className="text-white mx-auto w-50" />
                    </div>
                    <div>
                        <a style={{ color: "#087AEA" }} href="#" target="_blank" className="text-warning me-4 w"><FaFacebookSquare className="border border-white border-2 p-1 fs-1 rounded" /></a>
                        <a style={{ color: "#087AEA" }} href="#" target="_blank" className="text-warning me-4 w"><FaTwitterSquare className="border border-white border-2 p-1 fs-1 rounded" /></a>
                        <a style={{ color: "#087AEA" }} href="#" target="_blank" className="text-warning me-4 w"><FaLinkedin className="border border-white border-2 p-1 fs-1 rounded" /></a>
                        <a style={{ color: "#087AEA" }} href="#" target="_blank" className="text-warning me-4 w"><FaYoutubeSquare className="border border-white border-2 p-1 fs-1 rounded" /></a>
                        <a style={{ color: "#087AEA" }} href="#" target="_blank" className="text-warning me-4 w"><FaPinterestSquare className="border border-white border-2 p-1 fs-1 rounded" /></a>
                    </div>
                </div>

                <div className="text-center text-white p-5">
                    <div className="bg-dark pt-3 px-3 pb-1 rounded border border-warning border-5">
                        <p className="bg-dark p-5 rounded border border-warning border-5">
                            <span>
                                Copyright &copy; 2023 | <strong>Yumma Chef Recipe Hunter</strong> by <a href="https://github.com/csmahmud99" target="_blank" style={{ color: "#FFC107" }} className="fw-semibold text-decoration-none">CS Mahmud</a> | All Rights Reserved.
                            </span>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;