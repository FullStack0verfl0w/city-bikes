import React, { FC } from "react";
import "index.css";

type TActivityIndicatorProps = {
    text: string,
};

const ActivityIndicator: FC<TActivityIndicatorProps> = (props) => {
    const { text } = props;

    return (
        <div className="activity-indicator">
            <div className="activity-indicator__indicator" />
            <h1 className="activity-indicator__text">{text || "Loading..."}</h1>
        </div>
    );
};

export default ActivityIndicator;