import 'bootswatch/dist/lux/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import CardGrid from './components/CardGrid';
function App() {
  return (
    <div className='App'>
      <Header />
      <Jumbo />
      <CardGrid />
      <Row>
        <Col>
          <div class='card text-white bg-primary mb-3 w-100'>
            <div class='card-header'>
              HTML | CSS | JavaScript | SCSS | BootStrap | TailwindCSS |
              MaterializeCSS |
            </div>
            <div class='card-body'>
              <h4 class='card-title'>
                A Collection of Sites Built with HTML CSS and JavaScript with a
                multitude of different libraries
              </h4>
              <p class='card-text'>
                Mainly static sites built with HTML, CSS and JS. As well as some
                built with the more popular libraries.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class='card text-white bg-primary mb-3 w-100'>
            <div class='card-header'>
              JavaScript | React | MaterialUI | ReactBootstrap | BootSwatch |
              ReactStrap | MongoDB{' '}
            </div>
            <div class='card-body'>
              <h4 class='card-title'>
                React Apps using Node with MongoDB and Express | MERN
              </h4>
              <p class='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class='card text-white bg-primary mb-3 w-100'>
            <div class='card-header'>Python | Django | React | PostgreSQL</div>
            <div class='card-body'>
              <h4 class='card-title'>
                Django and Django Rest Framework Using PostgreSQL
              </h4>
              <p class='card-text'>
                Sites built with various frameworks that incorporate a Django
                backend or the Django Rest Framework to serve data to a
                frontend; usually React.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
