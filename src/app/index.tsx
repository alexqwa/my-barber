import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";

import Illustration from "../assets/illustration.svg";
import profileImg from "../assets/profile.png";

export default function Home() {
  return (
    <View className="bg-[#F0F0F7] flex-1 items-center">
      <StatusBar barStyle={"light-content"} backgroundColor={"#8257E5"} />
      <View className="bg-[#8257E5] w-full justify-center items-center">
        <View className="flex-row items-center justify-between w-full max-w-[80%] mt-16">
          <View className="flex-row items-center">
            <View className="h-[48px] w-[48px] rounded-full">
              <Image source={profileImg} className="rounded-full" />
            </View>
            <Text className="ml-4 font-poppins_500 text-sm text-white">
              Alexandre F.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("signin")}
            className="bg-[#774DD6] w-10 h-10 rounded-lg items-center justify-center"
          >
            <Feather name="power" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View className="my-10">
          <Illustration />
        </View>
      </View>
      <View className="max-w-[80%] w-full">
        <Text className="mt-[42px] text-[#6A6180] font-poppins_400 text-xl">
          Seja bem-vindo.{"\n"}
          <Text className="font-poppins_600">O que deseja fazer?</Text>
        </Text>
        <View className="gap-4 flex-row items-center mt-6">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("listbarber")}
            className="bg-[#8257E5] flex-1 h-[158px] rounded-lg"
          >
            <View className="p-6 justify-between flex-1">
              <Feather name="map-pin" size={32} color="#fff" />
              <Text className="text-white text-base font-archivo_700">
                Ver{"\n"}Barbearias
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-[#04D361] flex-1 h-[158px] rounded-lg"
          >
            <View className="p-6 justify-between flex-1">
              <Feather name="heart" size={32} color="#fff" />
              <Text className="text-white text-base font-archivo_700">
                Minhas{"\n"}Favoritas
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="mt-16 font-poppins_400 text-xs text-[#9C98A6] leading-5">
          Total de 76 barbearias{"\n"}perto de você. 💜
        </Text>
      </View>
    </View>
  );
}
