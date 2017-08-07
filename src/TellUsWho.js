//Libraries
import React from 'react';
import {Container,Image,Header,List } from 'semantic-ui-react';
import Highlight from 'react-highlight';
//Images
import tellUsWhoImg  from './assets/images/matchScreen.PNG';
import genMatch from './assets/images/genMatch.png';
import interestActivities from './assets/images/tellUsWhoIntAct.png';
import systemArchitecture from './assets/images/tellUsWhoArchitecture.png';
const TellUsWho = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>TellUsWho</Header>
        <Container textAlign="left">
            <Image
                size='medium'
                src={tellUsWhoImg}
                centered
            /><p></p>
            <p>tellUsWho is a social network survey tool that creates profiles for students, rich in data on their
                background, school, and work information, as well as their favorite interests and activities.
    </p>
<p>
            <Header as="h2"> The Problems</Header>
            <List ordered>
                <List.Item >How can we calculate contextual rarity?</List.Item>
                <List.Item >How can we show people potential non-romantic matches they may be interested in meeting?</List.Item>
            </List>
    </p>
            <p>
                <a href="./assets/pdfs/Mayer_CHI2015_MakingSocialMatchingContext-Aware.pdf"> Prior research</a> conducted
                by Dr. Julia Mayer informs us of the novel concept of
                <em> contextual rarity</em>: ": the rarer a shared user attribute
                is in the current context, the more interested the user is in
                meeting another person who shares this contextually rare
                attribute" (Mayer, J.M. et. al).
                <Image
                    size='large'
                    src={systemArchitecture}
                    centered
                /><p></p>

                <List bulleted>
                    <List.Item>
                        <b>Technologies Used</b>
                        <List.List>
                            <List.Item >Primary Language:<a href="http://scala-lang.org/"> Scala</a></List.Item>
                            <List.Item>Web Framework:<a href="https://www.playframework.com/"> Play! Framework</a></List.Item>
                            <List.Item>Database: <a href="https://www.postgresql.org/">PostgreSQL</a></List.Item>
                            <List.Item>Deployment Tools:  <a href="https://www.docker.com/what-docker">Docker</a></List.Item>
                            <List.Item>API Documentation:  <a href="https://swagger.io/">Swagger</a></List.Item>
                        </List.List>
                    </List.Item>
                </List>


                <Header as="h2">Application Development: My Contributions</Header>

                <Header as="h3">tellUsWho Survey</Header>
                <List bulleted>
                    <List.Item>Used Anorm Scala Library to interface against our PostgreSQL Database</List.Item>
                    <List.Item>Google Login Oauth2 Using Silhouette Library allowing students to login with their NJIT Webmail accounts </List.Item>
                    <List.Item>Front-End implemented used:
                        <List.List>
                            <List.Item>Twirl Templating Language (Scala/Play)</List.Item>
                            <List.Item>Twitter Bootstrap</List.Item>
                            <List.Item>Materialize CSS for Material Design Components</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>Deployed using Docker Containers for API & DB on an Ubuntu VPS</List.Item>
                </List>




                <Header as="h3"><em> Calculating Contextual Rarity</em></Header>
                Our survey gathered data from participants on such fields such as what their favorite tv/movies/sports programs were,
                who their favorite musical artists were, what they were willing to teach or coach, if they wanted to learn something,
                and a number of other questions. In order for our lead researcher (Dr. Julia Mayer) to be able to conduct statistical analysis
                to determine <em>which</em> factors were indeed <em>contextually rare</em>, I had to concoct an algorithm to compute <em>contextually rarity</em>.
                I used a python script that interfaced with our database.This script contained a combination of helper functions, and its main features were:

                <List bulleted>
                    <List.Item >eliminating stopwords from the data to help reduce noise</List.Item>
                    <List.Item >reducing elements to their common root by using techniques such as lemmatizing and eliminating misspelt words by utilizing <a href="http://norvig.com/spell-correct.html">
                        Peter Norvig's famous spell checker</a></List.Item>
                    <List.Item >utilizing NLTK's Frequency Distributions to calculate the contextual rarity for every unique interest and activity entered by participants</List.Item>
                </List>


                <Header as="h3"><em>The Matching Algorithm</em></Header>
               Our application needed to  show  on a mobile phone(Android) user potential people they could meet if this system was deployed
                as a real app. We were utilizing the <em>research through design</em> methodology. In order to present users "matches", I developed a matching algorithm
                to generate matches for the users based on the interest and activity data they entered in the survey.
                The goal was to generate 150 matches per user for them to be matched on. The presentation of the matches is shown below
               <br/><br/>

                <Image
                    size='medium'
                    src={genMatch}
                    centered
                /><br/><br/>
                The survey is broken up into the interests section, the school and work section,
                and the background section. In order to populate the rest of the fields in the card displayed above, I had to use a <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L57">
                randomizer function</a>
                The names I pulled from the <a href="https://randomuser.me">RandomUser.me</a> API, using a
                <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/RandomUsers.scala">
                   &nbsp; model class defined in scala</a>. This class contained the URL of the API with which  returned a Future[JsValue]
                when called by the following function definition:
                <Highlight className="scala">
                    {"def getDummyUser(): Future[JsValue] = "}</Highlight>
                <Highlight className="scala">&emsp;&emsp;
                    {"ws.url(RandomUser.url).get().map { " }</Highlight>
                        <Highlight className="scala">&emsp;&emsp;&emsp;&emsp;{"response => { " }</Highlight>
                        <Highlight className="scala">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"response.json" }</Highlight>
                        <Highlight className="scala">&emsp;&emsp;&emsp;&emsp;{"}"}</Highlight>
                        <Highlight className="scala">{"}"}</Highlight>
                This function is defined in my <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/controllers/MatchDataController.scala">
                    MatchDataController.scala file.</a>



                The rest of the MatchData is defined in my
                <a href ="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala">
                    &nbsp;MatchData.scala model file.</a>  . I stored the data to randomize in another model class that contained the elements in Scala's Vector
                collection type. Vectors were necessary over simple List Collection's because Vectors have equal seek time to any element,
                whereas List does not. Using list would return very odd results, mixing response from various randomized results.
                Using the Vector collection class type eliminated this problem.

            </p>
            <p>
                The Android client application
                would show the user 30 matches per day over the course of five days. I generated the matches by selecting each choice a user entered:
                for instance, if they had a nationality of peruvian, I would generate a random user with nationality that was peruvian, and
                the other fields for this generated dummy user would be randomized. I created helper functions that
                <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L219">
                    &nbsp;generated school-work info matches</a>, as well as <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L303">
                &nbsp;demographic matches</a>, and <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L121">
                &nbsp; interest matches</a>. My final <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/controllers/MatchDataController.scala#L64">
                &nbsp;match generation function</a> defined in the MatchDataController.scala class called each of these helper functions, and
                continually kept generaing more matches until at least 150 were inserted into our postgres database.

                <Header as="h2">The Challenges</Header>

                The most difficult part in developing this application was the learning curve of Scala. I had come across
                some components of functional programming through node.JS/JavaScript, but the documentation was much clearer and thoroughly
                explained as compared to Scala. In spite of this, I was able to gain enough mastery and I implemented Futures, Promises, attempted using async/await methods.
                I learned a lot about Collection classes and using functions to transform data such as flatten, map, flatMaps etc. I had reused logic that I
                had used in python in the past and utilized <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/controllers/MatchDataController.scala#L181">
                dictionaries (Or Maps as they are called in Scala)
                that contained lambda functions as values </a>. Unfortunately, I was not able to master the Actor Model in this short time frame,
                and I fell back on using imperative strategies for dealing with state, and relied on using iteration and global counters to generate the >=150 matches required.
                <br/><br/>
                This was also the first time I learned and utilized the Docker Linux Container Platform. In spite of these challenges, I delivered the critical components in time to
                support our lead researcher.<br/>

                <Image
                    size='large'
                    src={interestActivities}
                    centered
                /><br/><br/>

                Aside from doing the backend development to generate matches, I was faced with one final problem.
                Our front end developer was unable to create the complicated interactions and designs implemented by
                our design team with React.js in the short time frame he was given. As a emergency back-up, I worked around the clock for three days and
                nights and learned the Scala Twirl templating language and used Twitter Bootstrap and Google's Material Design CSS
                styling to try to make the survey as enjoyable as I could in the span of a few days. The screenshot above is
            taken from the front end I implemented.</p>
<p>


                <br/><br/>
            </p>
        </Container>
    </Container>
)

export default TellUsWho