export type locationType = {
  lat: number;
  lng: number;
}

export type originType = {
  location: locationType;
  description: string;
}

export type distanceType = {
  text: string;
  value: number
}

export type travelTimeInfoType = {
  distance: distanceType;
  duration: distanceType;
  status: string;
}

export type navType = {
  origin: originType | null;
  destination: originType | null;
  travelTimeInfo: travelTimeInfoType | null;
}