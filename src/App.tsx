import React, { FC } from 'react';
import "./App.css";

type TAppProps = {};
const App: FC<TAppProps> = (props) => {

    return (
        <div className="app-container">
                <div className="app-container-top">
                    <h1 className="app-container-top__title">{
                        "Выберите сеть"
                    }</h1>
                    <h2 className="app-container-top__stations">{
                        ""
                    }</h2>
                </div>
                <div className="app-container-bottom">
                    {/*Сюда засунуть списки*/}
                </div>
        </div>
    );
};

export default App;
