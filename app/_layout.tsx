import { View, Text } from "@/components/Themed";
import Constants from "expo-constants";
import { Slot, Stack } from "expo-router";
import { HomeImage } from "../Icons/HomeImage";
import { CalendarImage } from "@/Icons/CalendarImage";
import { ListImage } from "@/Icons/ListImage";
import { DownloadImage } from "@/Icons/DownloadImage";
import { ProfilePicture } from "@/Icons/ProfileImage";
import { Link } from "expo-router";
import { IconImage } from "@/Icons/IconImage";
import { SearchImage } from "@/Icons/SearchImage";
import { NotificaitonImage } from "@/Icons/NotificationImage";

export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: "center",
      }}
    >
      <Slot />
    </View>
  );
}
