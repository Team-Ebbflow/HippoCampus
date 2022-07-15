import React from "react";

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
        </div>
    );
}