import React from 'react'
import {Button, Container, Dropdown,  Image, Menu} from 'semantic-ui-react'
import avatar from './assets/images/avatar.jpg'

const SemanticNavBar = () => <Menu fixed='top' inverted>
    <Container>
        <Menu.Item as='a' header>
            <Image
                size='mini'
                src={avatar}
                style={{ marginRight: '1.5em' }}
            />
            Srihari Dasu Rao
        </Menu.Item>
        <Menu.Item as='a'>Projects</Menu.Item>

        <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Submenu</span>
                    <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
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

export default SemanticNavBar