import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import ModalScreen from "../components/activitiesModal";
import { AntDesign } from "@expo/vector-icons";

const Activities = () => {
  const [activities, setActivities] = useState([
    {
      category: "Daily Routine Suggestions",
      items: [
        { text: "Morning Routine", completed: false },
        { text: "Evening Wind Down", completed: false },
        { text: "Healthy Breakfast", completed: false },
        { text: "Midday Break", completed: false },
        { text: "Hydration Reminder", completed: false },
        { text: "Journal Entry", completed: false },
        { text: "Reflect on the Day", completed: false },
      ],
    },
    {
      category: "Exercise and Physical Activities",
      items: [
        { text: "Cardio Workouts", completed: false },
        { text: "Strength Training", completed: false },
        { text: "Stretching", completed: false },
        { text: "Yoga Session", completed: false },
        { text: "Outdoor Run", completed: false },
        { text: "Cycling", completed: false },
        { text: "Sports Practice", completed: false },
      ],
    },
    {
      category: "Mindfulness and Relaxation",
      items: [
        { text: "Meditation Sessions", completed: false },
        { text: "Breathing Exercises", completed: false },
        { text: "Nature Walks", completed: false },
        { text: "Listening to Calm Music", completed: false },
        { text: "Reading a Book", completed: false },
        { text: "Taking a Bath", completed: false },
        { text: "Aromatherapy", completed: false },
      ],
    },
    {
      category: "Creative Activities",
      items: [
        { text: "Art and Craft", completed: false },
        { text: "Writing Prompts", completed: false },
        { text: "Music and Dance", completed: false },
        { text: "Photography", completed: false },
        { text: "Cooking New Recipes", completed: false },
        { text: "Gardening", completed: false },
        { text: "DIY Projects", completed: false },
      ],
    },
    {
      category: "Social and Community Engagement",
      items: [
        { text: "Connect with Friends", completed: false },
        { text: "Community Events", completed: false },
        { text: "Volunteering Opportunities", completed: false },
        { text: "Family Time", completed: false },
        { text: "Networking Events", completed: false },
        { text: "Social Media Interaction", completed: false },
        { text: "Support Groups", completed: false },
      ],
    },
    {
      category: "Educational Resources",
      items: [
        { text: "Books and Articles", completed: false },
        { text: "Online Courses", completed: false },
        { text: "Podcasts and Videos", completed: false },
        { text: "Webinars and Workshops", completed: false },
        { text: "Language Learning", completed: false },
        { text: "Research Projects", completed: false },
        { text: "Documentaries", completed: false },
      ],
    },
  ]);

  const [modalVisible, setModalVisible] = useState<Number | null>(null);

  const [newItemText, setNewItemText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);

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

  const removeItem = (categoryIndex: any, itemIndex: any) => {
    const newActivities = [...activities];
    newActivities[categoryIndex].items.splice(itemIndex, 1);
    setActivities(newActivities);
  };

  return (
    <ScrollView style={styles.container}>
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
              <TouchableOpacity
                onPress={() => removeItem(categoryIndex, itemIndex)}
              >
                <AntDesign name="delete" size={16} color="red" />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity onPress={() => setModalVisible(categoryIndex)}>
            <Text>+ Add Activity</Text>
            <ModalScreen
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              categoryIndex={categoryIndex}
              section={section.category}
              setNewItemText={setNewItemText}
              newItemText={newItemText}
              addItem={addItem}
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
});

export default Activities;
