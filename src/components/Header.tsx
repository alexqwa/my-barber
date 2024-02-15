import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

import Logo from "../assets/logo.svg";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <View className="w-full bg-[#774DD6] h-[70px] items-center justify-center border-b border-[#6842C2] mt-8">
      <View className="flex-row max-w-[80%] w-full justify-between items-center">
        <TouchableOpacity
          onPress={() => goBack()}
          activeOpacity={0.7}
          className="p-2 -ml-2"
        >
          <Feather name="arrow-left" size={24} color="#D4C2FF" />
        </TouchableOpacity>
        <Text className="font-archivo_500 text-sm text-[#D4C2FF]">{title}</Text>
        <Logo />
      </View>
    </View>
  );
}
