import { View, Text, StatusBar } from "react-native";

import { Header } from "../components/Header";
import { BarberCard } from "../components/BarberCard";

export default function ListBarber() {
  return (
    <View className="bg-[#F0F0F7] items-center flex-1">
      <StatusBar barStyle={"light-content"} backgroundColor={"#774DD6"} />
      <Header title="Lista de barbearias" />
      <View className="bg-[#8257E5] h-[200px] w-full p-8 pt-10 flex-row items-start justify-between">
        <Text className="text-white font-archivo_700 text-2xl leading-7">
          Barbearias {"\n"}Disponíveis
        </Text>
        <Text className="text-[#D4C2FF] font-poppins_400 text-xs">
          💇‍♂️ 1 barbearia
        </Text>
      </View>
      <BarberCard
        titleBarber="Félix Barbearia"
        region="Rodoviária"
        price={45}
      />
    </View>
  );
}
