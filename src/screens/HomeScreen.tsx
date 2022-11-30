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

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
