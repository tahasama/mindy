import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecentActivities = () => {
  const activities = [
    "Logged mood: Happy",
    "Completed assessment: Stress Level",
    "Read article: Benefits of Meditation",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Activities</Text>
      {activities.map((activity, index) => (
        <Text key={index} style={styles.activity}>
          {activity}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activity: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default RecentActivities;
