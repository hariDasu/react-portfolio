/**
 * Created by kingHenry on 8/4/17.
 */
//Libraries
import React from 'react';
import {Container,Image,Header,List } from 'semantic-ui-react';
import Highlight from 'react-highlight';
//Images
import cooeConvo  from './assets/images/cooe-convo.png';
import genMatch from './assets/images/genMatch.png';
import matchFeedbackNo from './assets/images/matchFeedbackNo.png';
import matchFeedbackYes from './assets/images/matchFeedbackYes.png';
const CooeiOS = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Group Coordination iOS Application</Header>
        <Container textAlign="left">
            <Image
                size='small'
                src={cooeConvo}
                centered
            /><p></p>
            <p>Coo-e is a group decision making mobile application. It allows users to be able to create suggestions
                directly within a messaging interface, and facilitate decision making through voting upon these suggestions. My role
                in this project was to architect a scalable backend that could support many users chatting simultaneously, and developing the native
                iOS application.
                <List bulleted>
                    <List.Item>
                        <b>Technologies Used</b>
                        <List.List>
                            <List.Item>Web Framework:<a href="https://www.playframework.com/">ExpressJS</a></List.Item>
                            <List.Item>Database: <a href="https://www.postgresql.org/">RethinkDB</a></List.Item>
                            <List.Item>Caching: <a href="https://www.postgresql.org/">Redis</a></List.Item>
                            <List.Item>Messaging Backend:  <a href="https://swagger.io/">MongooseIM</a></List.Item>
                            <List.Item>Deployment Tools:  <a href="https://www.docker.com/what-docker">Docker/Docker Cloud</a></List.Item>
                            <List.Item>API Documentation:  <a href="https://swagger.io/">Apiary.io</a></List.Item>
                        </List.List>
                    </List.Item>
                </List>


                <Header as="h2">Architectural Decisions</Header>
                I learned Scala and the Play! Framework and interfaced with our PostgreSQL database using Anorm for this project.
                I integrated <b>OAuth2 login with Google</b> so that NJIT students could log in via their NJIT WebMail accounts, which are GMail WebMail accounts.
                The most difficult part in developing this application was the learning curve of Scala: I had come across
                some components of functional programming through node.JS, but the documentation was much clearer and thoroughly
                explained in the world of JavaScript. Reading most articles online and books about programming Scala felt more to me
                like I was reading a philosophy text book. I did not shy away from the challenge, however, and delivered the critical components
                that were necessary for us to deploy this survey and collect data so we could conduct useful research. This project was
                the first time I was introduced to Docker, and I was able to use it to containerize both our postgres database,
                as well as our Scala/Play! Web API.

                <Header as="h2"> The Problems</Header>
                The most challenging components of development were:
                <List ordered>
                    <List.Item >How can we calculate contextual rarity?</List.Item>
                    <List.Item >How can we show people potential non-romantic matches they may be interested in meeting?</List.Item>
                </List>
                <Header as="h3"><em> Calculating Contextual Rarity</em></Header>
                Our survey gathered data from participants on such fields such as what their favorite tv/movies/sports programs were,
                who their favorite musical artists were, what they were willing to teach or coach, if they wanted to learn something,
                and a number of other questions. In order for our lead researcher (Dr. Julia Mayer) to be able to conduct statistical analysis
                to determine <em>which</em> factors were indeed <em>contextually rare</em>, I had to derive a method of calculating this
                from the data collected from the participants surveyed. I used some tricks learned from my Master's Course in Information Retrieval
                to help reduce noise, like eliminating stopwords from the data, such as articles and other useless words. We also ran into other problems
                we did not foresee until we collected data. Some of the issues included people misspelling words, and others adding spaces and unncessary
                punctuation to words. A recurring example we saw was people entering the interest <em>"skyidiving"</em>:
                We saw permutations such as:
                <List>
                    <List.Item ><em>skydiving</em></List.Item>
                    <List.Item ><em>sky diving</em></List.Item>
                    <List.Item ><em>sky diveing</em></List.Item>
                </List>

                I attempted to reduce elements to their common root at first by removing punctuation. I attempted to utilize <a href="http://norvig.com/spell-correct.html">
                    Peter Norvig's famous spell checker, </a> but unfortunately our problem often times wasn't that word was actually spelled wrong.
                For instance: <em> sky diving </em> are two correctly spelled words. Our goal was actually to apply a reduction to the elements in our data set
                so that we could eliminate duplicates without manually going through it, however, in order to do this with a spell checker, we would have to feed
                the spell checker a text file that had the common word we wanted the spell checker to reduce to. So ultimately, someone would have had to manually
                go through all the entries in any case. I also <a href="https://stackoverflow.com/questions/33157847/lemmatizing-words-after-pos-tagging-produces-unexpected-results">
                    tried lemmatizing</a>, but realized POS tagging required more context than just single word entries.
                &nbsp; After reducing the data as much as I could with the time given to me,
                I utilized a python script interfaced with the data from our
                pgsql database, that contained  a combination of helper functions and usage of NLTK's  Frequency Distributions to calculate the contextual
                rarity of interests and activities that participants entered.

                <Header as="h2">The Matching Algorithm</Header>
                Our application needed to  show  on a mobile phone(Android) user potential people they could meet if this system was deployed
                as a real app. We were utilizing the <em>research through design</em> methodology. In order to present users "matches", I was given the
                task of trying to figure out how we could generate fake matches on the server to present to the user.
                The generated matches had to look like this:<br/><br/>

                <Image
                    size='medium'
                    src={genMatch}
                    centered
                /><br/><br/>
                The names I pulled from the <a href="https://randomuser.me">RandomUser.me</a> API, using a
                <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/RandomUsers.scala">
                    &nbsp; model class defined in scala</a>. This class contained the URL of the API with which  returned a Future[JsValue]
                when called by the following function definition:
                <Highlight className="scala">
                    {"def getDummyUser(): Future[JsValue] = " +
                    "ws.url(RandomUser.url).get().map { " +
                    "response => { " +
                    "response.json" +
                    "}"+
                    "}"}
                </Highlight>
                This function is defined in my <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/controllers/MatchDataController.scala">
                    MatchDataController.scala file.</a> The rest of the MatchData is defined in my
                <a href ="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala">
                    &nbsp;MatchData.scala model file.</a> The survey is broken up into the interests section, the school and work section,
                and the background section. In order to populate the rest of the fields in the card displayed above, I had to use a <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L57">
                    randomizer function</a>. I stored the data to randomize in another model class that contained the elements in Scala's Vector
                collection type. Vectors were neccesary over simple List Collection's because Vectors had equal seek time to any element, whereas
                List did not. I found that using list would return very odd results, and I would get strings back and the characters would be mixed up with other characters from other
                randomized results I wanted to return. This was probably due to the way scala automatically uses as many threads as it has available to it, though
                I have no real way of confirming this. I do know that using the Vector collection class type eliminated this problem.
            </p>
            <p>
                Essentially, the goal was to generate 150 matches per user for them to be matched on. The Android client application
                would show the user 30 matches per day over the course of five days. I generated the matches by selecting each choice a user entered:
                for instance, if they had a nationality of peruvian, I would generate a random user with nationality that was peruvian, and
                the other fields for this generated dummy user would be randomized. I created helper functions that
                <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L219">
                    &nbsp;generated school-work info matches</a>, as well as <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L303">
                &nbsp;demographic matches</a>, and <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/models/MatchData.scala#L121">
                &nbsp; interest matches</a>. My final <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/controllers/MatchDataController.scala#L64">
                &nbsp;match generation function</a> defined in the MatchDataController.scala class called each of these helper functions, and
                continually kept generaing more matches until at least 150 were inserted into our postgres database.

                <Header as="h2">Meeting the Deadline...</Header>
                <p>
                    In order to meet the deadline, I had to try to get these matches generated as quickly as I could. As a result of me learning this
                    language over the short course of not more than 4 months, I tried my best to wrap my head around the functional paradigms that Scala
                    requires knowledge of, and delved deep into the various control flow elements it possesses. I implemented Futures, Promises, attempted
                    using async/await methods as well, and learned alot about Collection classes and using functions to transform data such as flatten, map,
                    flatMaps etc. I had reused logic that I had used in python in the past and utilized <a href="https://gitlab.com/coo-e/tellUsWho-Scala-Server/blob/prodPreDecember/app/controllers/MatchDataController.scala#L181">
                    dictionaries (Or Maps as they are called in Scala)
                    that contained lambda functions as values </a>. Unfortunately, trying to learn the Actor Model was not something
                    I was able to master in this short time frame, and I fell back on using imperative strategies for dealing with state,
                    and relied on using iteration and global counters to generate the >=150 matches required. Since the threading was not under my direct
                    control, I could not easily stop at exactly 150, and it would often just go beyond. This was acceptable enough so we could deploy
                    our application and have data to do analysis on.
                    If I had more time to improve this, I would have liked to properly implement
                    some of the cool monadic things from the scalaz library and properly understand how to use Future.traverse and managing state
                    inside an actor.</p>
                <p>
                    Aside from doing the backend development to generate matches, I was faced with a final problem.
                    Our front end developer was unable to create the complicated interactions and designs implemented by
                    our design team with React.js in the short time frame he was given. As a emergency back-up, I worked around the clock for three days and
                    nights and learned the Scala Twirl templating language and used Twitter Bootstrap and Google's Material Design CSS
                    styling to try to make the survey as pleasing as I could in the span of a few days.</p>

                <Header as="h2">Lessons Learned</Header>
                I do not regret learning Scala and undertaking this immense challenge to develop this complex application.
                I met the deliverable and the deadline, and worked beyond what was even originally asked of me. However, if I
                had led the archiectural decisions, I think it would have been much easier to accomplish all of this with
                <a href="https://nodejs.org/en/">nodeJS</a>,
                a language I was already familiar with and one that has extensive documentation and libraries on <a href="https://www.npmjs.com/">
                npm</a>.
            </p>
        </Container>
    </Container>
)

export default CooeiOS