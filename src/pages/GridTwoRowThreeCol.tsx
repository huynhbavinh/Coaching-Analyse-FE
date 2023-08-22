import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GridTwoRowThreeColInterface } from '../models/GridTwoRowThreeCol.models';

function GridTwoRowThreeCol(elements: GridTwoRowThreeColInterface) {
    return (
        <Container className={elements.options && elements.options.background}>
            <Row>
                {
                    elements.elementsFirstRow.map((element, index) => {
                        if (element.isWider) {
                            return (<Col key={index} xs={6}>{element.element}</Col>)
                        } else {
                            return (<Col key={index}>{element.element}</Col>)
                        }
                    })
                }
            </Row>
            <Row>
                {
                    elements.elementsSectRow.map((element, index) => { return (<Col key={index}>{element.element}</Col>) })
                }
            </Row>
        </Container>
    );
}

export default GridTwoRowThreeCol;