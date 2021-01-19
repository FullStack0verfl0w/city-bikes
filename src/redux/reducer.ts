import { Reducer } from "redux";
import { ELoadingStatus, TNetwork } from "../types";
import EActionType from "./types";

export type TState = {
    networkList: TNetwork[],
    networkListStatus: ELoadingStatus,
    activeNetwork: TNetwork,
    activeNetworkStatus: ELoadingStatus,
};
export const initialState: TState = {
    networkList: [],
    networkListStatus: ELoadingStatus.None,
    activeNetwork: {} as TNetwork,
    activeNetworkStatus: ELoadingStatus.None,
};


const reducer: Reducer = (state: TState, action) => {
    switch (action.type) {
        case EActionType.SetNetworkList: {
            const newState = {...state};
            const { payload } = action;

            payload.forEach( (net: TNetwork) => {
                net.favorite = false;
            });

            newState.networkList = payload;
            newState.activeNetwork = payload[0];
            return newState;
        }
        case EActionType.SetNetworkListLoading: {
            const newState = {...state};
            const { payload } = action;

            newState.networkListStatus = payload;
            return newState;
        }
        case EActionType.SetNetworkFavorite: {
            const newState = {...state};
            const { id, payload } = action;

            for ( let i=0; i<newState.networkList.length; i++ ) {
                if ( newState.networkList[i].id === id ) {
                    newState.networkList[i].favorite = payload;
                    return newState;
                }
            }

            return state;
        }
        case EActionType.SetActiveNetwork: {
            const newState = {...state};
            const { payload } = action;

            newState.activeNetwork = payload;
            return newState;
        }
        case EActionType.SetActiveNetworkLoading: {
            const newState = {...state};
            const { payload } = action;

            newState.activeNetworkStatus = payload;
            return newState;
        }
        default:
            return state;
    }
};

export default reducer;