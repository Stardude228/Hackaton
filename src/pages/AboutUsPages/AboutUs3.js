import React from 'react'
import { Container } from 'reactstrap';
import '../Home.css'
import AboutUs3Pagination from '../../components/paginations/AboutUs3Pagination';
import AboutUsCardColumns3 from '../../components/cardColumns/AboutUsCardColumns3';

function AboutUs3() {
    return (
        <div className="AboutUsMainDiv">
            <Container>
            <AboutUsCardColumns3 />
            </Container>
            <AboutUs3Pagination />
        </div>
    )
}

export default AboutUs3;
