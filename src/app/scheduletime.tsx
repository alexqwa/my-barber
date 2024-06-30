import { View, Text, StatusBar, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Header } from "../components/Header";

import profileImg from "../assets/profile.png";
import { ScrollView } from "react-native-gesture-handler";

export default function ScheduleTime() {
  return (
    <View className="bg-[#F0F0F7] items-center flex-1">
      <StatusBar barStyle={"light-content"} backgroundColor={"#774DD6"} />
      <Header title="Agendar horário" />
      <ScrollView
        className="w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View className="bg-[#8257E5] h-[340px] w-full items-center justify-center -mt-3">
          <View className="space-y-4 items-center">
            <Image source={profileImg} className="rounded-full w-40 h-40" />
            <Text className="font-archivo_700 text-2xl text-white">
              Félix Barbearia
            </Text>
            <View className="w-16 h-6 rounded-full border border-white flex-row items-center justify-between px-2">
              <MaterialIcons name="star-rate" size={16} color="#fff" />
              <Text className="font-archivo_700 text-white">4.7</Text>
            </View>
          </View>
        </View>
        <View className="-mt-5 bg-white max-w-[90%] w-full p-6 rounded-lg space-y-6 mb-5">
          <View className=" space-y-2">
            <Text className="font-archivo_600 text-[#32264D] text-xl">
              Sobre a barbearia
            </Text>
            <View className="bg-[#FAFAFC] p-6 border border-[#E6E6F0] rounded-lg">
              <Text className="text-[#6A6180] font-poppins_400 text-sm">
                Uma ótima barberia oferecendo o melhor para seus clientes. Temos
                vários profissionais aptos e prontos para lhe atender.
              </Text>
            </View>
          </View>
          <View className="space-y-2">
            <Text className="font-archivo_600 text-[#32264D] text-xl">
              Horários disponíveis
            </Text>
            <View className="space-y-2">
              <View className="space-y-2">
                <Text className="text-xs text-[#9C98A6] font-poppins_400">
                  Dia da semana
                </Text>
                <View className="p-4 bg-[#FAFAFC] border-[#E6E6F0] border flex-row justify-between rounded-lg">
                  <Text className="text-[#6A6180] font-poppins_400 text-sm">
                    Segunda-feira
                  </Text>
                  <MaterialIcons name="expand-more" size={20} color="#9C98A6" />
                </View>
              </View>
              <View className="">
                <View className="space-y-2">
                  <Text className="text-xs text-[#9C98A6] font-poppins_400">
                    Das
                  </Text>
                  <View className="p-4 bg-[#FAFAFC] border-[#E6E6F0] border flex-row justify-between rounded-lg">
                    <Text className="text-[#6A6180] font-poppins_400 text-sm">
                      Segunda
                    </Text>
                    <MaterialIcons
                      name="expand-more"
                      size={20}
                      color="#9C98A6"
                    />
                  </View>
                </View>
                <View className="space-y-2">
                  <Text className="text-xs text-[#9C98A6] font-poppins_400">
                    Até
                  </Text>
                  <View className="p-4 bg-[#FAFAFC] border-[#E6E6F0] border flex-row justify-between rounded-lg">
                    <Text className="text-[#6A6180] font-poppins_400 text-sm">
                      Segu
                    </Text>
                    <MaterialIcons
                      name="expand-more"
                      size={20}
                      color="#9C98A6"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
