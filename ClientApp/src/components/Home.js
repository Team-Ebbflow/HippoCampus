import React, { useEffect } from 'react';
import { Carousel, Card, Button, CardGroup } from 'react-bootstrap';
import './style.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function Home() {

    return (
        <div>
            <div id='video-view'>
                <video width={'100%'} autoPlay muted id='homebgvideo'>
                    <source src="https://sea3381808.blob.core.windows.net/videos/uonpropoganda.mp4" type="video/mp4" />
                </video>
            </div>

            <div id='homeCarouselGrid'>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            09:30 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='success'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            10:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            12:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='primary'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            9:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='warning'/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                    </TimelineItem>
                </Timeline>

                <Carousel id='carouselMain'>
                    <Carousel.Item>
                        <img
                            className='bannerImg'
                            src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className='bannerImg'
                            src="https://media.discordapp.net/attachments/989084273522909234/989084437683793960/gayUONhehe.jpg?width=756&height=504"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className='bannerImg'
                            src="https://media.discordapp.net/attachments/989084273522909234/989084596643721236/students_studying.jpg?width=756&height=504"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <CardGroup style={{ padding: '2% 8%' }}>
                <Card style={{ marginLeft: '3%' }}>
                    <Card.Img className='homeCardImage' variant="top" src="https://cdn.discordapp.com/attachments/989084273522909234/989084596643721236/students_studying.jpg" />
                    <Card.Body>
                        <Card.Title>Student</Card.Title>
                        <Card.Text>
                            Join our Diverse Student Communities
                        </Card.Text>
                        <Button variant="primary" href="#">Explore</Button>
                    </Card.Body>
                </Card>

                <Card style={{ marginLeft: '1%' }}>
                    <Card.Img className='homeCardImage' variant="top" src="https://cdn.discordapp.com/attachments/989084273522909234/989834914943893525/Engineers_Australia_Student_Society.jpg" />
                    <Card.Body>
                        <Card.Title>Chapters</Card.Title>
                        <Card.Text>
                            Student Chapters & Clubs
                        </Card.Text>
                        <Button variant="primary" href="#">Explore</Button>
                    </Card.Body>
                </Card>

                <Card style={{ marginLeft: '1%', marginRight: '3%' }}>
                    <Card.Img className='homeCardImage' variant="top" src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg" />
                    <Card.Body>
                        <Card.Title>Alumi Events</Card.Title>
                        <Card.Text>
                            Movie Nights and more!
                        </Card.Text>
                        <Button variant="primary" href="#">Explore</Button>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    );
}
