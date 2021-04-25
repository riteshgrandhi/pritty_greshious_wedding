import React from "react";
import { Event, EventProps } from "./Event";
import styles from "./../styles/Events.module.css";
import { ParallaxPage } from "./ParallaxPage";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Icon: React.FC = () => (
  <div className={styles.iconWrapper}>
    <div className={styles.icon} />
  </div>
);

export const Events = React.forwardRef<HTMLDivElement>((props, ref) => {
  const responsiveStyles = useResponsiveStyles(styles);
  const events: EventProps[] = [
    {
      eventName: "Bridal Shower & Mehendi",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam distinctio porro eveniet, atque ex id reprehenderit consequuntur dicta beatae neque aperiam possimus",
      eventLocation: "Bride's Home, Konalli, Karnataka",
      eventDateTime: "10:00 AM onwards, 19th May 2021",
    },
    {
      eventName: "Groom's Rituals",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam distinctio porro eveniet, atque ex id reprehenderit consequuntur dicta beatae neque aperiam possimus",
      eventLocation: "Grama Okkaliga Sabhabhavana Manira, Kumta, Karnataka",
      eventDateTime: "6:00 AM onwards, 20th May 2021",
    },
    {
      eventName: "The Wedding",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam distinctio porro eveniet, atque ex id reprehenderit consequuntur dicta beatae neque aperiam possimus",
      eventLocation: "Grama Okkaliga Sabhabhavana Manira, Kumta, Karnataka",
      eventDateTime: "11:10 AM, 20th May 2021",
    },
    {
      eventName: "Reception",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam distinctio porro eveniet, atque ex id reprehenderit consequuntur dicta beatae neque aperiam possimus",
      eventLocation: "Chamber of Commerce, Rajahmundry, Andhra Pradesh",
      eventDateTime: "7:30 PM onwards, 24th May 2021",
    },
  ];

  return (
    <ParallaxPage
      bgImage="/images/fort.jpg"
      bgClassName={`${styles.bg} ${responsiveStyles.mobile}`}
    >
      <div ref={ref} className={styles.wrapper}>
        <VerticalTimeline>
          {events.map((e, i) => (
            <VerticalTimelineElement
              key={i}
              className={styles.eventWrapper}
              contentStyle={{
                background: "none",
                boxShadow: "none",
                padding: "0",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 232, 214, 0.6)",
              }}
              icon={<Icon />}
              iconStyle={{
                background: "none",
                boxShadow: "none",
              }}
              date={e.eventDateTime}
              dateClassName={`${styles.eventDateTime} ${responsiveStyles.mobile}`}
            >
              <Event {...e} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </ParallaxPage>
  );
});
