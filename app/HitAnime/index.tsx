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
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Image } from "react-native";

export default function Page() {
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

  if (!details)
    return (
      <View style={{ paddingLeft: 150, width: 200, height: 200 }}>
        <LottieView
          source={require("@/assets/Animation - 1706263229428.json")}
          style={{ width: 100, height: 100 }}
          autoPlay
        />
      </View>
    );

  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Link href={"/"} style={{ fontSize: 50 }}>
            ←
          </Link>
          <Text style={{ paddingTop: 35, fontSize: 20, fontWeight: "bold" }}>
            Top Hits Anime
          </Text>
        </View>
        <FlatList
          data={details}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            if (item.id <= 5) {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Link href={`/Anime/${item.id}`}>
                    <View
                      style={{ padding: 25, flexDirection: "row", gap: 15 }}
                    >
                      <Image
                        source={{ uri: item.attributes.posterImage.medium }}
                        width={200}
                        height={300}
                        style={{ padding: 25, borderRadius: 10 }}
                      ></Image>
                      <View style={{ gap: 20 }}>
                        <Text
                          style={{
                            width: 100,
                            fontSize: 20,
                            fontWeight: "bold",
                          }}
                        >
                          {item.attributes.titles.en}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>
                          {item.attributes.startDate}
                        </Text>
                        <Text
                          style={{
                            width: 100,
                            fontSize: 15,
                            fontWeight: "400",
                          }}
                        >
                          Genre : Action, Adventure
                        </Text>
                      </View>
                    </View>
                  </Link>
                </TouchableOpacity>
              );
            }
          }}
        />
      </ScrollView>
    </View>
  );
}
