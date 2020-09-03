import React from 'react'
import { Container } from 'reactstrap';
import './Home.css'
import AboutUsPagination from '../components/paginations/AboutUsPagination';
import AboutUsCardColumns from '../components/cardColumns/AboutUsCardColumns';

function AboutUs() {
    return (
        <div className="AboutUsMainDiv">
            <Container>
            <AboutUsCardColumns />
            </Container>
            <AboutUsPagination />
        </div>
    )
}

export default AboutUs
