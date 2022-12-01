import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { useAppSelector } from "../hooks";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useAppSelector(selectOrigin);

  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        // @ts-ignore
        latitude: origin?.location.lat,
        // @ts-ignore
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
