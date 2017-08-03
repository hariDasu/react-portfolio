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
//images
import tellUsWhoImg  from './assets/images/matchScreen.PNG';
import slackBot from './assets/images/slackBot.png';
import webCrawlerStack from './assets/images/webCrawlerStack.png';
import avatar from './assets/images/avatar.jpg';
import dcJS from './assets/images/dcJS.png';



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
                    <Button circular color='linkedin' icon='linkedin' />
                </Menu.Item>
                <Menu.Item className='item'>
                    <Button circular color='grey' icon='github' />
                </Menu.Item>
                <Menu.Item className='item'>
                    <Button circular color='teal' icon='stack overflow' />
                </Menu.Item>
                <Menu.Item className='item'>
                    <Button circular color='blue' icon='skype' />
                </Menu.Item>
            </Menu.Menu>

        </Container>
        </Menu>
            <Route exact path="/" component={AboutMe}/>
            <Route exact path="/projects" component={ProjectCardGroup}/>
            <Route path="/projects/tellUsWho" component={TellUsWho}/>
            <Route path="/projects/webCrawler" component={TellUsWho}/>
        </div>
    </Router>




const items = [
    {
        image: tellUsWhoImg,
        header: 'tellUsWho',
        description: 'Applying Scala functional programming concepts to generate a set of ' +
        'JSON matches for every user to take our survey',
        meta: 'Match Generation Algorithm',
        href:'/projects/tellUsWho'
    },
    {
        image: webCrawlerStack,
        header: 'nodeJS Distributed WebCrawler',
        description: 'Utlizing redis as a centralized job queue installed via AWS Elasticache,' +
        'able to spawn ec2 nodes and run multiple nodeJS worker instances to scour amazon to detect ' +
        'price discrepancies in books for trade-in value',
        meta: 'nodeJS/Redis/EC2',
        href:'/webCrawler',
    },
    {    image: dcJS,
        header: 'CrossFilter/DC.js',
        description: 'Interactive data visualizations with crossfilter and DC.js allowing users to dig deeper into diagnosing' +
        ' the issues behind long wait times in hospitals',
        meta: 'Data Visualization',
        href:'/dataViz',

    },
    {    image:slackBot,
        header: 'ML/NLP Slackbot ',
        description: 'A machine learning powered slackbot with natural processing fueled by the '+
            'NLTK3 python library',
        meta: 'NLP ChatBot',
        href:'/slackBot',

    },
]


const ProjectCardGroup = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Card.Group items={items}  />
    </Container>
)



export default SemanticNavBar