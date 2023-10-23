import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
const FoodDetailScreen = ({ route }) => {
  const [count, setCount] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const navigation = useNavigation();
  const handleCount = (cntType) => {
    if (cntType === "min" && count > 0) {
      setCount((prev) => prev - 1);
    }
    if (cntType === "plus" && count < 10) {
      setCount((prev) => prev + 1);
    }
  };
  let food = route.params;
  console.log(food);
  return (
    <View className="flex-1 bg-white">
      <Image
        blurRadius={40}
        source={require("../../assets/images/background.png")}
        className="w-full h-96 absolute"
        style={{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
      <SafeAreaView>
        <View className="mx-4 mt-2 flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white rounded-full p-2">
            <AntDesign name="arrowleft" size={24} color={"black"} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full p-2">
            <Entypo name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex items-center justify-center">
          <Image source={food.image} className="h-48 w-48" />
          <Text className="text-3xl text-white">{food.name}</Text>
        </View>
        <View className="flex-row items-center justify-center mt-6">
          <View className="flex-row items-center justify-center space-x-4 bg-gray-200 rounded-3xl">
            <TouchableOpacity
              onPress={() => handleCount("min")}
              className="bg-white p-3 border-2 border-gray-200 rounded-2xl">
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-2xl">{count}</Text>
            <TouchableOpacity
              onPress={() => handleCount("plus")}
              className="bg-white p-3 border-2 border-gray-200 rounded-2xl">
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center mx-4 h-20 overflow-hidden">
          <Animatable.View
            delay={180}
            animation="slideInDown"
            className="flex items-center space-y-2">
            <Image
              source={require("../../assets/icons/calories.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">130 cal</Text>
          </Animatable.View>
          <Animatable.View
            delay={280}
            animation="slideInDown"
            className="flex items-center space-y-2">
            <Image
              source={require("../../assets/icons/clock.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">15-20 min</Text>
          </Animatable.View>
          <Animatable.View
            delay={380}
            animation="slideInDown"
            className="flex items-center space-y-2">
            <Image
              source={require("../../assets/icons/chat.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">4.6 vote</Text>
          </Animatable.View>
          <Animatable.View
            delay={480}
            animation="slideInDown"
            className="flex items-center space-y-2">
            <Image
              source={require("../../assets/icons/weight.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">350 g</Text>
          </Animatable.View>
        </View>
        <View className="mx-4 mt-6 space-y-3 h-60">
          <Animatable.Text
            animation="slideInUp"
            className="text-3xl font-semibold text-gray-800">
            Description
          </Animatable.Text>
          <Animatable.Text
            delay={100}
            animation="slideInUp"
            className="text-gray-600 tracking-wider">
            {food.desc}
          </Animatable.Text>
        </View>
        {/* add to cart button */}
        <View className="mx-4 flex-row justify-between items-center">
          <Animatable.Text
            delay={100}
            animation="slideInLeft"
            className="text-3xl font-semibold text-gray-800">
            ${food.price}
          </Animatable.Text>
          <Animatable.View delay={100} animation="slideInRight">
            <TouchableOpacity className="bg-gray-800 p-4 px-14 rounded-2xl">
              <Text className="text-white text-xl font-semibold">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FoodDetailScreen;
