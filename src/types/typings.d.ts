export type locationType = {
  lat: number;
  lng: number;
}

export type originType = {
  location: locationType;
  description: string;
}

export type navType = {
  origin: originType | null;
  destination: null;
  travelTimeInfo: null;
}