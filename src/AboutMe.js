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
        <p>Driven individual with ability to learn rapidly and implement solutions to difficult problems as proven in prior work experience.
            Vast array of skills across the full stack enables me to work well and communicate with all types of team members ranging from UX/UI
            designers to QA Testers as well as Mobile and Backend developers.</p>
    </Container>

export default AboutMe