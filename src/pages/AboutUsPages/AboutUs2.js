import React from 'react'
import { Container } from 'reactstrap';
import '../Home.css'
import AboutUs2Pagination from '../../components/paginations/AboutUs2Pagination';
import AboutUsCardColumns2 from '../../components/cardColumns/AboutUsCardColumns2';

function AboutUs2() {
    return (
        <div className="AboutUsMainDiv">
            <Container>
            <AboutUsCardColumns2 />
            </Container>
            <AboutUs2Pagination />
        </div>
    )
}

export default AboutUs2;
