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
import { HomeImage } from "@/Icons/HomeImage";
import { CalendarImage } from "@/Icons/CalendarImage";
import { ListImage } from "@/Icons/ListImage";
import { DownloadImage } from "@/Icons/DownloadImage";
import { ProfilePicture } from "@/Icons/ProfileImage";
import LottieView from "lottie-react-native";

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

  const Tabs = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          paddingBottom: 75,
        }}
      >
        <Link href="/">
          <HomeImage />
        </Link>
        <Link href="/">
          <CalendarImage />
        </Link>
        <Link href="/">
          <ListImage />
        </Link>
        <Link href="/">
          <DownloadImage />
        </Link>
        <Link href="/">
          <ProfilePicture />
        </Link>
      </View>
    );
  };

  return (
    <View>
      <ScrollView style={{ gap: 25 }}>
        <ImageBackground
          source={{
            uri: "https://culturedvultures.com/wp-content/uploads/2022/08/Jojos-Bizarre-Adventyre.jpg",
          }}
          style={{ height: 500, backgroundColor: "transparent" }}
        >
          <View style={{ padding: 23, paddingTop: 250 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
              JoJo's Bizarre Adventure
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              Adventure, Action, Supernatural
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Link
                href="https://www.youtube.com/watch?v=AQx_KMoCgJU"
                style={{
                  color: "white",
                  backgroundColor: "lime",
                  width: 100,
                  height: 50,
                  padding: 15,
                  fontWeight: "bold",
                  borderRadius: 10,
                }}
              >
                ▶ Play
              </Link>
              <Link
                href="/"
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  paddingTop: 15,
                }}
              >
                + My List
              </Link>
            </View>
          </View>
        </ImageBackground>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 25,
            }}
          >
            Top Hits Anime
          </Text>
          <Link
            href={"/HitAnime/"}
            style={{
              color: "lime",
              fontSize: 15,
              fontWeight: "bold",
              padding: 20,
              paddingTop: 30,
            }}
          >
            See all
          </Link>
        </View>
        <FlatList
          horizontal
          data={details}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            if (item.id <= 5) {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Link href={`/Anime/${item.id}`}>
                    <View style={{ padding: 25 }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 25,
            }}
          >
            New Episode Releases
          </Text>
          <Link
            href={"/Episodes/"}
            style={{
              color: "lime",
              fontSize: 15,
              fontWeight: "bold",
              padding: 20,
              paddingTop: 30,
            }}
          >
            See all
          </Link>
        </View>
        <FlatList
          horizontal
          data={details}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            if (item.id >= 6) {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Link href={`/Anime/${item.id}`}>
                    <View style={{ padding: 25 }}>
                      <Image
                        source={{ uri: item.attributes.posterImage.medium }}
                        width={200}
                        height={300}
                        style={{ padding: 25, borderRadius: 10 }}
                      />
                    </View>
                  </Link>
                </TouchableOpacity>
              );
            }
          }}
        />
      </ScrollView>
      <Tabs />
    </View>
  );
};

export default Index;
