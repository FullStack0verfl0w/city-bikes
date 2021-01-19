import { Dispatch } from "redux";
import { ELoadingStatus, TNetwork } from "../types";
import EActionType from "./types";

export const SetNetworkList = (payload: TNetwork[]) => {
    return { type: EActionType.SetNetworkList, payload };
};

export const SetNetworkListStatus = (status: ELoadingStatus) => {
    return { type: EActionType.SetNetworkListLoading, payload: status };
};

export const SetActiveNetworkStatus = (status: ELoadingStatus) => {
    return { type: EActionType.SetActiveNetworkLoading, payload: status };
};

export const SetNetworkFavorite = (id: string, favorite?: boolean) => {
    return { type: EActionType.SetNetworkFavorite, id, payload: favorite };
};

export const SetActiveNetwork = (network: TNetwork) => {
    return { type: EActionType.SetActiveNetwork, payload: network };
};

export const FetchActiveNetwork = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(SetActiveNetworkStatus(ELoadingStatus.Loading));

        const resp = await fetch(`https://api.citybik.es/v2/networks/${id}`);
        const json = await resp.json();
        dispatch(SetActiveNetwork(json.network));
        dispatch(SetActiveNetworkStatus(ELoadingStatus.None));
    }
    catch (e) {
        dispatch(SetActiveNetworkStatus(ELoadingStatus.Error));
    }
};

export const FetchNetworkList = async (dispatch: Dispatch) => {
    try {
        dispatch(SetNetworkListStatus(ELoadingStatus.Loading));

        const resp = await fetch("https://api.citybik.es/v2/networks");
        const json = await resp.json();
        dispatch(SetNetworkList(json.networks));
        dispatch(SetNetworkListStatus(ELoadingStatus.None));
    }
    catch (e) {
        dispatch(SetNetworkListStatus(ELoadingStatus.Error));
    }
};