import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Welcome } from '../components/LandingPage/Welcome';
export function LandingPage () {
    return (
        <Container fluid="sm">
          <Row>
            <Col>
              <Welcome />
            </Col>
          </Row>
        </Container>
      );
}
