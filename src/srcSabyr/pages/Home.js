import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button,
    Container,
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import Photo1 from '../assets/images/photo1.jpg'
import Photo2 from '../assets/images/photo2.jpg'
import Photo3 from '../assets/images/photo3.jpg'
import './Home.css'

const items = [
    {
        src: Photo2,
        comment: <p className="HomeCarouselCommentFirst">Supercars</p>,
        caption: <Button className="HomeCarouselButtonFirst">Get started</Button>
    },
    {
        src: Photo1,
        comment: <p className="HomeCarouselCommentSecond">Comfortable</p>,
        caption: <Button className="HomeCarouselButtonSecond">Buy right now</Button>
    },
    {
        src: Photo3,
        comment: <p className="HomeCarouselCommentThird">Fast</p>,
        caption: <Button className="HomeCarouselButtonThird">View details</Button>
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption className="mb-1 text-center" captionText={item.caption} captionHeader={item.comment} />
            </CarouselItem>
        );
    });

    return (
        <div className="HomeMainDiv">
            {/* Carousel */}
            <Container>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Container>
            {/* Products */}
            <Container className="mt-3">

                <CardColumns>
                    <Card body inverse color="primary">
                        <CardTitle>Supercars</CardTitle>
                        <CardText>Our online shop has an enormous number of diverse supercars.</CardText>
                        <Button color="secondary">Learn more</Button>
                    </Card>

                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>Comfortable</CardTitle>
                        <CardText>Every our supercar has own comfortable interior, which makes it more enjoyable to ride.</CardText>
                        <Button>Learn more</Button>
                    </Card>

                    <Card body inverse color="primary">
                        <CardTitle>Fast</CardTitle>
                        <CardText>Every our supercar has not less than 1800 horsepower and can reach 200km per hour.</CardText>
                        <Button color="secondary">Learn more</Button>
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
                <Pagination aria-label="Page navigation example" className="HomeMainPagination">

                    <PaginationItem disabled>
                        <PaginationLink first href="#" />
                    </PaginationItem>

                    <PaginationItem disabled>
                        <PaginationLink previous href="#" />
                    </PaginationItem>

                    <PaginationItem active>
                        <PaginationLink href="#" className="HomePaginationLinks">
                            1
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="/about-us" className="HomePaginationLinks">
                            2
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="/about-us" className="HomePaginationLinks">
                            3
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="/about-us" className="HomePaginationLinks">
                            4
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="/about-us" className="HomePaginationLinks">
                            5
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink next href="#" className="HomePaginationLinks" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink last href="#" className="HomePaginationLinks" />
                    </PaginationItem>

                </Pagination>
            </Container>
        </div>
    );
}

export default Example;