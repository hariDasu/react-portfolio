import React from 'react'
import {Button, Container,   Image, Menu} from 'semantic-ui-react'
import AboutMe from './AboutMe'
import ProjectCardGroup from './ProjectCardGroup'
import avatar from './assets/images/avatar.jpg'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
const SemanticNavBar = () =>
    <Router>
        <div>
        <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <Image
                    size='mini'
                    src={avatar}
                    style={{ marginRight: '1.5em' }}
                />
                <Link to="/">
                Srihari Dasu Rao
                </Link>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/projects">Projects</Link>
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
        <Route path="/projects" component={ProjectCardGroup}/>
        </div>
    </Router>


export default SemanticNavBar