import React, { useState } from 'react';
import { useEffect } from 'react';
import './style.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player'

const galleryImages = [
  {
    original: 'https://sea3381808.blob.core.windows.net/images/MMP0043.jpg',
    description: 'Our uni is beautiful',
  },
  {
    original: 'https://sea3381808.blob.core.windows.net/images/gayUONhehe.png',
    description: 'We love gays',
  },
  {
    original: 'https://sea3381808.blob.core.windows.net/images/students_studying.png',
    description: 'You study till you die',
  },
];

export default function Home() {
    useEffect(() => {
        getData();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    
    const [isLoading, setLoading] = useState(true);
    const [homeTopVideo, setHomeTopVideo] = useState("");
    const [banner1, setBanner1] = useState("");
    const [banner2, setBanner2] = useState("");
    const [banner3, setBanner3] = useState("");
    const [card1, setCard1] = useState("");
    const [card2, setCard2] = useState("");
    const [card3, setCard3] = useState("");
    const [homeTestimonyVid, setHomeTestimonyVid] = useState("");
    const [homeTestimonyPortrait1, setHomeTestimonyPortrait1] = useState("");
    const [homeTestimonyPortrait2, setHomeTestimonyPortrait2] = useState("");
    const [club1, setClub1] = useState("");
    const [club2, setClub2] = useState("");
    const [club3, setClub3] = useState("");
    const [club4, setClub4] = useState("");

    const getData = async () => {
        const response = await fetch('api/pages/link&iden=homeTopVideo');
        const data = await response.text();
        setHomeTopVideo(data);

        setLoading(false);
    };

    if (isLoading) {
        return (
            <div>
                <h1> Loading page, we'll bring you there soon... </h1>
            </div>
        )
    }
    return (
        <div>
            <div id='video-view'>
                <video width={'100%'} autoPlay loop muted id='homebgvideo'>
                    <source src={homeTopVideo} type="video/mp4" />
                </video>
            </div>

            <div id='homeCarouselGrid'>
                <div>
                    <h2 className='timelineTitle'>Upcoming Events</h2>
                    <div className='timeLine'>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        09:30 am
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        Eat
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        10:30am
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='secondary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        Code
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        12:00 am
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        Sleep
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        9:00 am
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='warning' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        Repeat
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>

                </div>
                <ImageGallery
                    items={galleryImages}
                    autoPlay={true}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showBullets={true}
                />

            </div>

            <div className='homeCardGroup'>
                <div className='homeCard'>
                    <img className='homeCardImage' src="https://cdn.discordapp.com/attachments/989084273522909234/989084596643721236/students_studying.jpg" alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>Student</p>
                        <p className='homeCardParagraph'>Student <br/>Great</p>
                        <button className='homeCardButton'>Explore</button>
                    </div>
                </div>

                <div className='homeCard'>
                    <img className='homeCardImage' src="https://cdn.discordapp.com/attachments/989084273522909234/989834914943893525/Engineers_Australia_Student_Society.jpg" alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>Student</p>
                        <p className='homeCardParagraph'>Student <br/>Nice</p>
                        <button className='homeCardButton'>Explore</button>
                    </div>
                </div>

                <div className='homeCard'>
                    <img className='homeCardImage' src="https://aecom.com/sg/wp-content/uploads/2019/03/MMP0043.jpg" alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>Student</p>
                        <p className='homeCardParagraph'>Student <br/>Awesome</p>
                        <button className='homeCardButton'>Explore</button>
                    </div>
                </div>
            </div>

            <div className='homeVideoSection'>
                <div className='testimonyVid'>
                    <h2 className='testimony'>Testimonies from students!</h2>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=a1x3q_ZSUpQ'
                        controls='true'
                        width={'100%'}
                         />
                </div>

                <div className='testimonyStickerBoard'>
                    <div className='testimonySticker' style={{marginLeft:30}}>
                        <p className='testimonyText'>XD</p>
                        <img className='sticker' alt='sticker' src='https://sea3381808.blob.core.windows.net/images/stickerlight.png' />
                        <div className='mask1'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png" alt="portrait" className='portraitImage'></img>
                        </div>
                    </div>

                    <div className='testimonySticker' style={{marginLeft:30}}>
                        <p className='testimonyText'>XD</p>
                        <img className='sticker' alt='sticker' src='https://sea3381808.blob.core.windows.net/images/stickerdarker.png' />
                        <div className='mask1'>
                            <img src="https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.jpg" alt="portrait" className='portraitImage'></img>
                        </div>
                    </div>
                </div>
            </div>

            <h1>Clubs</h1>
            <div className='clubGrid'>
                <div className='clubContents'>
                    <a href='club/#club1'>
                    <div className='circle'>
                        <img className='circleImage' src='https://media.discordapp.net/attachments/933556870302547993/997840043123150858/unknown.png?width=484&height=484'/>
                    </div>
                    </a>
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
