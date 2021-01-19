import React, { FC, MouseEvent } from "react";
import heart from "./heart-solid.png";
import heartDisabled from "./heart-solid-disabled.png";
import "./index.css"
import {useDispatch} from "react-redux";
import {SetNetworkFavorite} from "../../redux/actions";

type TFavoriteButtonProps = {
    id: string,
    favorite: boolean,
    onPress?: Function,
}

const FavoriteButton: FC<TFavoriteButtonProps> = (props) => {
    const { id, favorite, onPress } = props;
    const dispatch = useDispatch();

    const doClick = (e: MouseEvent) => {
        dispatch(SetNetworkFavorite(id, !favorite));

        if ( onPress )
            onPress(e);
    };

    return (
        <button className="favorite-button"
                onClick={doClick}>
            {
                favorite ?
                    <img src={heart} alt="Make favorite"/>
                :
                    <img src={heartDisabled} alt="Make favorite"/>
            }
        </button>
    )
};

export default FavoriteButton;