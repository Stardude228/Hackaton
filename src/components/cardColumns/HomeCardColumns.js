import React from 'react'
import { 
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody,
    ButtonGroup, 
    Button,
} from 'reactstrap'
import { useHistory } from 'react-router-dom';

function HomeCardColumns(props) {

    const { item } = props;
    console.log(props);

    const history = useHistory();


    // const item = props.props.data;
    // console.log(item)


    // const handleProductDetail = (id) => {
    //     history.replace(`/posts/${item + [id]}`)
    // }

    return (
        <Card>
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
    )
}
            
            {/* <Card>
                <CardBody>
                    {item.title}
                </CardBody>
            </Card> */}
            {/* <CardColumns>
                <Card className = "upperCards" body inverse color="primary">
                    <CardTitle>Supercars</CardTitle>
                    <CardText>Our online shop has an enormous number of diverse supercars.</CardText>
                    <Button onClick={() => history.replace('/posts/' + item.id)} color="light">Learn more</Button>
                </Card>

                <Card className = "upperCards" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>Comfortable</CardTitle>
                    <CardText>Every our supercar has own comfortable interior, which makes it more enjoyable to ride.</CardText>
                    <Button onClick={() => history.replace('/posts/' + item.id)} color="light">Learn more</Button>
                </Card>

                <Card className = "upperCards" body inverse color="primary">
                    <CardTitle>Fast</CardTitle>
                    <CardText>Every our supercar has not less than 1800 horsepower and can reach 200km per hour.</CardText>
                    <Button color="light">Learn more</Button>
                </Card>

            </CardColumns>

            <CardColumns>

                <Card>
                    <CardImg top width="100%" src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-2019-4k-dz.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Lamborghini</CardTitle>
                        <CardSubtitle>Little info about Lamborghini</CardSubtitle>
                        <CardText>Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
                                The company is owned by the Volkswagen Group through its subsidiary Audi.</CardText>
                        <ButtonGroup>
                            <Button>Get more info</Button>
                            <Button color="primary">Purchase</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://images.hdqwalls.com/wallpapers/red-bugatti-chiron-sport-2018-4k-3u.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Bugatti</CardTitle>
                        <CardSubtitle>Little info about Bugatti</CardSubtitle>
                        <CardText>Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then-German city of Molsheim, Alsace by the Italian-born industrial designer Ettore Bugatti.
                            The cars were known for their design beauty and for their many race victories.</CardText>
                        <ButtonGroup>
                            <Button>Get more info</Button>
                            <Button color="primary">Purchase</Button>
                        </ButtonGroup>
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
                        <ButtonGroup>
                            <Button>Get more info</Button>
                            <Button color="primary">Purchase</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-2019-4k-dz.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Lamborghini</CardTitle>
                        <CardSubtitle>Little info about Lamborghini</CardSubtitle>
                        <CardText>Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
                                The company is owned by the Volkswagen Group through its subsidiary Audi.</CardText>
                        <ButtonGroup>
                            <Button>Get more info</Button>
                            <Button color="primary">Purchase</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="100%" src="https://images.hdqwalls.com/wallpapers/red-bugatti-chiron-sport-2018-4k-3u.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Bugatti</CardTitle>
                        <CardSubtitle>Little info about Bugatti</CardSubtitle>
                        <CardText>Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then-German city of Molsheim, Alsace by the Italian-born industrial designer Ettore Bugatti.
                            The cars were known for their design beauty and for their many race victories.</CardText>
                        <ButtonGroup>
                            <Button>Get more info</Button>
                            <Button color="primary">Purchase</Button>
                        </ButtonGroup>
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
                        <ButtonGroup>
                            <Button>Get more info</Button>
                            <Button color="primary">Purchase</Button>
                        </ButtonGroup>
                    </CardBody>
                </Card>

            </CardColumns> */}

export default HomeCardColumns
