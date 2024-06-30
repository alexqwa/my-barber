import { View, Text, StatusBar } from "react-native";

import { Header } from "../components/Header";
import { BarberCard } from "../components/BarberCard";
import { ScrollView } from "react-native-gesture-handler";

export default function ListBarber() {
  return (
    <View className="bg-[#F0F0F7] items-center flex-1">
      <StatusBar barStyle={"light-content"} backgroundColor={"#774DD6"} />
      <Header title="Barbearias disponíveis" />
      <View className="bg-[#8257E5] h-[200px] w-full p-8 pt-10">
        <Text className="text-white font-archivo_700 text-2xl leading-7">
          Barbearias {"\n"}Disponíveis
        </Text>
      </View>
      <ScrollView
        className="-mt-16 w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <BarberCard titleBarber="Félix Barbearia" rating={4.7} />
        <BarberCard titleBarber="Renan Barber" rating={4.2} />
        <BarberCard titleBarber="Lorem Barbearia" rating={4.9} />
      </ScrollView>
    </View>
  );
}
