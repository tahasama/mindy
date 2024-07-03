import Checkbox from "expo-checkbox";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Button,
} from "react-native";
import ModalScreen from "../components/activitiesModal";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as Device from "expo-device";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
// import activity from "../../assets/images/activities/activities.jpg";
import activity from "../../assets/images/activities/activity1.png";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;

      if (!projectId) {
        throw new Error("Project ID not found");
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

const Activities = () => {
  const initialActivities = [
    {
      category: "Daily Routine Suggestions",
      items: [
        { text: "Morning Routine", completed: false },
        { text: "Evening Wind Down", completed: false },
        { text: "Healthy Breakfast", completed: false },
      ],
    },
    {
      category: "Exercise and Physical Activities",
      items: [
        { text: "Cardio Workouts", completed: false },
        { text: "Strength Training", completed: false },
        { text: "Stretching", completed: false },
      ],
    },
    {
      category: "Mindfulness and Relaxation",
      items: [
        { text: "Meditation Sessions", completed: false },
        { text: "Breathing Exercises", completed: false },
        { text: "Nature Walks", completed: false },
      ],
    },
    {
      category: "Creative Activities",
      items: [
        { text: "Art and Craft", completed: false },
        { text: "Writing Prompts", completed: false },
        { text: "Music and Dance", completed: false },
      ],
    },
    {
      category: "Social and Community Engagement",
      items: [
        { text: "Connect with Friends", completed: false },
        { text: "Community Events", completed: false },
        { text: "Volunteering Opportunities", completed: false },
      ],
    },
    {
      category: "Educational Resources",
      items: [
        { text: "Books and Articles", completed: false },
        { text: "Online Courses", completed: false },
        { text: "Podcasts and Videos", completed: false },
      ],
    },
  ];

  const secondaryActivities = [
    {
      category: "Daily Routine Suggestions",
      items: [
        { text: "Midday Break", completed: false },
        { text: "Hydration Reminder", completed: false },
        { text: "Journal Entry", completed: false },
        { text: "Reflect on the Day", completed: false },
      ],
    },
    {
      category: "Exercise and Physical Activities",
      items: [
        { text: "Yoga Session", completed: false },
        { text: "Outdoor Run", completed: false },
        { text: "Cycling", completed: false },
        { text: "Sports Practice", completed: false },
      ],
    },
    {
      category: "Mindfulness and Relaxation",
      items: [
        { text: "Listening to Calm Music", completed: false },
        { text: "Reading a Book", completed: false },
        { text: "Taking a Bath", completed: false },
        { text: "Aromatherapy", completed: false },
      ],
    },
    {
      category: "Creative Activities",
      items: [
        { text: "Photography", completed: false },
        { text: "Cooking New Recipes", completed: false },
        { text: "Gardening", completed: false },
        { text: "DIY Projects", completed: false },
      ],
    },
    {
      category: "Social and Community Engagement",
      items: [
        { text: "Family Time", completed: false },
        { text: "Networking Events", completed: false },
        { text: "Social Media Interaction", completed: false },
        { text: "Support Groups", completed: false },
      ],
    },
    {
      category: "Educational Resources",
      items: [
        { text: "Webinars and Workshops", completed: false },
        { text: "Language Learning", completed: false },
        { text: "Research Projects", completed: false },
        { text: "Documentaries", completed: false },
      ],
    },
  ];

  const [activities, setActivities] = useState(initialActivities);

  const [expoPushToken, setExpoPushToken] = useState("");
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
    []
  );

  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token)
    );

    if (Platform.OS === "android") {
      Notifications.getNotificationChannelsAsync().then((value) =>
        setChannels(value ?? [])
      );
    }
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function schedulePushNotification(currentDate: any) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Activity Reminder",
        body: `📝 Reminder for: ${activities[selectedCategory].items[selectedItem].text}\n  Section ${activities[selectedCategory].category} `,
      },
      trigger: currentDate,
    });
  }

  const [modalVisible, setModalVisible] = useState<Number | null>(null);

  const [newItemText, setNewItemText] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [show, setShow] = useState(false);

  const [date, setDate] = useState(new Date());

  const toggleComplete = (categoryIndex: any, itemIndex: any) => {
    const newActivities = [...activities];
    newActivities[categoryIndex].items[itemIndex].completed =
      !newActivities[categoryIndex].items[itemIndex].completed;
    setActivities(newActivities);
  };

  const addItem = () => {
    Keyboard.dismiss();
    if (newItemText.trim() !== "") {
      const newActivities = [...activities];
      newActivities[selectedCategory].items.push({
        text: newItemText,
        completed: false,
      });
      setActivities(newActivities);
      setNewItemText("");
      setModalVisible(null);
    }
  };

  const addToList = (categoryIndex: any, item: any) => {
    console.log("🚀 ~ addToList ~ item:", item);
    const newActivities = [...activities];
    newActivities[categoryIndex].items.push({
      text: item.text,
      completed: false,
    });
    setActivities(newActivities);
  };

  const removeItem = (categoryIndex: any, itemIndex: any) => {
    const newActivities = [...activities];
    newActivities[categoryIndex].items.splice(itemIndex, 1);
    setActivities(newActivities);
  };

  const showDatePicker = (
    section: any,
    item: any,
    categoryIndex: any,
    itemIndex: any
  ) => {
    setSelectedItem(itemIndex);
    setSelectedCategory(categoryIndex);
    setShow(true);
  };

  const onChange = async (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    if (event.type === "set") {
      await schedulePushNotification(currentDate);
    }
  };

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={activity}
        // placeholder={{ blurhash }}
        contentFit="contain"
        transition={1000}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["#6ab4c1", "#f5f5f5"]}
        style={{ height: 120 }}
      />
      <View style={styles.container}>
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationText}>
            Strengthen your consistency to unleash your self-enhancement
            potential and productivity.
          </Text>
          <Text style={styles.explanationText}>
            6 categories of activities are displayed for 6 days a week.
          </Text>
          <Text style={styles.highlightText}>
            You need to achieve at least 1 activity per category a day to stay
            on track.
          </Text>
        </View>

        {activities.map((section, categoryIndex) => (
          <View key={categoryIndex} style={styles.section}>
            <Text style={styles.category}>{section.category}</Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.item}>
                <Checkbox
                  value={item.completed}
                  onValueChange={() => toggleComplete(categoryIndex, itemIndex)}
                />
                <Text
                  style={[styles.itemText, item.completed && styles.completed]}
                >
                  {item.text}
                </Text>
                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() =>
                      showDatePicker(section, item, categoryIndex, itemIndex)
                    }
                  >
                    <MaterialIcons name="schedule" size={20} color="blue" />
                  </TouchableOpacity>
                  {show &&
                    itemIndex === selectedItem &&
                    categoryIndex === selectedCategory && (
                      <>
                        <Text></Text>
                        <RNDateTimePicker
                          mode="time"
                          value={date}
                          display={"default"}
                          onChange={onChange}
                        />
                      </>
                    )}
                  <TouchableOpacity
                    onPress={() => removeItem(categoryIndex, itemIndex)}
                  >
                    <AntDesign name="delete" size={16} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity
              onPress={() => {
                setModalVisible(categoryIndex),
                  setSelectedCategory(categoryIndex);
              }}
            >
              <Text style={styles.addActivityButton}>+ Add Activity</Text>
              <ModalScreen
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                categoryIndex={categoryIndex}
                section={section.category}
                setNewItemText={setNewItemText}
                newItemText={newItemText}
                addItem={addItem}
                addToList={addToList}
                secondaryActivities={secondaryActivities}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 36,
    backgroundColor: "#f5f5f5",
  },
  section: {
    marginBottom: 24,
  },
  category: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  itemText: {
    marginLeft: 8,
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },

  addItemContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 16,
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  categoryPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  categoryOption: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 4,
  },
  selectedCategory: {
    backgroundColor: "#2196F3",
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#2196F3",
    padding: 14,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  addActivityButton: {
    backgroundColor: "#2196F3",
    padding: 7,
    borderRadius: 8,
    color: "#fff",
    marginTop: 6,
    width: 110,
    elevation: 1,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    // marginBottom: 12,
    // borderRadius: 8,
  },
  explanationContainer: {
    marginBottom: 20,
    marginTop: -160,
    paddingHorizontal: 15,
  },
  explanationText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  highlightText: {
    color: "red",
    fontWeight: "bold",
  },
});

export default Activities;
