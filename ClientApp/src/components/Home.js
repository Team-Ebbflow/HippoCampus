import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                            10:30am
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

            <div className='homeCardGroup'>
                <div className='homeCard'>
                    <img className='homeCardImage' src="https://cdn.discordapp.com/attachments/989084273522909234/989084596643721236/students_studying.jpg" alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>Student</p>
                        <p className='homeCardParagraph'>Student <br/>Die</p>
                        <button className='homeCardButton'>Explore</button>
                    </div>
                </div>

                <div className='homeCard'>
                    <img className='homeCardImage' src="https://cdn.discordapp.com/attachments/989084273522909234/989834914943893525/Engineers_Australia_Student_Society.jpg" alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>Student</p>
                        <p className='homeCardParagraph'>Student <br/>Die</p>
                        <button className='homeCardButton'>Explore</button>
                    </div>
                </div>

                <div className='homeCard'>
                    <img className='homeCardImage' src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg" alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>Student</p>
                        <p className='homeCardParagraph'>Student <br/>Die</p>
                        <button className='homeCardButton'>Explore</button>
                    </div>
                </div>
            </div>

            <h1>Clubs</h1>
            <div className='clubGrid'>
                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImage' src='https://media.discordapp.net/attachments/933556870302547993/997840043123150858/unknown.png?width=484&height=484'/>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImage' src='https://media.discordapp.net/attachments/933556870302547993/997844179315068970/unknown.png?width=567&height=484'/>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImage' src='https://media.discordapp.net/attachments/933556870302547993/997845917292040202/IPRS_logo.png'/>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImage' src='https://media.discordapp.net/attachments/830006727838924801/997837436895903814/unknown.png?width=490&height=484'/>
                    </div>
                </div> 
            </div>
        </div>
    );
}
