import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Header } from "../components/Header";

import profileImg from "../assets/profile.png";

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
      <View className="bg-white divide-y-[1px] divide-[#E6E6F0] max-w-[90%] w-full rounded-lg -mt-16">
        <View className="flex-row items-center m-6">
          <Image source={profileImg} className="rounded-full w-16 h-16" />
          <View className="space-y-1 ml-5">
            <Text className="font-archivo_700 text-[#32264D] text-xl">
              Velocista do corte
            </Text>
            <Text className="font-poppins_400 text-[#6A6180] text-xs">
              Atende em: Domicílio
            </Text>
          </View>
        </View>
        <View className="p-6">
          <View className="flex-row justify-between mx-4">
            <Text className="font-poppins_400 text-[#9C98A6] text-xs">Dia</Text>
            <Text className="font-poppins_400 text-[#9C98A6] text-xs">
              Horário
            </Text>
          </View>
          <View className="space-y-2 mt-4">
            <View className="relative h-10 bg-[#FAFAFC] rounded-lg border border-[#E6E6F0] items-center justify-between px-4 flex-row">
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                Segunda
              </Text>
              <View className="absolute left-1/2 -translate-x-1/2">
                <MaterialIcons name="double-arrow" color="#E6E6F0" size={20} />
              </View>
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                8h - 18h
              </Text>
            </View>
            <View className="relative h-10 bg-[#FAFAFC] rounded-lg border opacity-40 border-[#E6E6F0] items-center justify-between px-4 flex-row">
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                Terça
              </Text>
              <View className="absolute left-1/2 -translate-x-1/2">
                <MaterialIcons name="double-arrow" color="#E6E6F0" size={20} />
              </View>
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                -
              </Text>
            </View>
            <View className="relative h-10 bg-[#FAFAFC] rounded-lg border border-[#E6E6F0] items-center justify-between px-4 flex-row">
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                Quarta
              </Text>
              <View className="absolute left-1/2 -translate-x-1/2">
                <MaterialIcons name="double-arrow" color="#E6E6F0" size={20} />
              </View>
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                8h - 18h
              </Text>
            </View>
            <View className="relative h-10 bg-[#FAFAFC] rounded-lg border opacity-40 border-[#E6E6F0] items-center justify-between px-4 flex-row">
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                Quinta
              </Text>
              <View className="absolute left-1/2 -translate-x-1/2">
                <MaterialIcons name="double-arrow" color="#E6E6F0" size={20} />
              </View>
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                -
              </Text>
            </View>
            <View className="relative h-10 bg-[#FAFAFC] rounded-lg border border-[#E6E6F0] items-center justify-between px-4 flex-row">
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                Sexta
              </Text>
              <View className="absolute left-1/2 -translate-x-1/2">
                <MaterialIcons name="double-arrow" color="#E6E6F0" size={20} />
              </View>
              <Text className="font-archivo_700 text-base text-[#6A6180]">
                8h - 18h
              </Text>
            </View>
          </View>
        </View>
        <View className="p-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="font-poppins_400 text-[#6A6180] text-sm">
              Preço do corte:
            </Text>
            <Text className="font-archivo_700 text-[#8257E5] text-base">
              R$ 15,00 reais
            </Text>
          </View>
          <View className="flex-row gap-2">
            <TouchableOpacity
              activeOpacity={0.7}
              className="w-14 h-14 bg-[#8257E5] rounded-lg items-center justify-center"
            >
              <MaterialIcons name="favorite-border" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-[#04D361] flex-1 rounded-lg items-center justify-center flex-row space-x-2"
            >
              <MaterialIcons name="query-builder" size={24} color="#fff" />
              <Text className="font-archivo_600 text-base text-white">
                Agendar horário
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
