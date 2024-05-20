import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./recommendation-item.styles";
import { RecommendationItemProps } from "./recommendation-item.interfaces";

export const RecommendationItem = ({ item }: RecommendationItemProps) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.itemImage} />
    <Text style={styles.itemName}>{item.name}</Text>
    <Text style={styles.itemPrice}>{item.price}</Text>
  </View>
);