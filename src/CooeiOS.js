/**
 * Created by kingHenry on 8/4/17.
 */
//Libraries
import React from 'react';
import {Container,Image,Header,List } from 'semantic-ui-react';

//Images
import cooeConvo  from './assets/images/cooe-convo.png';
import myTeeupsHIG from './assets/images/myTeeups-HIG.png';
import myTeeupsMaterial from './assets/images/myTeeups-Material.PNG';
const CooeiOS = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Group Coordination iOS Application</Header>
        <Header as='h13'><em>(work in progress)</em></Header><br/><br/>
        <Container textAlign="left">
            <Image
                size='medium'
                src={cooeConvo}
                centered
            /><p></p>
            <p>Coo-e is a group decision making mobile application. It allows users to be able to create suggestions
                directly within a messaging interface, and facilitate decision making through voting upon these suggestions. My role
                in this project was to architect a scalable backend that could support many users chatting simultaneously, and developing the native
                iOS application.
                <br/>
                <List bulleted>
                    <List.Item>
                        <b>Technologies Used</b>
                        <List.List>
                            <List.Item>Web Framework:<a href="https://expressjs.com/">ExpressJS</a></List.Item>
                            <List.Item>Database: <a href="https://www.rethinkdb.com/">RethinkDB</a></List.Item>
                            <List.Item>Caching: <a href="https://redis.io/">Redis</a></List.Item>
                            <List.Item>Messaging Backend:  <a href="https://www.erlang-solutions.com/products/mongooseim.html">MongooseIM</a></List.Item>
                            <List.Item>Deployment Tools:  <a href="https://www.docker.com/what-docker">Docker</a>/<a href="https://cloud.docker.com/">Docker Cloud</a></List.Item>
                            <List.Item>API Documentation:  <a href="https://apiary.io/">Apiary.io</a></List.Item>
                        </List.List>
                    </List.Item>
                </List>


                <Header as="h2">Architectural Decisions</Header>
                Although Scala is touted as an extremely scalable language and the best language to write scalable applications in and I had spent some time
                learning and using the Play framework, I opted to switch back to the nodeJS world and use the ExpressJS web framework. Scala may be scalable, but
                it is very difficult to find fellow developers to help maintain, let alone, IMPROVE the current codebase. This is <a href="https://www.linkedin.com/pulse/scala-way-out-owen-rubel">
                    challenging for large companies</a>, let alone
                a small research lab at a technology university in New Jersey. <br/><br/>

                When creating prior applications, I had used SQL databases such as PostgreSQL and MySQL. SQL is great for when you have data that requires
                extensive analysis that can be accomplished by doing alot of various types of JOINs. There are a few problems with SQL databases, and one of
                the big challenges with PostgreSQL is horizontal scaling. Another issue is how to receive updates when new data is added to the database automatically.
                Postgres has a feature called <a href="https://www.postgresql.org/docs/9.3/static/libpq-notify.html"> LISTEN/NOTIFY </a>, but can be a bit difficult to
                horizontally scale. They have been attempting to improve this over time, but managing shard keys and and partitioning of data, or evaluating different plugins
                to automate this process is a process in an of itself.<br/><br/>

                I opted to use RethinkDB because of its functional query language that is designed with horizontal scalability in mind. It also supports one-click sharding which
                greatly simplifies scaling horizontally. When combined with the docker-compose images that I have been using for this and other applications, it becomes even easier to
                replicate nodes through a simple YML file declaring 2 or more instances. Docker Compose and docker cloud using the stack notation also enabled me to
                effortlessly load balance our REST API by also declaring 2 or more instances of our API. Utilizing Redis again as a centralized cache allowed us to use distributed
                sessions for users as well.<br/><br/>

                Messaging is a challenge in itself. Our first backend developer decided that <a href="https://gitlab.com/coo-e/backend-NodeJS-Server/blob/master/controller/chatController.js"> RabbitMQ could be used for chat</a>,
                and I had <a href="https://gitlab.com/coo-e/backend-NodeJS-Server/blob/master/views/rabbitChat.jade" >succesfully connected to it and retrieved messages over STOMP</a>. I had
                accomplished this with great reluctance, however, beacuse in my previous work as  QA Analyst I had to write load tests against our chat server written in ejabberd,
                which was a jabber server written in erlang. This is an implementation of XMPP, or the eXtensible Messaging and Presence Protocol. Jabber servers are ideal for messaging systems,
                as the XMPP protocol was designed specifically with chat systems in mind. MongooseIM is a fork of the ejabberd project, and offers several improvements which I felt would make our
                development easier, and mesasging platform better. Two of these are its <a href="https://mongooseim.readthedocs.io/en/latest/REST-API/"> REST API</a>, and its customized
                <a href="https://mongooseim.readthedocs.io/en/latest/open-extensions/muc_light/"> MUC Light protocol</a>. The REST API makes it easier for client side developers to connect
                and retrieve messages rather than connecting over XMPP, and MUC Light removes the concept of presence from chat, which reduces the size of messages and in turn can increase concurrent
                messaging capacity. I opted to use Apiary.io to help document our API because I found it to be a bit more approachable than Swagger, although both ultimately serve the same purpose.

                <Header as="h2">Native iOS Development</Header>
                I started developing the iOS application in iOS9 and Swift 2 using Storyboards and Apple UI Components. Our intial UI Specs followed
                <a href="https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/"> Apple's Human Interface Guidelines </a>
                and looked like this:<br/><br/>
                <Image
                size='medium'
                src={myTeeupsHIG}
                centered
                /><p></p>
                In the beginning of learning iOS development using storyboards was an approachable manner of getting acquainted with the various different View types, navigational
                elements, and options that can set for visibility, keyboard interaction etc. As time went on, I realized that using storyboards is hard to debug if the codebase
                is shared among other developers. Tracing IBOutlets and IBActions and switching betweeen XIB files and ViewController files can become very chaotic. Eventually, the codebase
                migrated to a storyboard-free project. This made it easier to follow what was going on simply in the respective ViewController files. The designs were completely changed sometime
                while we were working on them, and they new designs looked like this:<br/><br/>

                <Image
                    size='medium'
                    src={myTeeupsMaterial}
                    centered
                /><p></p>

                These specs digressed completely from the original, and stuck to <a href="https://material.io/"> Google's Material Design Philosophy</a>. In order to
                implement these UI Specs, I had to use <a href="http://www.cosmicmind.com/material"> CosmicMind's Material Swift Library</a>. During the design overhaul,
                I upgraded the application to use iOS10/Swift 3 and began to slowly refactor unwieldy code. My ViewController files began to grow large, and repeated logic
                was a sign that I needed to do something about making improvements to my codebase. I learned about Swift Design Patterns, and adopted the strategy of using
                an <a href="https://grokswift.com/router/"> Alamofire Router </a> to organize my Networking logic. I utilized completion handlers to return either single results
                or an array of custom objects as defined in Model Classes, enabling the fetched data to be rendered in a single location or as a result set, such as in a UITableView.
                I also slowly learned about implementing my own Protocols and delegates, as well as utilizing extensions, to further reduce the size of singular view controllers and
                permitting related logic to be organized together in a single file.
                <Header as="h2">Continuous Deployment with Buddybuild</Header>
                In the beginning, we had used TestFlight, but ran into lots of issues with it. At times, the Apple servers would continually reject our build for no reason.
                The error codes were cryptic, and StackOverflow answer said to just <em>try again later</em>. This was frustrating. Beyond this, it was very difficult to add new testers to our app.
                The process involved individual users sending us their UDID (universal device identifier) and us manually adding each user. default

                I found <a href="https://www.buddybuild.com/">Buddybuild.com</a> and set it up rather easily. New users go through a very simple onboarding process and the UDID is
                extracted and uploaded to tbe buddybuild server we registered our app on automatically. They even expose an API endpoint allowing us to
                <a href="https://apidocs.buddybuild.com/deployment_groups/put-add_testers.html" >programmatically add users to deployment groups.</a> The remote crash logs pinpoint to me where
                exactly the code was failing if a user faced a bug as well, and the buddybuild SDK let me set up a github integration to create a github issues automatically is our testers
                take screenshots of cosmetic issues in the iOS app as well. This was a much needed upgrade from TestFlight.
                <br/><br/>
                <b><em>
                Unfortunately, since this is still a work in progress, I am not able to share the codebase. I would be willing to explain my code or send snippets if you reach out
                to me personally!
                </em></b>

                <br/><br/>

            </p>
        </Container>
    </Container>
)

export default CooeiOS