import React, { FC } from "react";
import { TStation } from "../../types";
import "./index.css";

const StationItem: FC<TStation> = (props) => {
    const { emptySlots,
            info,
            freeBikes,
            id,
            latitude,
            longitude,
            name,
          } = props;

    return (
        <li className="station">
            <p>{name}</p>
        </li>
    );
};

export default React.memo(StationItem);