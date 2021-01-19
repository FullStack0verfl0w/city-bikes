import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../redux/reducer";
import {ELoadingStatus} from "../../types";
import ActivityIndicator from "../ActivityIndicator";
import StationItem from "../StationItem";
import "./index.css";

type TStationListProps = {};
const StationList: FC<TStationListProps> = (props) => {
    const state = useSelector((state: TState) => state);
    const network = state.activeNetwork;
    const stations = network.stations;
    const status = state.activeNetworkStatus;

    return (
        <ul className="station-list">
            {
                status === ELoadingStatus.Loading?
                    <ActivityIndicator />
                : status === ELoadingStatus.Error ?
                    <h1>Something went wrong</h1>
                :
                    stations?.map( (station, key) => {
                        return <StationItem emptySlots={station.emptySlots}
                                            info={station.info}
                                            freeBikes={station.freeBikes}
                                            id={station.id}
                                            latitude={station.latitude}
                                            longitude={station.longitude}
                                            name={station.name}
                                            timestamp={station.timestamp}
                                            key={key}/>
                    })
            }
        </ul>
    );
};

export default StationList;