import React from "react";
import './style.css'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events.json";

export default function Guide() {
    return (
        <div>
            <VerticalTimeline
            lineColor="#ff9d4d">
                {events.map(event => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={event.date}
                        iconStyle={{ background: "#ced8ff", color: "#ff9d4d" }}
                        contentStyle={{ background: '#ffffff', color: '#000000' }}
                    >
                        <h3
                            className="vertical-timeline-element-title"
                            dangerouslySetInnerHTML={{ __html: event.event }}
                        />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

            <hr className="guideSplitLine"/>

            <h1 style={{ marginTop: 50 }}>Useful links</h1>

            <div className='guideGrid'>
                <div className='clubContents'>
                    <div className='circle'>
                        <div className="guideCover">
                            <img className='circleImageGuide' src='https://media.discordapp.net/attachments/933556870302547993/997840043123150858/unknown.png?width=484&height=484' />
                            <h2 className="guideText">Canvas</h2>
                        </div>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImageGuide' src='https://media.discordapp.net/attachments/933556870302547993/997844179315068970/unknown.png?width=567&height=484'/>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImageGuide' src='https://media.discordapp.net/attachments/933556870302547993/997845917292040202/IPRS_logo.png'/>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImageGuide' src='https://media.discordapp.net/attachments/830006727838924801/997837436895903814/unknown.png?width=490&height=484'/>
                    </div>
                </div> 

                <div className='clubContents'>
                    <div className='circle'>
                        <img className='circleImageGuide' src='https://media.discordapp.net/attachments/830006727838924801/997837436895903814/unknown.png?width=490&height=484'/>
                    </div>
                </div> 
            </div>
        </div>
    );
}