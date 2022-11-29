import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("../../assets/logo.png")}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
