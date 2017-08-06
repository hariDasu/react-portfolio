/**
 * Created by kingHenry on 8/5/17.
 */
/**
 * Created by kingHenry on 8/4/17.
 */
//Libraries
import React from 'react';
import {Container,Image,Header,List } from 'semantic-ui-react';
import Highlight from 'react-highlight';
//Images
import slackBot from './assets/images/slackBot.png';
const SlackBot = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Natural Language Powered SlackBot</Header>
        <Container textAlign="left">
            <Image
                size='medium'
                src={slackBot}
                centered
            /><p></p>
            <p>
                <b>Source Code: </b> <a href="https://github.com/hariDasu/nlp-slack-bot">nlp-slack-bot</a>
                </p>
            <p><a href="http://showd.me/"> Showd.me</a> is a peer-to-peer learning platform that enables employees
                to learn valuable skills from other employees in the workplace. I was hired as a ChatBot Developer
                to develop a bot that interfaced with the Showd.me API to return relevant information to Showd.me users
                over Slack.
            </p>
              <p>
                <List bulleted>
                    <List.Item>
                        <b>Technologies Used</b>
                        <List.List>
                            <List.Item >Slack Integration:<a href="https://nodejs.org/en/">nodeJS</a></List.Item>
                            <List.Item>Natural Language Processing:<a href="http://www.nltk.org/">Python NLTK3</a></List.Item>
                            <List.Item>Container Orchestration:<a href="https://kubernetes.io/">Kubernetes</a></List.Item>
                        </List.List>
                    </List.Item>
                </List>

              </p>
            <p>
                <Header as="h2">The Task</Header>
                Showd.me lets users search for skills, events, users, or particular learning paths that other users may have created.
                The goal was to create a bot that would allow users to ask questions in a natural language format and the bot would be able
                to retrieve relevant information from the Showd.me database. In order to do this, the code I would write
                had to be able to discern and parse actions and entities from text and convert the question into a potential function call
                that could be sent over the REST API to retrieve the results the user desired.

            </p>
            <p>
                <Header as="h2">Development</Header>
                I used <a href="http://blog.templeton.host/self-training-nlp-enabled-slack-bot-tutorial/">
                Andrew Templeton's NLP BotKit Tutorial</a> as the inspiration for this application. In the begginning I had to design
                the potential funcitonality of the bot by thinking about the different permutations of how a user could ask certain questions.
                The training data of relevant questions I came up with can be <a href="https://github.com/hariDasu/nlp-slack-bot/blob/master/custom-phrases.json">
                found here</a>. I used the Logistic Regression classifier at the level of the nodeJS API with the <a href="https://github.com/NaturalNode/natural">
                Natural Library </a>
                as Andrew Templeton demonstrated to hard code cases where questions related to sessions, learning paths, or personal
                events could be easily distinguished. I found that parsing the code beyond this to extract further data was not easily conducted
                with this library, however, because it did not port over all the functionality that Python's NLTK library contained. async

            </p>

            <p>
                <Header as="h2">Deployment</Header>


            </p>

        </Container>
    </Container>
)

export default SlackBot