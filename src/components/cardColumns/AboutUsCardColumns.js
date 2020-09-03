import React from 'react'
import {
    Button,
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
    ButtonGroup,
    Container,
    Row,
    Col,
} from 'reactstrap';

function AboutUsCardColumns(props) {

    const { item } = props;
    console.log(props);

    return (
        <div>
            <Container className="mt-3 d-flex">
                <Row>
                    {props.data.map((item) => (
                        <Col md={4} key={item._id}>
                            <Card item = {item}>
                                <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardSubtitle>Little info about {item.title}</CardSubtitle>
                                    <CardText>{item.comment}</CardText>
                                    <ButtonGroup>
                                        <Button>Get more info</Button>
                                        <Button color="primary">Purchase {item.price}</Button>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default AboutUsCardColumns
