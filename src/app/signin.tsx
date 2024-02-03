import { useState } from "react";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import BackgroundAuth from "../assets/bg_auth.svg";

export default function SignIn() {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="bg-[#F0F0F7] flex-1 items-center">
      <StatusBar barStyle={"light-content"} backgroundColor={"#8257E5"} />
      <View className="bg-[#8257E5] h-[40%] w-full justify-center items-center">
        <BackgroundAuth />
        <Text className="absolute text-white font-archivo_700 text-3xl">
          Meu Barbeiro
        </Text>
      </View>
      <View className="max-w-[80%] mx-auto w-full mt-[56px]">
        <View className="items-center flex-row justify-between mb-6">
          <Text className="font-poppins_600 text-[#32264D] text-2xl">
            Fazer login
          </Text>
          <Link href="/signup/stepone">
            <Text className="text-[12px] font-poppins_400 text-[#8257E5]">
              Criar uma conta
            </Text>
          </Link>
        </View>
        <View className="mb-6">
          <TextInput
            placeholder="E-mail"
            className="h-16 bg-white placeholder:font-poppins_400 font-poppins_400 rounded-t-lg px-6 border border-[#E6E6F0] text-[#6A6180]"
          />
          <View>
            <TextInput
              placeholder="Senha"
              secureTextEntry={visiblePassword}
              className="h-16 relative bg-white pr-14 placeholder:font-poppins_400 font-poppins_400 rounded-b-lg pl-6 border-l border-r border-b border-[#E6E6F0] text-[#6A6180]"
            />
            <TouchableOpacity
              onPress={() => {
                setVisiblePassword((prevState) => !prevState);
              }}
              activeOpacity={0.7}
              className="absolute right-4 top-[20px]"
            >
              {visiblePassword ? (
                <Feather name="eye" color="#9C98A6" size={24} />
              ) : (
                <Feather name="eye-off" color="#9C98A6" size={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View className="items-center flex-row justify-between mb-6">
          <TouchableOpacity
            activeOpacity={0.7}
            className="items-center flex-row"
            onPress={() => {
              setRememberMe((prevState) => !prevState);
            }}
          >
            {rememberMe ? (
              <View className="h-6 w-6 rounded-lg bg-green-500 border border-[#E6E6F0] mr-3 items-center justify-center">
                <Feather name="check" color="#fff" size={18} />
              </View>
            ) : (
              <View className="h-6 w-6 rounded-lg bg-white border border-[#E6E6F0] mr-3" />
            )}
            <Text className="text-[12px] text-[#9C98A6] font-poppins_400">
              Lembrar-me
            </Text>
          </TouchableOpacity>
          <Link href="forgotpassword">
            <Text className="text-[12px] font-poppins_400 text-[#9C98A6]">
              Esqueci minha senha
            </Text>
          </Link>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-[#DCDCE5] h-16 rounded-lg items-center justify-center"
        >
          <Text className="text-base text-[#9C98A6] font-archivo_600">
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
