import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import { useAppSelector } from "../hooks";
import { selectTravelTimeInfo } from "../slices/navSlice";

type ItemType = {
  id: string;
  title: string;
  multiplier: number;
  image: string;
};

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selected, setSelected] = useState<ItemType | null>(null);
  const travelTimeInfo = useAppSelector(selectTravelTimeInfo);

  return (
    <SafeAreaView className="flex-grow bg-white">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute p-3 rounded-full top-3 left-5"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="py-5 text-xl text-center">
          Select a Ride - {travelTimeInfo?.distance.text}les
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        // trick to destructure item's properties but still get whole item too
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View>
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{travelTimeInfo?.duration.text} Travel Time</Text>
            </View>
            <Text>
              {travelTimeInfo &&
                new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  (travelTimeInfo.duration.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                    100
                )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          className={`py-3 m-3 ${selected ? "bg-black" : "bg-gray-200"}`}
        >
          <Text className="text-xl text-center text-white">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
