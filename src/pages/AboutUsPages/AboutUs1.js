import React from 'react'
import { Container } from 'reactstrap';
import '../Home.css'
import AboutUs1Pagination from '../../components/paginations/AboutUs1Pagination';
import AboutUsCardColumns1 from '../../components/cardColumns/AboutUsCardColumns1';

function AboutUs1() {
    return (
        <div className="AboutUsMainDiv">
            <Container>
            <AboutUsCardColumns1 />
            </Container>
            <AboutUs1Pagination />
        </div>
    )
}

export default AboutUs1;
