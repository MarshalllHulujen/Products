import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Page() {
  const [detail, setDetail] = useState<any[]>([]);
  const { id } = useGlobalSearchParams();
  const [basket, setBasket] = useState<string[]>([]);

  const dataRetreiver = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await res.json();
      setDetail(json.products);
      console.log(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("basket").then((res) => {
      if (res) {
        console.log("res:", res);
        setBasket(JSON.parse(res));
      }
    });
    dataRetreiver();
  }, []);

  useEffect(() => {
    const stringValue = JSON.stringify(basket);
    AsyncStorage.setItem("basket", stringValue);
  }, [basket]);

  const isSaved = basket.includes(id + "");

  const toggleBasket = async () => {
    if (!isSaved) {
      setBasket([...basket, id + ""]);
      return;
    }
    const newBasket = [...basket];
    const index = newBasket.findIndex((unitId) => unitId === id + "");
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"../"}>Go back</Link>
      <Text>Product detail page {}</Text>
      <Text>Product id is: {id}</Text>
      <Button
        onPress={toggleBasket}
        title={isSaved ? "Сагсалсан" : "Сагслах"}
      />
    </View>
  );
}
