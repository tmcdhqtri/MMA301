import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toggle from "./Toggle";

export default function LayoutExample() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");
  const layoutStyle = { flexDirection, justifyContent, alignItems };
  const primaryAxis = flexDirection === "row" ? "Horizontal" : "Vertical";
  const secondaryAxis = flexDirection === "row" ? "Vertical" : "Horizontal";

  return (
    <View style={styles.container}>
      <Toggle
        label={"Primary axis (flexDirection)"}
        options={flexDirectionOptions}
        value={flexDirection}
        onChange={(option) => setFlexDirection(option)}
      />
      <Toggle
        label={`${primaryAxis} distribution (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => setJustifyContent(option)}
      />
      <Toggle
        label={`${secondaryAxis} alignment (alignItems)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => setAlignItems(option)}
      />
      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
}

const flexDirectionOptions = ["row", "column"];
const justifyContentOptions = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
];
const alignItemsOptions = ["flex-start", "flex-end", "center", "stretch"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  box: {
    padding: 25,
    backgroundColor: "#3B6CD4",
    margin: 5,
  },
});
