import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FoodCard from "../components/FoodCard";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { categories, foodItems } from "../constants";
import * as Animatable from "react-native-animatable";
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Burger");
  return (
    <View className="flex-1 relative" style={{}}>
      <Image
        source={require("../../assets/images/background.png")}
        blurRadius={40}
        className="absolute w-full h-full"
      />
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center justify-between mx-4">
          <View className="bg-white shadow-md rounded-full p-3">
            <Ionicons name="ios-reorder-three-sharp" size={24} color="black" />
          </View>
          <View
            className="rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,.6)",
              padding: 4,
            }}>
            <Image
              className="w-12 h-12 rounded-full "
              source={require("../../assets//images/can.jpeg")}
            />
          </View>
        </View>
        <View className="my-12 space-y-2">
          <Text className="mx-4 text-5xl font-medium text-gray-800">
            Fast And
          </Text>
          <Text className="mx-4 text-5xl font-medium text-gray-800">
            <Text className="font-extrabold">Delicious </Text>Food
          </Text>
        </View>
        <View className="flex-row justify-between items-center space-x-3 mx-4">
          <View className="flex-1 flex-row p-4 bg-white rounded-2xl items-center">
            <Entypo name="magnifying-glass" size={30} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-lg text-gray-800"
              placeholder="Search"
            />
          </View>
          <View className="bg-white p-4 rounded-2xl">
            <Ionicons name="ios-filter" size={30} color="black" />
          </View>
        </View>
        <ScrollView
          className="mt-6 pt-6 max-h-20"
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {categories.map((cat, index) => {
            let isActive = cat === activeCategory;
            let activeClass = isActive ? "font-extrabold" : "";
            return (
              <Animatable.View
                key={index}
                delay={index * 120}
                animation="slideInDown">
                <TouchableOpacity
                  onPress={() => setActiveCategory(cat)}
                  className="mr-6">
                  <Text
                    className={`text-white text-base font-medium tracking-widest" ${activeClass}`}>
                    {cat}
                  </Text>
                  {isActive ? (
                    <View className="flex justify-center">
                      <Image
                        source={require("../../assets/images/line.png")}
                        className="h-4 w-5"
                      />
                    </View>
                  ) : null}
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </ScrollView>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {foodItems.map((item, index) => (
            <FoodCard food={item} index={index} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
