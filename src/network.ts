export type TNetwork = {
    company: string[],
    href: string,
    id: string,
    location: TLocation,
    name: string,
};

export type TLocation = {
    city: string,
    country: string,
    latitude: number,
    longitude: number,
};

export type TStation = {
    emptySlots: number,
    info: TStationInfo,
    freeBikes: number,
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    timestamp: string,
};

export type TStationInfo = {
    electricBikes: number,
    electricFree: number,
    electricSlots: number,
    normalBikes: number,
    normalFree: number,
    normalSlots: number,
    slots: number,
    uid: string,
};