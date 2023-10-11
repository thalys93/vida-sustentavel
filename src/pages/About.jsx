import { Col, Container, Figure, Row } from 'react-bootstrap'
import NavegationComponent from '../components/NavegationComponent'

function About() {
  const primaryColor = "primaryColor"  
  return (
    <>
    <NavegationComponent customClass={primaryColor}/>
    <Container fluid>
      <Row>
        <Col sm>
          <section>
            <article>
              <div className='lightPopup Bebas'>
                <h3> Quem Somos </h3>
              </div>
              <div className='lightPopup BigShoulders'>
                <p>
                  Bem-vindo ao <span>Vida Sustentável</span>, onde a paixão pelo planeta e o compromisso com um futuro mais <span>verde</span> se encontram. Nossa história é uma jornada de amor pela natureza, um desejo de mudança e o compromisso de inspirar outros a se juntarem a nós nesse movimento <span>vital.</span>
                  </p>
              </div>
            </article>
          </section>
        </Col>

        <Col sm>
          <section>
            <article>
              <div>
                <h3>Nossa Missão</h3>
              </div>
              <div>
                <p>
                No <span>Vida Sustentável</span>, nossa <span>missão é clara e inspiradora:</span> capacitar indivíduos e comunidades a adotar práticas de <span>vida sustentável,</span> transformando o nosso mundo em um lugar mais saudável, equilibrado e vibrante. Acreditamos que todos têm um papel a desempenhar na construção de um futuro mais sustentável e que juntos podemos fazer a <span>diferença.</span>
                </p>
              </div>
            </article>
          </section>
        </Col>          
      </Row>
      <Row>
      <Col sm>
          <section>
            <article>
              <div>
                <h3> O Que Nos Move </h3>
              </div>
              <div>
                <ul>
                  <li>
                    <span>Apaixonados pela Natureza:</span>
                  </li>
                  <li>
                    <span>Conscientização dos Desafios Ambientais:</span>
                  </li>
                  <li>
                    <span>Compromisso com as Gerações Futuras:</span>
                  </li>
                </ul>
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
                  src="img/aboutUsDay.png"
                  />
                <Figure.Caption>El Cap, Yosemite National Park, United States</Figure.Caption>
                </Figure>
              </div>
            </article>
          </section>
        </Col>         
      </Row>
    </Container>
    </>
  )
}

export default About