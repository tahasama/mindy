import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ModalAssessment = ({ modalVisible, setModalVisible, children }: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.subModalView}>
          <AntDesign
            name="closecircleo"
            size={28}
            color="grey"
            onPress={() => setModalVisible(false)}
            style={styles.close}
          />
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  subModalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  close: {
    alignSelf: "flex-end",
    marginTop: 50,
    marginRight: 10,
  },
});

export default ModalAssessment;
