import { useNavigation } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

import Logo from "../../assets/completed.svg";
import Background from "../../assets/bg_completed.svg";

export default function Completed() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-[#8257E5]">
      <StatusBar barStyle={"light-content"} backgroundColor={"#8257E5"} />
      <Background />
      <View className="absolute items-center">
        <Logo width={80} height={80} />
        <Text className="font-archivo_700 text-[32px] text-white leading-9 text-center mt-6">
          Cadastro {"\n"}concluído!
        </Text>
        <Text className="font-poppins_400 text-sm text-[#D4C2FF] text-center leading-6 mt-4">
          Agora você faz parte da {"\n"}plataforma da Meu Barbeiro
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigate("index")}
        activeOpacity={0.7}
        className="absolute bottom-20 bg-[#04D361] w-full max-w-[80%] h-14 rounded-lg items-center justify-center"
      >
        <Text className="font-archivo_600 text-base text-white">
          Fazer login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
