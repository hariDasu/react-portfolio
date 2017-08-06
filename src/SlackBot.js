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

            </p><br/><br/>
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
                with this library, however, because it did not port over all the functionality that Python's NLTK library contained.

                <p><br/>
                    I wrote <a href="https://github.com/hariDasu/nlp-slack-bot/blob/master/src/nltk-middleware.js">
                    middleware to parse</a> the message that a user sends to my bot, and using some functional compostion a la <a href="http://ramdajs.com/">
                    Ramda.js</a>, I am able to make a <a href="https://github.com/hariDasu/nlp-slack-bot/blob/master/src/nltk-middleware.js#L21"> method call to my Python Code </a>
                    over XMLRPC. The original bottie code would call different funcitons within the middleware file itself, but insetad I have several function defintions
                    which use the 'skill' that is returned from the Logistic regression classifier in Natural and called as a function in my <a href="https://github.com/hariDasu/nltk-python/blob/master/nltkServer.py">
                    python NLTK file</a>.
                    My <a href="https://github.com/hariDasu/nltk-python">nltk-python github repository</a> is created as a submodule within my slackbot github source code.

                </p>

                <Header as="h2">Deployment</Header>
                This project was on <a href="https://cloud.google.com/"> Google Cloud</a> and was Dockerized. In order to manage
                container orchestration, I had to learn kubernetes. Kubernetes allowed me to view the logs directly fro the browser, as
                well as have the ability to scale up either container as I needed. I find docker-cloud and docker-compose to be easier to use,
                but Kubernetes is supposed to be a better solution for large scale container management and orchestration, so I am glad I was able
                to spend time to learn and use Kubernetes in this project.

                <Header as="h2">Final Thoughts</Header>
                <p>
                If I was able to rewrite this project today, I woudl use some of the newer tools I have come across that weren't
                    available to me at the time when I created this projet. <a href="https://api.ai/"> API.AI</a> is a great service that
                    detects parts of speech such as actions, entities, and intents and allows developers to focus more on designing the conversational
                    experiences at a higher level. This layer of abstraction could have enabled me to develop my application quicker, and potentially
                    deliver a more uniform experience to users. In <a href="https://github.com/hariDasu/lbcbot"> another project I worked on</a>,
                    I used <a href="https://claudiajs.com/claudia-bot-builder.html"> claudiaJS bot builder</a>
                    and found it work great at allowing me to write bot code, and having it deploy the bot
                    to  AWS Lambda, and interface easily with many different messaging platforms, rather than just slack. In scenarios where the
                    bot doesn't require usage of platform specific components (such as <a href="https://api.slack.com/interactive-messages">
                    Slack's interactive message API</a>), claudiaJS can allow me as a developer to create a bot application that is easily able
                    interfaced with many different messaging platforms. <br/><br/>
                    </p>
            </p>

        </Container>
    </Container>
)

export default SlackBot