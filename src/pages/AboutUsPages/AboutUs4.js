import React from 'react'
import { Container } from 'reactstrap';
import '../Home.css'
import AboutUs4Pagination from '../../components/paginations/AboutUs4Pagination';
import AboutUsCardColumns4 from '../../components/cardColumns/AboutUsCardColumns4';

function AboutUs4() {
    return (
        <div className="AboutUsMainDiv">
            <Container>
            <AboutUsCardColumns4 />
            </Container>
            <AboutUs4Pagination />
        </div>
    )
}

export default AboutUs4;
