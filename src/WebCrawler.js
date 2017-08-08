/**
 * Created by kingHenry on 8/5/17.
 */
//Libraries
import React from 'react';
import {Container,Image,Header,List } from 'semantic-ui-react';

//Images
import webCrawlerStack  from './assets/images/webCrawlerStack.png';
import tradeInValue from './assets/images/tradeInPrice.png';
import purchasePrice from './assets/images/purchasePrice.png';

const WebCrawler = () => (
    <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>nodeJS/Redis Distributed Web Crawler</Header>
        <Container textAlign="left">
            <Image
                size='small'
                src={webCrawlerStack}
                centered
            /><p></p>
            <p>I spent a considerable amount of my time while working on my BS and MS at NJIT
                doing contract work I found on <a target="_blank" href="https://www.upwork.com">Upwork, formerly known as
                    ODesk</a>.
                My entry level work was limited to alot of <b>Manual and automated QA Testing </b>, but this helped to
                accumulate many hours of work which made my profile on Upwork stronger. After a while I branched out into more challenging
                opportunities. This was my first real project that I found on my own on Upwork.<br/><br/>

                <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/tree/amazonCrawlin">
                    My source code can be found here</a>


                <Header as="h2">The Assignment</Header>
                The task was to crawl Amazon to detect discrepancies for books where the trade-in value exceeded the
                first available purchase price:

                <Image
                    size='medium'
                    src={tradeInValue}
                    centered
                /><br/><br/>
                    This image shows the trade in value, highlighted by the red box. This price is immediately exchangeable
                    for an Amazon gift card of the value indicated.
                <Image
                    size='medium'
                    src={purchasePrice}
                    centered
                /><br/><br/>
                This image shows the first available purchase price after a user selects the option to view <em>'More Buying Choices'</em>.
                I had created a web crawler for my graduate course in Information Retrieval, so my plan was to extend the usage of this application
                to fit my client's needs as described here.

                <Header as="h2"> The Problems</Header>

                The task required me to take an input .txt file, which contained a list of keywords my client would provide me.
                The web crawler application would be able to parse the keywords from this file, search amazon for books of the respective keywords,
                and for each result on the first page examine the aformentioned prices. Then the application was supposed to calculate the
                instances where the trade-in value exceeded the purchase price by a specific amount ($). The desired output would be rendered
                in a CSV file, for my client to look at in an Excel spreadsheet rather than have to deal with any of my code directly.

                I determined the steps to be the following:
                <Header as="h3">Crawl Manager nodeJS Instance</Header>
                <List ordered>
                    <List.Item >Parse input
                        keywords.txt file</List.Item>
                    <List.Item>
                        Input keywords into amazon URLs to be crawled
                        <List.List>
                        <List.Item >Inject keywords into the Amazon URL to be crawled</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>Push URL on the Queue of URLs to be crawled </List.Item>
                </List>
                <Header as="h3">Crawl Worker nodeJS Instances</Header>
                <List ordered>
                    <List.Item >Pop URL off queue to crawl
                    <List.List>
                        <List.Item>
                            If the URL is the result of searching for books:
                            <List.List>
                                <List.Item >&nbsp;Push URL of  subsequent individual books onto queue to be crawled</List.Item>
                            </List.List>
                        </List.Item>

                        <List.Item>
                            If the URL is an indivudal book:
                            <List.List>
                                <List.Item>&nbsp;Extract trade-in value</List.Item>
                                <List.Item>&nbsp;Push URL of 'More Buying Choices' onto queue to be crawled </List.Item>
                            </List.List>
                        </List.Item>
                        <List.Item>
                            If the URL is the 'More Buying Choices' page of an individual book
                            <List.List>
                                <List.Item>&nbsp;Extract the first available purchase price</List.Item>
                            </List.List>
                        </List.Item>
                    </List.List>
                    </List.Item>
                </List>
                <Header as="h3">Python CSV Formatting Script</Header>
                <List ordered>
                    <List.Item >Calculate profitable instances using extracted values from nodeJS Worker Instances</List.Item>
                    <List.Item >Format results into an easy to read comma separated values file for client to view</List.Item>
                </List>

                <Header as="h2">Distributed Architecture</Header>
                <p>
               The client had given me access to his AWS EC2 management console. I was familar with deploying VPS Instances on AWS
                and was able to use the instances to create my workers and manager instances. I had opted to use Redis and the
                <a target="_blank" href="https://automattic.github.io/kue/">&nbsp;Kue library</a> installed in AWS elasticache as a centralized job queue.
                I opted to use redis over other job queues such as RabbitMQ (Celery) because it had a simple and easy to understand API
                and did not have too many excess features and was lightweight and easy to setup. Elasticache enabled me to have
                my redis instance available to all EC2 nodes in my VPC (Virtual Private Cloud).</p>
                <p>
                    The advantage of architecting a web crawler to utilize a centralized queue was that the URLs to be crawled
                    are simple units of work. These units of work can be consumed by as any workers as necessary in order to reduce
                    overall task completion time.
                </p>


                <Header as="h2">The Output</Header>
                The input file followed <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/keywords.txt">
                    this same format</a>. The keywords were processed as command line arguments (argv) and through the
                node file module (fs). <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/priceCompManager.js">
                    The Manager file</a> followed the same logic as described in the outline pseudocode above.
                <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/priceCompWorker.js">
                The worker file</a>  follows the respective pseudocode outline above, and used cheerio to scrape the DOM to find the approriate
                link(s) to crawl, or values to return.
                The manager file contained a reference count to the total number of jobs, <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/priceCompManager.js#L68">
                    and when completed</a>, returned a pretty printed <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/priceCompare.txt">
                    JSON struture returned in a .txt file</a>.
                The <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/showResults.py">Python script &nbsp;</a>
                processed these results and conducted the appropriate calculations desired by the client to reduce the final set to
                only the desired records where profit was above a specified level (in this demo, $3). The final results were&nbsp;
                <a target="_blank" href="https://gitlab.com/yolo/nodecrawlin/blob/amazonCrawlin/final.csv">
                printed out into a .CSV file.</a>
                </p>
        </Container>
    </Container>
)

export default WebCrawler;
