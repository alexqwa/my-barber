import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AppIntroSlider from "react-native-app-intro-slider";

export default function Authentication() {
  const { height, width } = Dimensions.get("window");

  const slides = [
    {
      id: 1,
      title: "Crie sua\nconta gratuíta",
      subtitle: "Basta preencher esses dados\ne você estará conosco.",
      header: "01.  Quem é você?",
    },
    {
      id: 2,
      header: "02.  Email e Senha",
    },
  ];

  return (
    <View className="bg-[#F0F0F7] flex-1 items-center">
      <View className="mt-14 flex-row items-center justify-between max-w-[80%] w-full mx-auto">
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="#9C98A6" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-2">
          <View className="h-2 w-2 bg-purple-500 rounded-full" />
          <View className="h-2 w-2 bg-[#C1BCCC] rounded-full" />
        </View>
      </View>
      <AppIntroSlider
        data={slides}
        showNextButton={false}
        showDoneButton={false}
        activeDotStyle={{
          backgroundColor: "rgb(130, 87, 229)",
        }}
        dotStyle={{ backgroundColor: "rgb(193, 188, 204)" }}
        renderItem={({ item }) => {
          return (
            <View className="max-w-[80%] mx-auto w-full mt-14">
              <Text className="font-poppins_600 text-[32px] leading-[42px] text-[#32264D] mb-4">
                {item.title}
              </Text>
              <Text className="font-poppins_400 text-sm leading-6 text-[#6A6180]">
                {item.subtitle}
              </Text>
              <Text className="font-poppins_600 text-2xl text-[#32264D] mt-[130px] mb-6">
                {item.header}
              </Text>
              <TextInput
                placeholder="Nome"
                className="h-16 bg-white placeholder:font-poppins_400 font-poppins_400 rounded-t-lg pl-6 border border-[#E6E6F0] text-[#6A6180]"
              />
              <TextInput
                placeholder="Sobrenome"
                className="h-16 relative bg-white pr-14 placeholder:font-poppins_400 font-poppins_400 rounded-b-lg pl-6 border-l border-r border-b border-[#E6E6F0] text-[#6A6180]"
              />
            </View>
          );
        }}
      />
    </View>
  );
}
