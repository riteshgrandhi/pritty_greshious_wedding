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
      eventName: "Bridal Shower & Haldi",
      eventDescription: "Join the bride's family to bless her with Haldi and Holi water!",
      eventLocation: "Bride's Home, Konalli, Karnataka",
      eventDateTime: "9:00 AM onwards, 17th August 2021",
    },
    {
      eventName: "Mehendi & Sangeet",
      eventDescription:
        "Get together for this evening of dance, dinner and all round fun!",
      eventLocation: "Bride's Home, Konalli, Karnataka",
      eventDateTime: "3:00 PM onwards, 17th August 2021",
    },
    {
      eventName: "Groom's Rituals",
      eventDescription: "Upanayana, Kaashi Yatra and 'The Making of పెళ్లి కొడుకు/ಮದುವೆ ಗಂಡು'",
      eventLocation: "Shree Vanadurga Sabhabhavana, Kumta, Karnataka",
      eventDateTime: "6:00 AM onwards, 18th August 2021",
    },
    {
      eventName: "The Wedding",
      eventDescription: "Bless the Bride and Groom as they mark their new beginning!",
      eventLocation: "Shree Vanadurga Sabhabhavana, Kumta, Karnataka",
      eventDateTime: "11:42 AM, 18th August 2021",
    },
    {
      eventName: "Vratam & Reception",
      eventDescription: "Meet the newly-weds host Satyanarayana Vratam with their families followed by Reception",
      eventLocation: "Sri Kanya Grand Banquet Hall, Rajahmundry, Andhra Pradesh",
      eventDateTime: "12:00 PM onwards, 21st August 2021",
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
