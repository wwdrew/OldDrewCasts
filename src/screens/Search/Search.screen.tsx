import React from "react"
import {
  Platform,
  PlatformColor,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native"
import { useTranslation } from "react-i18next"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StackNavigationProp } from "@react-navigation/stack"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SearchStackParams } from "../../navigation/search.stack"

type SearchScreenNavigationProp = StackNavigationProp<
  SearchStackParams,
  "Search"
>

type Props = {
  navigation: SearchScreenNavigationProp
}

const SearchScreen = ({}: Props) => {
  const { t } = useTranslation()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{t("Search")}</Text>
      </View>
    </SafeAreaView>
  )
}

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
    justifyContent: "flex-start",
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

export default SearchScreen
