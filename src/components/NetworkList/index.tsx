import React, {FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TState } from "../../redux/reducer"
import { ELoadingStatus, TNetwork } from "../../types";
import { FetchNetworkList } from "../../redux/actions";
import ActivityIndicator from "../ActivityIndicator";
import NetworkItem from "../NetworkItem";
import "./index.css";

type TNetworkListProps = {};

const NetworkList: FC<TNetworkListProps> = (props) => {
    const state: TState = useSelector((state: TState) => state)
    const networkList: TNetwork[] = state.networkList;
    const status: ELoadingStatus = state.networkListStatus;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchNetworkList);
    }, [dispatch]);

    return (
        <ul className="network-list">
            {
                status === ELoadingStatus.Loading?
                    <ActivityIndicator />
                : status === ELoadingStatus.Error ?
                    <h1>Something went wrong</h1>
                :
                    networkList?.map( (network, key) => {
                        return <NetworkItem company={network.company}
                                            favorite={network.favorite}
                                            href={network.href}
                                            location={network.location}
                                            name={network.name}
                                            id={network.id}
                                            index={key}
                                            key={key}/>
                    })
            }
        </ul>
    );
};

export default NetworkList;