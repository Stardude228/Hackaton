import React from "react";
import {
  Container,
  CardColumns,
  Card,
  CardImg,
  Button,
} from "react-bootstrap";
import { CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

function Sale() {
  return (
    <Container className = "mt-5">
        <CardColumns>
                <Card>
                        <CardImg top width="100%" src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-2019-4k-dz.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Lamborghini</CardTitle>
                            <CardSubtitle>Little info about Lamborghini</CardSubtitle>
                            <CardText>Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
                                    The company is owned by the Volkswagen Group through its subsidiary Audi.</CardText>
                            <Button>Get more info</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width="100%" src="https://images.hdqwalls.com/wallpapers/red-bugatti-chiron-sport-2018-4k-3u.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bugatti</CardTitle>
                            <CardSubtitle>Little info about Bugatti</CardSubtitle>
                            <CardText>Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then-German city of Molsheim, Alsace by the Italian-born industrial designer Ettore Bugatti.
                                The cars were known for their design beauty and for their many race victories.</CardText>
                            <Button>Get more info</Button>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardImg top width="100%" src="https://www.hdcarwallpapers.com/walls/ferrari_f8_tributo_2019_4k_5k_2-HD.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Ferrari</CardTitle>
                            <CardSubtitle>Little info about Ferrari</CardSubtitle>
                            <CardText>Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy.
                            Founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940.
                                However, the company's inception as an auto manufacturer is usually recognized in 1947, when the first Ferrari-badged car was completed.</CardText>
                            <Button>Get more info</Button>
                        </CardBody>
                    </Card>

                </CardColumns>

    </Container>
  );
}

export default Sale;




{/* <TabContainer id="ledt-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <NavItem>
                <Nav.Link eventKey="first">blog</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey="second">sale</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link eventKey="third">contact</Nav.Link>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent>
              <TabPane  eventKey="first">
                <img src="https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg" />
                <p>
                  lorem mflsnfkjsdnvkjsdkvhsdbvkhbsdkvhbdkvbzksbvk kbvk sbfksbf
                  ksbfkwabf kabfsdfb k
                </p>
              </TabPane>
              <TabPane eventKey="second">
                <img src="https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg" />
                <p>
                  lorem mflsnfkjsdnvkjsdkvhsdbvkhbsdkvhbdkvbzksbvk kbvk sbfksbf
                  ksbfkwabf kabfsdfb k
                </p>
              </TabPane>
              <TabPane eventKey="third">
                <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg" />
                <p>
                  lorem mflsnfkjsdnvkjsdkvhsdbvkhbsdkvhbdkvbzksbvk kbvk sbfksbf
                  ksbfkwabf kabfsdfb k
                </p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer> */}