import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const ProgressChart = () => {
  // Dummy data for the chart
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [6, 7, 8, 9, 10, 8, 7],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Summary</Text>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 32} // width of the chart
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#6200ea",
          backgroundGradientTo: "#6200ea",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#6200ea",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
    marginBottom: 8,
  },
});

export default ProgressChart;
