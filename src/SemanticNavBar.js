//Libraries
import React from 'react';
import {Button, Container,  Card, Image, Menu} from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//Components
import AboutMe from './AboutMe';
import TellUsWho from "./TellUsWho";
import CooeiOS from "./CooeiOS";
import WebCrawler from "./WebCrawler";
import SlackBot from "./SlackBot";
//images
import tellUsWhoImg  from './assets/images/matchScreen.PNG';
import slackBot from './assets/images/slackBot.png';
import webCrawlerStack from './assets/images/webCrawlerStack.png';
import avatar from './assets/images/avatar.jpg';
import convoSnapshot from './assets/images/convo-snapshot.png';

const SemanticNavBar = () =>
<Router>
  <div>
    <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as={Link} to='/'>
        <Image
            size='mini'
            src={avatar}
            style={{ marginRight: '1.5em' }}
        />
        Srihari Dasu Rao
      </Menu.Item>
      <Menu.Item as={Link} to='/projects'>
        Projects
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <a href="https://www.linkedin.com/in/srihari-dasu-rao/" target="_blank">
          <Button circular color='linkedin' icon='linkedin' /></a>
        </Menu.Item>
        <Menu.Item className='item'>
          <a href="https://stackoverflow.com/users/2158884/kinghenry14" target="_blank">
          <Button circular color='teal' icon='stack overflow' /></a>
        </Menu.Item>
      </Menu.Menu>
    </Container>
    </Menu>
    <Route exact path="/" component={AboutMe}/>
    <Route exact path="/projects" component={ProjectCardGroup}/>
    <Route path="/projects/tellUsWho" component={TellUsWho}/>
    <Route path="/projects/webCrawler" component={WebCrawler}/>
    <Route path="/projects/cooe" component={CooeiOS}/>
    <Route path="/projects/slackBot" component={SlackBot}/>
  </div>
</Router>

const items = [
  {
    image: tellUsWhoImg,
    header: 'tellUsWho',
    description: 'Applying Scala functional programming concepts to generate a set of ' +
    'JSON matches for every user to take our survey',
    meta: 'Scala/Play! Framework',
    href:'/projects/tellUsWho'
  },
  {
    image: webCrawlerStack,
    header: 'nodeJS Distributed WebCrawler',
    description: 'Crawler for books on Amazon to detect ' +
    'price discrepancies in books versus trade-in value resulting in profit',
    meta: 'nodeJS/Redis/EC2',
    href:'projects/webCrawler',
  },
  {
    image: convoSnapshot,
    header: 'Group Coordination Application',
    description: 'native iOS10/Swift 3 Application created using Material Swift Components to help ' + 'groups coordinate activities amongst each other',
    meta: 'System Architecture, iOS/Swift 3',
    href:'projects/cooe',

  },
  {
    image:slackBot,
    header: 'ML/NLP Slackbot ',
    description: 'A machine learning powered slackbot with natural processing fueled by the ' + 'NLTK3 python library',
    meta: 'nodeJS Botkit/Python NLTK3',
    href:'projects/slackBot',
  },
]

const ProjectCardGroup = () => (
  <Container text style={{ marginTop: '7em' }}>
      <Card.Group items={items}  />
  </Container>
);

export default SemanticNavBar;
