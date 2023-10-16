import { Accordion, Col, Container, Figure, Row } from 'react-bootstrap'
import NavegationComponent from '../components/NavegationComponent'
import FooterComponent from '../components/FooterComponent'
import { useContext } from 'react'
import { DarkModeContext } from '../utils/DarkModeContext'

function About() {

  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <>
      <NavegationComponent />
      <Container fluid className='spacingText'>
        <Row className='mb-5'>
          <Col sm>
            <section>
              <article>
                <div className={isDarkMode? 'darkPopup Bebas text-center whiteColor' : 'lightPopup Bebas text-center'}>
                  <h3 className='p-2'> Quem Somos </h3>
                </div>
                <div className={isDarkMode? 'darkPopup BigShoulders mt-2 whiteColor' : 'lightPopup BigShoulders mt-2'}>
                  <p className='p-2'>
                    Bem-vindo ao <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>Vida Sustentável</span>, onde a paixão pelo planeta e o compromisso com um futuro mais <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>verde</span> se encontram. Nossa história é uma jornada de amor pela natureza, um desejo de mudança e o compromisso de inspirar outros a se juntarem a nós nesse movimento <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>vital.</span>
                  </p>
                </div>
              </article>
            </section>
          </Col>

          <Col sm>
            <section>
              <article>
                <div className={isDarkMode? 'darkPopup Bebas text-center whiteColor' : 'lightPopup Bebas text-center'}>
                  <h3 className='p-2'>Nossa Missão</h3>
                </div>
                <div className={isDarkMode? 'darkPopup BigShoulders whiteColor' : 'lightPopup BigShoulders mt-2'}>
                  <p className='p-2'>
                    No <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>Vida Sustentável</span>, nossa <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>missão é clara e inspiradora:</span> capacitar indivíduos e comunidades a adotar práticas de <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>vida sustentável,</span> transformando o nosso mundo em um lugar mais saudável, equilibrado e vibrante. Acreditamos que todos têm um papel a desempenhar na construção de um futuro mais sustentável e que juntos podemos fazer a <span className={isDarkMode? 'greenPrimary fw-bold' : 'greenSecondary fw-bold'}>diferença.</span>
                  </p>
                </div>
              </article>
            </section>
          </Col>
        </Row>

        <Row>
          <Col sm className='mb-4'>
            <section>
              <article>
                <div className={isDarkMode ? 'darkPopup Bebas text-center whiteColor' : 'lightPopup Bebas text-center'}>
                  <h3 className='p-2'> O Que Nos Move </h3>
                </div>
                <div className={isDarkMode? 'darkPopup BigShoulders mt-2 whiteColor' : 'lightPopup BigShoulders mt-2'}>
                  <Accordion flush alwaysOpen>
                    <Accordion.Item eventKey='0' className={isDarkMode? 'darkPopup whiteColor BigShoulders spacingText' : 'lightPopup BigShoulders spacingText'}>
                      <Accordion.Header>
                        <span className={isDarkMode? 'greenPrimary' : 'greenSecondary'}>Apaixonados pela Natureza:</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p> Expressar um profundo amor e apreço pela beleza e diversidade da natureza que nos motiva a protegê-la. </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='1' className={isDarkMode? 'darkPopup whiteColor BigShoulders spacingText' : 'lightPopup BigShoulders spacingText'}>
                      <Accordion.Header>
                        <span className={isDarkMode? 'greenPrimary' : 'greenSecondary'}>Conscientização dos Desafios Ambientais:</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p> Reconhecimento dos desafios ambientais urgentes, como as mudanças climáticas, poluição e perda de biodiversidade. </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='2' className={isDarkMode? 'darkPopup whiteColor BigShoulders spacingText' : 'lightPopup BigShoulders spacingText'}>
                      <Accordion.Header>
                        <span className={isDarkMode? 'greenPrimary' : 'greenSecondary'}>Compromisso com as Gerações Futuras:</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p> compromisso de criar um mundo sustentável para as gerações futuras, onde elas possam desfrutar de um planeta saudável e equilibrado. </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </article>
            </section>
          </Col>

          <Col sm>
            <section>
              <article>
                <div>
                  <Figure>
                    <Figure.Image
                      src={isDarkMode? 'img/aboutUsNight.png' : "img/aboutUsDay.png"}
                    />
                    <Figure.Caption className={isDarkMode? 'greenPrimary text-center BigShoulders' : 'primaryColor text-center BigShoulders greenSecondary'}>{isDarkMode? 'Bali, Indonesia' : 'El Cap, Yosemite National Park, United States'}</Figure.Caption>
                  </Figure>
                </div>
              </article>
            </section>
          </Col>
        </Row>
      </Container>
      <FooterComponent/>
    </>
  )
}

export default About