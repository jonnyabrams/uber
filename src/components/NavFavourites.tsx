import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Home Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Work Street, London, UK",
  },
  // {
  //   id: "789",
  //   icon: "airplane-outline",
  //   location: "Airport",
  //   destination: "Plane Street, London, UK",
  // },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        // combine tailwind with inline style so height can go lower than 1
        <View className="bg-gray-200" style={{ height: 0.5 }} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={{
              backgroundColor: "lightgray",
              padding: 6,
              marginRight: 12,
              borderRadius: 99,
            }}
            name={icon}
            type="ionicon"
            color="white"
            size={24}
          />
          <View>
            <Text className="text-lg font-semibold">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
  