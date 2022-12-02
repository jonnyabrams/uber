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
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity>
          <Icon
            // className="p-3 mr-4 bg-gray-300 rounded-full"
            style={{
              backgroundColor: "lightgray",
              padding: 3,
              marginRight: 4,
              borderRadius: 99,
            }}
            name={icon}
            type="ionicon"
            color="white"
            size={28}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
