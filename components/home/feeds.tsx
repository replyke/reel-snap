import { Text, View } from "react-native";
import { FeedProvider, FeedSortByOptions, UserLean } from "@replyke/expo";
import Feed from "./Feed";

export const feedTitles = ["Following", "Trending", "Fresh"];
// Define your feeds
export const FEEDS = (user: UserLean | null | undefined) => [
  {
    component: user ? (
      <FeedProvider followedOnly={true}>
        <Feed
          listEmptyComponent={
            <View
              className="flex-1"
              style={{
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <Text className="text-center text-xl font-medium text-gray-400">
                You are not following anyone
              </Text>
              <Text className="text-center text-lg text-gray-400 mt-2">
                Get out there and find people you like
              </Text>
            </View>
          }
        />
      </FeedProvider>
    ) : (
      <View
        className="flex-1"
        style={{
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Text className="text-center text-xl font-medium text-gray-400">
          You are logged out
        </Text>
        <Text className="text-center text-lg text-gray-400 mt-2">
          Create an account and start following some people!
        </Text>
      </View>
    ),
  },
  { providerProps: { sortBy: "hot" as FeedSortByOptions } },
  { providerProps: { sortBy: "new" as FeedSortByOptions } },
];
