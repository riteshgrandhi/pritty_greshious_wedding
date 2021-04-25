import React from "react";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import styles from "./../styles/Event.module.css";

export interface EventProps {
  eventName: string;
  eventDescription: string;
  eventDateTime: string;
  eventLocation: string;
}

export const Event: React.FC<EventProps> = (props) => {
  const responsiveStyles = useResponsiveStyles(styles);
  return (
    <div className={`${styles.card} ${responsiveStyles.mobile}`}>
      <div className={`${styles.eventName} ${responsiveStyles.mobile}`}>
        {props.eventName}
      </div>
      <div className={`${styles.eventDescription} ${responsiveStyles.mobile}`}>
        {props.eventDescription}
      </div>
      <div className={`${styles.eventLocation} ${responsiveStyles.mobile}`}>
        {props.eventLocation}
      </div>
    </div>
  );
};
