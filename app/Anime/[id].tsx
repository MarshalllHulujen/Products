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
import { useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

export default function Page() {
  const { id } = useGlobalSearchParams();
  const [details, setDetails] = useState<any>();

  const dataRetreiver = async () => {
    try {
      const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
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
    <ScrollView style={{ gap: 25 }}>
      <ImageBackground
        source={{
          uri: details.attributes.posterImage.original,
        }}
        style={{ height: 500, backgroundColor: "transparent" }}
      >
        <Link href={"/"} style={{ fontSize: 50, color: "white" }}>
          ←
        </Link>
      </ImageBackground>
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 30,
          paddingTop: 25,
          padding: 10,
        }}
      >
        {details.attributes.titles.en}
      </Text>
      <View
        style={{ flexDirection: "row", gap: 50, paddingTop: 25, padding: 10 }}
      >
        <Link
          href="https://www.youtube.com/watch?v=AQx_KMoCgJU"
          style={{
            color: "white",
            backgroundColor: "lime",
            flex: 1,
            height: 50,
            fontWeight: "500",
            borderRadius: 10,
            paddingTop: 12.5,
            textAlign: "center",
          }}
        >
          ▶ Play
        </Link>
        <Link
          href="/Download/"
          style={{
            color: "lime",
            flex: 1,
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
            paddingTop: 10,
            flexDirection: "row",
            alignItems: "baseline",
            borderWidth: 1,
            borderColor: "lime",
            borderStyle: "solid",
            borderRadius: 20,
          }}
        >
          <Text> Download</Text>
        </Link>
      </View>
      <Text style={{ padding: 10, paddingTop: 25, fontSize: 20 }}>
        Genre: Action, Adventure, Dark Fantasy
      </Text>
      <Text style={{ padding: 25 }}>{details.attributes.description}</Text>
    </ScrollView>
  );
}
