import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";

interface OpeningProps {
  day: string;
  open: boolean;
  hours: {
    at: number;
    to: number;
  };
}

export function OpeningTimesInTheWeek({ day, hours, open }: OpeningProps) {
  return (
    <View
      className={clsx(
        "relative h-10 mt-2 bg-[#FAFAFC] rounded-lg border border-[#E6E6F0] items-center justify-between px-4 flex-row",
        { ["opacity-40"]: open === false }
      )}
    >
      <Text className="font-archivo_700 text-base text-[#6A6180]">{day}</Text>
      <View className="absolute left-1/2 ml-7 -translate-x-1/2">
        <MaterialIcons name="double-arrow" color="#E6E6F0" size={20} />
      </View>
      <Text className="font-archivo_700 text-base text-[#6A6180]">
        {open === true ? `${hours.at}h - ${hours.to}h` : "-"}
      </Text>
    </View>
  );
}
