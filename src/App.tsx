import React, { FC } from 'react';
import "./App.css";
import NetworkList from "./components/NetworkList";
import {useSelector} from "react-redux";
import {TState} from "./redux/reducer";
import StationList from "./components/StationList";

type TAppProps = {};
const App: FC<TAppProps> = (props) => {
    const activeNetwork = useSelector((state: TState)=>state.activeNetwork);

    return (
        <div className="app-container">
                <div className="app-container-top">
                    <h1 className="app-container-top__title">{
                        !activeNetwork.name ?
                            "Выберите сеть"
                        :
                            activeNetwork.name
                    }</h1>
                    <h2 className="app-container-top__stations">{
                        !activeNetwork?.stations ?
                            ""
                        :
                            `Общее количество станций: ${activeNetwork?.stations.length}.`
                    }</h2>
                </div>
                <div className="app-container-bottom">
                    <NetworkList />
                    <StationList />
                </div>
        </div>
    );
};

export default App;
