import { useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";

export default function SignUpStepTwo() {
  const { goBack, navigate } = useNavigation();

  return (
    <View className="bg-[#F0F0F7] flex-1 items-center">
      <StatusBar barStyle={"light-content"} backgroundColor={"#F0F0F7"} />
      <View className="max-w-[80%] mx-auto w-full">
        <View className="mt-14 flex-row items-center justify-between mb-24">
          <TouchableOpacity
            onPress={() => goBack()}
            activeOpacity={0.7}
            className="p-4 -left-[12px]"
          >
            <Feather name="arrow-left" size={24} color="#9C98A6" />
          </TouchableOpacity>
          <View className="flex-row space-x-1">
            <View className="w-2 h-2 rounded-full bg-[#C1BCCC]" />
            <View className="w-2 h-2 rounded-full bg-[#8257E5]" />
          </View>
        </View>
        <View className="mb-20">
          <Text className="font-poppins_600 text-[32px] text-[#32264D] mb-4 leading-[42px]">
            Crie sua {"\n"}conta gratuíta
          </Text>
          <Text className="text-[#6A6180] font-poppins_400 text-sm leading-6">
            Basta preencher esses dados {"\n"}e você estará conosco.
          </Text>
        </View>
        <Text className="font-poppins_600 text-2xl text-[#32264D] mb-6">
          02. Email e Senha
        </Text>
        <TextInput
          placeholder="E-mail"
          className="h-16 bg-white placeholder:font-poppins_400 font-poppins_400 rounded-t-lg pl-6 border border-[#E6E6F0] text-[#6A6180]"
        />
        <TextInput
          placeholder="Senha"
          className="h-16 relative bg-white pr-14 placeholder:font-poppins_400 font-poppins_400 rounded-b-lg pl-6 border-l border-r border-b border-[#E6E6F0] text-[#6A6180]"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate("completed")}
          className="bg-[#DCDCE5] mt-6 h-16 rounded-lg items-center justify-center"
        >
          <Text className="text-base text-[#9C98A6] font-archivo_600">
            Concluir cadastro
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
