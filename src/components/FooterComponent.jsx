import { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsGithub, BsGlobe, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { DarkModeContext } from '../utils/DarkModeContext';

function FooterComponent() {

    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleRezise = () => setWindowSize(window.innerWidth)
        window.addEventListener('resize', handleRezise);
        return () => {
            window.removeEventListener('resize', handleRezise);
        };
    }, []);

    const { isDarkMode } = useContext(DarkModeContext)

    return (
        <Navbar expand="lg" className={isDarkMode ? 'DarkBG' : 'bg-white'} sticky="bottom">
            <Container fluid>
                <Navbar.Brand className={isDarkMode ? 'whiteTertiary Bebas spacingText' : 'tertiaryColor Bebas spacingText'}> &copy;  2023 - Vida Sustentável</Navbar.Brand>
                {windowSize >= 579 ? (
                    <Nav className='gap-3'>
                        <a href="https://www.linkedin.com/in/luis-rodrigues202/" target="_blank" rel="noopener noreferrer" className={isDarkMode? 'text-decoration-none whiteColor' : "text-decoration-none primaryColor"}>
                            <BsLinkedin />
                        </a>

                        <a href="https://www.instagram.com/luiss_xavierr/" target="_blank" rel="noopener noreferrer" className={isDarkMode? 'text-decoration-none whiteColor' : "text-decoration-none primaryColor"}>
                            <BsInstagram />
                        </a>

                        <a href="https://github.com/thalys93" target="_blank" rel="noopener noreferrer" className={isDarkMode? 'text-decoration-none whiteColor' : "text-decoration-none primaryColor"}>
                            <BsGithub />
                        </a>
                        <a href="https://portifolio-luis-thalys.web.app/" target="_blank" rel="noopener noreferrer" className={isDarkMode? 'text-decoration-none whiteColor' : "text-decoration-none primaryColor"}>
                            <BsGlobe />
                        </a>
                    </Nav>
                ) : (null)}
            </Container>
        </Navbar>
    )
}

export default FooterComponent