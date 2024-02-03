import { useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import BackgroundAuth from "../assets/bg_auth.svg";

export default function Home() {
  const { goBack } = useNavigation();

  return (
    <View className="bg-[#F0F0F7] flex-1 items-center">
      <View className="bg-[#8257E5] h-[40%] w-full justify-center items-center">
        <BackgroundAuth />
        <Text className="absolute text-white font-archivo_700 text-3xl">
          Meu barbeiro
        </Text>
      </View>
      <View className="max-w-[80%] mx-auto w-full mt-12">
        <TouchableOpacity activeOpacity={0.7} onPress={() => goBack()}>
          <Feather name="arrow-left" size={24} color="#9C98A6" />
        </TouchableOpacity>
        <Text className="font-poppins_600 text-[#32264D] text-2xl mt-10">
          Esqueceu sua senha?
        </Text>
        <Text className="font-poppins_400 text-[#6A6180] text-sm leading-6 mt-4 mb-10">
          Não esquenta,{"\n"}vamos dar um jeito nisso.
        </Text>
        <TextInput
          placeholder="E-mail"
          className="h-16 bg-white placeholder:font-poppins_400 font-poppins_400 rounded-lg px-6 border border-[#E6E6F0] text-[#6A6180]"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-[#DCDCE5] h-16 rounded-lg items-center justify-center mt-6"
        >
          <Text className="text-base text-[#9C98A6] font-archivo_600">
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
