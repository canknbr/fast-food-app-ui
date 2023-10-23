import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
const FoodCard = ({ food, index }) => {
  const navigation = useNavigation();
  return (
    <Animatable.View
      delay={index * 120}
      animation="slideInRight"
      className="w-56 h-70 my-5 mr-6 p-3 py-5 rounded-3xl"
      style={{
        backgroundColor: "rgba(255,255,255,.2)",
      }}>
      <View className="flex-row justify-center">
        <Image source={food.image} className="h-32 w-32" />
      </View>
      <View className="flex-1 px-3 py-2 space-y-2">
        <Text className="text-white text-xl font-medium tracking-wider">
          {food.name}
        </Text>
        <Text className="text-white">{food.ingredients}</Text>
      </View>
      <View className="flex-row justify-between items-center px-1">
        <Text className="text-2xl font-semibold text-white">${food.price}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("FoodDetail", { ...food })}
          className="p-2 bg-white rounded-full">
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

export default FoodCard;
