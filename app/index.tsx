import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";
import { Image } from "react-native";
import { IconImage } from "@/Icons/IconImage";

const Index = () => {
  const [details, setDetails] = useState<any[]>([]);

  const dataRetreiver = async () => {
    try {
      const response = await fetch("https://kitsu.io/api/edge/anime");
      const json = await response.json();
      setDetails(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataRetreiver();
  }, []);

  return (
    <ScrollView style={{ gap: 25 }}>
      <ImageBackground
        source={{
          uri: "https://culturedvultures.com/wp-content/uploads/2022/08/Jojos-Bizarre-Adventyre.jpg",
        }}
        style={{ height: 500 }}
      >
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            JoJo's Bizarre Adventure
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            Adventure, Action, Supernatural
          </Text>
          <Link
            href="https://www.youtube.com/watch?v=AQx_KMoCgJU"
            style={{
              color: "white",
              backgroundColor: "green",
              width: 100,
              height: 50,
              padding: 15,
              fontWeight: "bold",
              borderRadius: 10,
            }}
          >
            ▶️ Play
          </Link>
        </View>
      </ImageBackground>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Top Hits Anime</Text>
      <FlatList
        horizontal
        data={details}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (item.id <= 5) {
            return (
              <TouchableOpacity onPress={() => {}}>
                <View style={{ padding: 10 }}>
                  <Image
                    source={{ uri: item.attributes.posterImage.medium }}
                    width={200}
                    height={300}
                    style={{ padding: 10, borderRadius: 10 }}
                  />
                </View>
              </TouchableOpacity>
            );
          }
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        New Episode Releases
      </Text>
      <FlatList
        horizontal
        data={details}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (item.id >= 6) {
            return (
              <TouchableOpacity onPress={() => {}}>
                <View style={{ padding: 10 }}>
                  <Image
                    source={{ uri: item.attributes.posterImage.medium }}
                    width={200}
                    height={300}
                    style={{ padding: 10, borderRadius: 10 }}
                  />
                </View>
              </TouchableOpacity>
            );
          }
        }}
      />
    </ScrollView>
  );
};

export default Index;
