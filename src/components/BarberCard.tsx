import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import profileImg from "../assets/profile.png";

import { OpeningTimesInTheWeek } from "./OpeningTimesInTheWeek";

interface BarberProps extends TouchableOpacityProps {
  rating: number;
  titleBarber: string;
}

export function BarberCard({ rating, titleBarber, ...rest }: BarberProps) {
  return (
    <View className="bg-white divide-y-[1px] divide-[#E6E6F0] max-w-[90%] w-full rounded-lg mb-5">
      <View className="flex-row items-center m-6">
        <Image source={profileImg} className="rounded-full w-16 h-16" />
        <View className="flex-col space-y-1 ml-5">
          <Text className="font-archivo_700 text-[#32264D] text-xl">
            {titleBarber}
          </Text>
          <View className="w-16 h-6 rounded-full border border-[#E6E6F0] flex-row items-center justify-between px-2">
            <MaterialIcons name="star-rate" size={16} color="#8257E5" />
            <Text className="font-archivo_700 text-[#8257E5]">{rating}</Text>
          </View>
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
          <OpeningTimesInTheWeek
            open={true}
            day="Segunda-feira"
            hours={{ at: 7, to: 18 }}
          />
          <OpeningTimesInTheWeek
            open={false}
            day="Terça-feira"
            hours={{ at: 7, to: 18 }}
          />
          <OpeningTimesInTheWeek
            open={true}
            day="Quarta-feira"
            hours={{ at: 7, to: 18 }}
          />
          <OpeningTimesInTheWeek
            open={false}
            day="Quinta-feira"
            hours={{ at: 7, to: 18 }}
          />
          <OpeningTimesInTheWeek
            open={true}
            day="Sexta-feira"
            hours={{ at: 7, to: 18 }}
          />
        </View>
      </View>
      <View className="p-6">
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
            onPress={() => router.push("scheduletime")}
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
