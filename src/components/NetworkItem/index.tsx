import React, {FC, useEffect} from "react";
import { useDispatch } from "react-redux";
import { FetchActiveNetwork } from "../../redux/actions";
import { TNetwork } from "../../types";
import FavoriteButton from "../FavoriteButton";
import "./index.css";

const NetworkItem: FC<TNetwork> = (props) => {
    const { id, name, location, favorite, index } = props;
    const dispatch = useDispatch();

    const setActiveNetwork = () => {
        if ( id )
        dispatch(FetchActiveNetwork(id));
    };

    useEffect( ()=> {
        // Да простят меня боги кода
        if ( index === 0 )
            setActiveNetwork();
    }, []);

    return (
        <li className="network" onClick={setActiveNetwork}>
            <div className="network-info">
                <h1 className="network-info__name">{name}</h1>
                <h2 className="network-info__location">{location.city} {location.country}</h2>
            </div>
            <div className="network-favorite">
                <FavoriteButton id={id} favorite={favorite} />
            </div>
        </li>
    );
};

export default React.memo(NetworkItem);