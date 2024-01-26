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
import { FlatGrid } from "react-native-super-grid";

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
            New Episode Releases
          </Text>
        </View>
        <FlatGrid
          itemDimension={130}
          data={details}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            if (item.id >= 6) {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Link href={`/Anime/${item.id}`}>
                    <View style={{ flex: 1, flexDirection: "row", gap: 15 }}>
                      <Image
                        source={{ uri: item.attributes.posterImage.medium }}
                        width={200}
                        height={300}
                        style={{ padding: 25, borderRadius: 10 }}
                      ></Image>
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
