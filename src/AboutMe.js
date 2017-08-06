import React from 'react';
import {Container,Header,Image} from 'semantic-ui-react';
import headShot from './assets/images/profile-sdr.jpg'

const AboutMe = () =>
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Srihari Dasu Rao</Header>
        <Image
            size='medium'
            src={headShot}
            centered
        />
        <p></p>
        <p>This website explains what I consider to be my best work. The projects section contains
            the different applications I have either completely invidividually, or as a member of a team. This website
            itself has been created using react.js and react-router and showcases my ability to treat every task I have as an opportunity
            to learn something new and exciting.</p>
    </Container>

export default AboutMe