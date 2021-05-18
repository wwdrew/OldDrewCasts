import React from "react"
// import { useTranslation } from "react-i18next"
import {
  Platform,
  PlatformColor,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StackNavigationProp } from "@react-navigation/stack"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ListenNowStackParams } from "../../navigation/listennow.stack"

type PodcastScreenNavigationProp = StackNavigationProp<
  ListenNowStackParams,
  "ListenNow"
>

type Props = {
  navigation: PodcastScreenNavigationProp
}

const PodcastDetailScreen = ({}: Props) => {
  // const { t } = useTranslation()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Podcast Detail</Text>
      </View>
    </SafeAreaView>
  )
}

export default PodcastDetailScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor("systemBackground")
      },
      android: {
        backgroundColor: PlatformColor("@android:color/background_dark")
      }
    })
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    ...Platform.select({
      ios: {
        color: PlatformColor("label")
      },
      android: { color: PlatformColor("@android:color/primary_text_dark") }
    })
  }
})
