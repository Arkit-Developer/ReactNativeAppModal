import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const NewModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.centeredView,
            { backgroundColor: modalVisible ? "black" : "white" },
            { opacity: modalVisible ? 0.8 : 1 },
          ]}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Alert !</Text>
            <View style={styles.content}>
              <Text style={styles.contentText}>This is Alert Message.</Text>
            </View>
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button1, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Text style={styles.border}></Text>
              <Pressable
                style={[styles.button2, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle2}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#ecf0f1",
    borderRadius: 15,
    paddingTop: 15,
    width: "80%",
    marginVertical: 10,
    shadowColor: "grey",
    elevation: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: "grey",
    borderTopWidth: 0.3,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "red",
  },
  button1: {
    padding: 10,
    width: "50%",
  },
  button2: {
    padding: 10,
    width: "50%",
  },
  buttonOpen: {
    backgroundColor: "lightblue",
  },
  textStyle: {
    color: "#4280eb",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  textStyle2: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  content: {
    paddingVertical: 15,
    alignItems: "center",
  },
  contentText: {
    fontSize: 17,
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  border: {
    borderWidth: 0.3,
    borderColor: "grey",
  },
});

export default NewModal;
