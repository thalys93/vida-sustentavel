import { useContext, useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import NavegationComponent from "../components/NavegationComponent";
import { DarkModeContext } from "../utils/DarkModeContext";

function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleRezise = () => setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleRezise);
    return () => {
      window.removeEventListener('resize', handleRezise);
    };
  }, []);

  const primaryColor = "whiteColor"

  const { isDarkMode } = useContext(DarkModeContext)


  return (
    <>
      {windowSize >= 579 ? (
        <NavegationComponent customClass={primaryColor} />
      ) : (
        <NavegationComponent />
      )}
      <Container fluid className="mt-lg-5">
        <Row>
          <Col sm={windowSize >= 576 ? true : false}>
            {windowSize >= 579 ? (
              HomeDesktop()
            ) : (
              HomeMobile()
            )}
          </Col>
        </Row>
      </Container>
    </>
  )

  function HomeDesktop() {
    return <section className="m-lg-5 ms-lg-5 m-md-2 ms-md-4">
      <article>
        <Container fluid>
          <Row>
            <Col md>
              <div className="flex flex-column pb-3">
                <h1 className={isDarkMode? 'Bebas whiteColor spacingTitle' : "Bebas primaryColor spacingTitle"}> Faça a <br /> diferença <span className="greenPrimary"> Hoje </span></h1>
                <h5 className={isDarkMode? 'BigShoulders whiteTertiary spacingSubtitle fw-bolder' : "BigShoulders tertiaryColor spacingSubtitle fw-bolder"}> Juntos Podemos Construir <br />um futuro mais <span className="greenPrimary"> Verde </span></h5>
              </div>
              <div>
                <a href="/about">
                  <button className="GreenBtn whiteColor Bebas w-50"><h4>Saiba Mais</h4> </button>
                </a>
              </div>
            </Col>
            <Col md>
              <Container fluid>
                <Image src={isDarkMode ? 'img/nightHomeVetor.png' : "img/homeVetor.png"} className="imageHome" width={windowSize >= 1025.233 ? null : windowSize >= 768 ? "57%" : "0%"} />
              </Container>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  }

  function HomeMobile() {
    return <section>
      <article className="mobileText">
        <div className="flex flex-column pb-3">
          <h1 className={isDarkMode ? 'Bebas whiteColor spacingTitle' : "Bebas primaryColor spacingTitle"}> Faça a <br /> diferença <span className="greenPrimary"> Hoje </span></h1>
          <h2 className={isDarkMode? 'BigShoulders whiteTertiary spacingSubtitle' : "BigShoulders tertiaryColor spacingSubtitle"}> Juntos Podemos Construir um <br /> futuro mais <span className="greenPrimary"> Verde </span></h2>
        </div>
        <div>
          <a href="/about">
            <button className="GreenBtn whiteColor Bebas"><h4>Saiba Mais</h4> </button>
          </a>
        </div>
      </article>
    </section>;
  }
}

export default Home