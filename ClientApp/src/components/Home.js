import React, { useState, useEffect } from 'react';
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
    const [card1Image, setCard1Image] = useState("");
    const [card2Image, setCard2Image] = useState("");
    const [card3Image, setCard3Image] = useState("");
    const [homeTestimonyVid, setHomeTestimonyVid] = useState("");
    const [homeTestimonyPortrait1, setHomeTestimonyPortrait1] = useState("");
    const [homeTestimonyPortrait2, setHomeTestimonyPortrait2] = useState("");
    const [club1Image, setClub1Image] = useState("");
    const [club2Image, setClub2Image] = useState("");
    const [club3Image, setClub3Image] = useState("");
    const [club4Image, setClub4Image] = useState("");
    const [card1Link, setCard1Link] = useState("#");
    const [card2Link, setCard2Link] = useState("#");
    const [card3Link, setCard3Link] = useState("#");

    const [homeCardTitle1, setHomeCardTitle1] = useState("");
    const [homeCardTitle2, setHomeCardTitle2] = useState("");
    const [homeCardTitle3, setHomeCardTitle3] = useState("");
    const [homeCardContent1, setHomeCardContent1] = useState("");
    const [homeCardContent2, setHomeCardContent2] = useState("");
    const [homeCardContent3, setHomeCardContent3] = useState("");
    const [homeTestimonyContent1, setHomeTestimonyContent1] = useState("");
    const [homeTestimonyContent2, setHomeTestimonyContent2] = useState("");
    const [homeTestimonyName1, setHomeTestimonyName1] = useState("");
    const [homeTestimonyName2, setHomeTestimonyName2] = useState("");

    const [event1, setEvent1] = useState({
        eventContent: "",
        time: "",
    });
    const [event2, setEvent2] = useState({
        eventContent: "",
        time: "",
    });
    const [event3, setEvent3] = useState({
        eventContent: "",
        time: "",
    });
    const [event4, setEvent4] = useState({
        eventContent: "",
        time: "",
    });

    const getData = async () => {
        let response = null;
        let data = "";

        try {
            response = await fetch('api/pages/link&iden=homeTopVideo');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTopVideo(data);
        }

        try {
            response = await fetch('api/pages/link&iden=banner1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setBanner1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=banner2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setBanner2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=banner3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setBanner3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=card1Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setCard1Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=card2Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setCard2Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=card3Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setCard3Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=homeTestimonyVid');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyVid(data);
        }

        try {
            response = await fetch('api/pages/link&iden=homeTestimonyPortrait1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyPortrait1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=homeTestimonyPortrait2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyPortrait2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club1Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub1Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club2Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub2Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club3Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub3Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=club4Image');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setClub4Image(data);
        }

        try {
            response = await fetch('api/pages/link&iden=card1Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setCard1Link(data);
        }

        try {
            response = await fetch('api/pages/link&iden=card2Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setCard2Link(data);
        }

        try {
            response = await fetch('api/pages/link&iden=card3Link');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setCard3Link(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeCardTitle1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeCardTitle1(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeCardTitle2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeCardTitle2(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeCardTitle3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeCardTitle3(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeCardContent1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeCardContent1(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeCardContent2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeCardContent2(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeCardContent3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeCardContent3(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeTestimonyContent1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyContent1(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeTestimonyContent2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyContent2(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeTestimonyName1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyName1(data);
        }

        try {
            response = await fetch('api/pages/text&iden=homeTestimonyName2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setHomeTestimonyName2(data);
        }

        try {
            response = await fetch('api/pages/event&iden=event1');
        } catch { }
        if (response.ok == true) {
            data = await response.json();
            setEvent1(data);
        }

        try {
            response = await fetch('api/pages/event&iden=event2');
        } catch { }
        if (response.ok == true) {
            data = await response.json();
            setEvent2(data);
        }

        try {
            response = await fetch('api/pages/event&iden=event3');
        } catch { }
        if (response.ok == true) {
            data = await response.json();
            setEvent3(data);
        }

        try {
            response = await fetch('api/pages/event&iden=event4');
        } catch { }
        if (response.ok == true) {
            data = await response.json();
            setEvent4(data);
        }

        setLoading(false);
    };

    const galleryImages = [
        {
            original: banner1,
        },
        {
            original: banner2,
        },
        {
            original: banner3,
        },
    ];

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
                                        {event1.time}
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='success' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        {event1.eventContent}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        {event2.time}
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='secondary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        {event2.eventContent}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        {event3.time}
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        {event3.eventContent}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent color="text.secondary">
                                    <div className='timelineText'>
                                        {event4.time}
                                    </div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='warning' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className='timelineText'>
                                        {event4.eventContent}
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
                    <img className='homeCardImage' src={card1Image} alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>{homeCardTitle1}</p>
                        <p className='homeCardParagraph'>{homeCardContent1}</p>
                        <a href={card1Link}>
                            <button className='homeCardButton'>Explore</button>
                        </a>
                    </div>
                </div>

                <div className='homeCard'>
                    <img className='homeCardImage' src={card2Image} alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>{homeCardTitle2}</p>
                        <p className='homeCardParagraph'>{homeCardContent2}</p>
                        <a href={card2Link}>
                            <button className='homeCardButton'>Explore</button>
                        </a>
                    </div>
                </div>

                <div className='homeCard'>
                    <img className='homeCardImage' src={card3Image} alt='studentImage' />
                    <div className='homeCardContent'>
                        <p className='homeCardTitle'>{homeCardTitle3}</p>
                        <p className='homeCardParagraph'>{homeCardContent3}</p>
                        <a href={card3Link}>
                            <button className='homeCardButton'>Explore</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='homeVideoSection'>
                <div className='testimonyVid'>
                    <h2 className='testimony'>Testimonies from students!</h2>
                    <ReactPlayer
                        url={homeTestimonyVid}
                        controls='true'
                        width={'100%'}
                         />
                </div>

                <div className='testimonyStickerBoard'>
                    <div className='testimonySticker' style={{marginLeft:30}}>
                        <p className='testimonyText'>{homeTestimonyContent1}</p>
                        <img className='sticker' alt='sticker' src='https://sea3381808.blob.core.windows.net/images/stickerlight.png' />
                        <div className='mask1'>
                            <img src={homeTestimonyPortrait1} alt="portrait" className='portraitImage'></img>
                        </div>
                        <p className='testimonyName'>{homeTestimonyName1}</p>
                    </div>

                    <div className='testimonySticker' style={{marginLeft:30}}>
                        <p className='testimonyText'>{homeTestimonyContent2}</p>
                        <img className='sticker' alt='sticker' src='https://sea3381808.blob.core.windows.net/images/stickerdarker.png' />
                        <div className='mask1'>
                            <img src={homeTestimonyPortrait2} alt="portrait" className='portraitImage'></img>
                        </div>
                        <p className='testimonyName'>{homeTestimonyName2}</p>
                    </div>
                </div>
            </div>

            <h1>Clubs</h1>
            <div className='clubGrid'>
                <div className='clubContents'>
                    <a href='club/#club1'>
                        <div className='circle'>
                            <img className='circleImage' src={club1Image} />
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href='club/#club2'>
                        <div className='circle'>
                            <img className='circleImage' src={club2Image} />
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href='club/#club3'>
                        <div className='circle'>
                            <img className='circleImage' src={club3Image} />
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href='club/#club4'>
                        <div className='circle'>
                            <img className='circleImage' src={club4Image} />
                        </div>
                    </a>
                </div> 
            </div>

        </div>

    );
}
