import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

import Logo from "../assets/logo.svg";

export function Header() {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView>
      <View className="w-full bg-[#774DD6] h-[70px] items-center justify-between border-b-2 border-[#6842C2] px-10 flex-row mt-10">
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="arrow-left" size={24} color="#D4C2FF" />
        </TouchableOpacity>
        <Text className="font-archivo_500 text-sm text-[#D4C2FF]">
          Meu perfil
        </Text>
        <Logo />
      </View>
    </SafeAreaView>
  );
}
