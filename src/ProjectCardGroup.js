import React from 'react'
import { Card,Container,Image } from 'semantic-ui-react'
import tellUsWhoImg  from './assets/images/matchScreen.PNG'

const items = [
    {
        image: tellUsWhoImg,
        header: 'tellUsWho',
        description: 'Applying Scala functional programming concepts to generate a set of ' +
        'JSON matches for every user to take our survey',
        meta: 'Match Generation Algorithm',
    },
    {
        image: tellUsWhoImg,
        header: 'nodeJS Distributed WebCrawler',
        description: 'Utlizing redis as a centralized job queue installed via AWS Elasticache,' +
        'able to spawn ec2 nodes and run multiple nodeJS worker instances to scour amazon to detect ' +
        'price discrepancies in books for trade-in value',
        meta: 'nodeJS/Redis/EC2',
    },
    {    image: tellUsWhoImg,
        header: 'CrossFilter/DC.js',
        description: 'Interactive data visualizations with crossfilter and DC.js allowing users to dig deeper into diagnosing' +
        ' the issues behind long wait times in hospitals',
        meta: 'Data Visualization',
    },
]

const ProjectCardGroup = () => (
    <Container text style={{ marginTop: '7em' }}>
    <Card.Group items={items}/>
        {/*<Card>*/}
        {/*<Card.Content>*/}
            {/*<Image  size='medium' src={tellUsWhoImg} />*/}
            {/*<Card.Header>*/}
                {/*tellUsWho*/}
            {/*</Card.Header>*/}
            {/*<Card.Meta>*/}
                {/*Match Generation Algorithm*/}
            {/*</Card.Meta>*/}
            {/*<Card.Description>*/}
                {/*Applying Scala functional programming concepts to generate a set of*/}
                {/*JSON matches for every user to take our survey*/}
            {/*</Card.Description>*/}
        {/*</Card.Content>*/}
        {/*</Card>*/}
        {/*<Card>*/}
            {/*<Card.Content>*/}
                {/*<Image  size='medium' src='./assets/images/matchScreen.PNG' />*/}
                {/*<Card.Header>*/}
                    {/*nodeJS Distributed WebCrawler*/}
                {/*</Card.Header>*/}
                {/*<Card.Meta>*/}
                    {/*nodeJS/Redis/EC2*/}
                {/*</Card.Meta>*/}
                {/*<Card.Description>*/}
                    {/*Utlizing redis as a centralized job queue installed via AWS Elasticache,*/}
                    {/*able to spawn ec2 nodes and run multiple nodeJS worker instances to scour amazon to detect*/}
                    {/*price discrepancies in books for trade-in value*/}
                {/*</Card.Description>*/}
            {/*</Card.Content>*/}
        {/*</Card>*/}
    {/*</Card.Group>*/}
    </Container>
)

export default ProjectCardGroup
