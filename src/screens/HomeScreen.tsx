import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full">
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
