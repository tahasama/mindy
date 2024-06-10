import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import DailyTips from "./DailyTips";
import MoodSummary from "./MoodSummary";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";
import ProgressChart from "./ProgressChart";

const Dashboard = () => {
  return (
    <>
      <Header />
      <MoodSummary />
      <QuickActions />
      <RecentActivities />
      <DailyTips />
      <ProgressChart />
    </>
  );
};

export default Dashboard;
