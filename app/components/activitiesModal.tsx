import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ModalScreen = ({
  modalVisible,
  setModalVisible,
  categoryIndex,
  section,
  setNewItemText,
  newItemText,
  addItem,
}: any) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible === categoryIndex}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AntDesign
              name="closecircleo"
              size={28}
              color="grey"
              onPress={() => setModalVisible(null)}
              style={styles.close}
            />
            <Text style={styles.modalText}>Add Activity for {section}</Text>
            <TextInput
              style={styles.input}
              placeholder="New Activity"
              value={newItemText}
              onChangeText={setNewItemText}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonAdd]}
              onPress={() => addItem()}
            >
              <Text style={styles.textStyle}>Add to list</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    right: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginVertical: 15,
    textAlign: "center",
  },
  close: {
    alignSelf: "flex-end",
    zIndex: 1,
  },

  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  buttonAdd: {
    backgroundColor: "#090943",
    // width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
