import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import profileImg from "../assets/profile.png";

import { OpeningHours } from "./OpeningHours";

interface BarberProps extends TouchableOpacityProps {
  price: number;
  region: string;
  titleBarber: string;
}

export function BarberCard({
  price,
  region,
  titleBarber,
  ...rest
}: BarberProps) {
  return (
    <View className="bg-white divide-y-[1px] divide-[#E6E6F0] max-w-[90%] w-full rounded-lg -mt-16">
      <View className="flex-row items-center m-6">
        <Image source={profileImg} className="rounded-full w-16 h-16" />
        <View className="space-y-1 ml-5">
          <Text className="font-archivo_700 text-[#32264D] text-xl">
            {titleBarber}
          </Text>
          <Text className="font-poppins_400 text-[#6A6180] text-xs">
            Atende em: {region}
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
        <View className="mt-2">
          <OpeningHours open={true} day="Segunda" hours={{ at: 7, to: 12 }} />
          <OpeningHours open={false} day="Terça" hours={{ at: 8, to: 14 }} />
          <OpeningHours open={true} day="Quarta" hours={{ at: 7, to: 12 }} />
          <OpeningHours open={false} day="Quinta" hours={{ at: 8, to: 14 }} />
          <OpeningHours open={true} day="Sexta" hours={{ at: 7, to: 12 }} />
        </View>
      </View>
      <View className="p-6">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="font-poppins_400 text-[#6A6180] text-sm">
            Preço do corte:
          </Text>
          <Text className="font-archivo_700 text-[#8257E5] text-base">
            R$ {price} reais
          </Text>
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity
            {...rest}
            activeOpacity={0.7}
            className="w-14 h-14 bg-[#8257E5] rounded-lg items-center justify-center"
          >
            <MaterialIcons name="favorite-border" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            {...rest}
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
  );
}
