import React, { useState, useEffect } from 'react';
import './style.css'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Guide() {
    useEffect(() => {
        getData();
    }, []);

    const [isLoading, setLoading] = useState(true);

    const [usefulLinkImage1, setUsefulLinkImage1] = useState("");
    const [usefulLinkImage2, setUsefulLinkImage2] = useState("");
    const [usefulLinkImage3, setUsefulLinkImage3] = useState("");
    const [usefulLinkImage4, setUsefulLinkImage4] = useState("");
    const [usefulLinkImage5, setUsefulLinkImage5] = useState("");
    const [usefulLink1, setUsefulLink1] = useState("");
    const [usefulLink2, setUsefulLink2] = useState("");
    const [usefulLink3, setUsefulLink3] = useState("");
    const [usefulLink4, setUsefulLink4] = useState("");
    const [usefulLink5, setUsefulLink5] = useState("");

    const [timelineEvents, setTimelineEvents] = useState("");

    const [usefulLinkText1, setUsefulLinkText1] = useState("");
    const [usefulLinkText2, setUsefulLinkText2] = useState("");
    const [usefulLinkText3, setUsefulLinkText3] = useState("");
    const [usefulLinkText4, setUsefulLinkText4] = useState("");
    const [usefulLinkText5, setUsefulLinkText5] = useState("");

    const getData = async () => {
        let response = null;
        let data = "";

        try {
            response = await fetch('api/pages/timelineall');
        } catch { }
        if (response.ok == true) {
            data = await response.json();
            for (var i = 0; i < data.length; i++) {
                data[i].date = data[i].date.slice(0, 10);
            }
            setTimelineEvents(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLinkImage1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkImage1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLinkImage2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkImage2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLinkImage3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkImage3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLinkImage4');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkImage4(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLinkImage5');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkImage5(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLink1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLink1(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLink2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLink2(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLink3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLink3(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLink4');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLink4(data);
        }

        try {
            response = await fetch('api/pages/link&iden=usefulLink5');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLink5(data);
        }

        try {
            response = await fetch('api/pages/text&iden=usefulLinkText1');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkText1(data);
        }

        try {
            response = await fetch('api/pages/text&iden=usefulLinkText2');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkText2(data);
        }

        try {
            response = await fetch('api/pages/text&iden=usefulLinkText3');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkText3(data);
        }

        try {
            response = await fetch('api/pages/text&iden=usefulLinkText4');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkText4(data);
        }

        try {
            response = await fetch('api/pages/text&iden=usefulLinkText5');
        } catch { }
        if (response.ok == true) {
            data = await response.text();
            setUsefulLinkText5(data);
        }

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
            <VerticalTimeline
            lineColor="#ff9d4d">
                {timelineEvents.map(event => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={event.date}
                        iconStyle={{ background: "#ced8ff", color: "#ff9d4d" }}
                        contentStyle={{ background: '#ffffff', color: '#000000' }}
                    >
                        <h3
                            className="vertical-timeline-element-title"
                            dangerouslySetInnerHTML={{ __html: event.eventContent }}
                        />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

            <hr className="guideSplitLine"/>

            <h1 style={{ marginTop: 50 }}>Useful links</h1>

            <div className='guideGrid'>
                <div className='clubContents'>
                    <a href={usefulLink1}>
                        <div className='circle'>
                            <img className='circleImageGuide' src={usefulLinkImage1} alt="guideImage" />
                            <h2 className="guideText">{usefulLinkText1}</h2>
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href={usefulLink2}>
                        <div className='circle'>
                            <img className='circleImageGuide' src={usefulLinkImage2} alt="guideImage" />
                            <h2 className="guideText">{usefulLinkText2}</h2>
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href={usefulLink3}>
                        <div className='circle'>
                            <img className='circleImageGuide' src={usefulLinkImage3} alt="guideImage" />
                            <h2 className="guideText">{usefulLinkText3}</h2>
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href={usefulLink4}>
                        <div className='circle'>
                            <img className='circleImageGuide' src={usefulLinkImage4} alt="guideImage" />
                            <h2 className="guideText">{usefulLinkText4}</h2>
                        </div>
                    </a>
                </div>

                <div className='clubContents'>
                    <a href={usefulLink5}>
                        <div className='circle'>
                            <img className='circleImageGuide' src={usefulLinkImage5} alt="guideImage" />
                            <h2 className="guideText">{usefulLinkText5}</h2>
                        </div>
                    </a>
                </div> 
            </div>
        </div>
    );
}