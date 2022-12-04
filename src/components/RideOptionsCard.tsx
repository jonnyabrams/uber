import { Icon } from "@rneui/themed";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const RideOptionsCard = () => {
  return (
    <SafeAreaView className="flex-grow bg-white">
      <View>
        <TouchableOpacity className="absolute p-3 rounded-full top-3 left-5">
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="py-5 text-xl text-center">Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
