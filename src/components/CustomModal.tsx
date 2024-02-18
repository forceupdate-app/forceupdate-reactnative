import React from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';

export interface IButton {
  text: string;
  onPress: () => void;
  isPreferred?: boolean;
  style?: 'default' | 'cancel';
}

export interface IModal {
  message: string;
  title: string;
  buttons: IButton[];
}

const windowWidth = Dimensions.get('window').width;

export const CustomModal: React.FC<IModal> = ({ message, title, buttons }) => {
  return (
    <Modal
      visible={true}
      animationType="fade"
      transparent={true}
      testID="custom-modal"
    >
      <View style={styles.modalBackground}>
        <View style={styles.alertBox}>
          <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.buttonBox}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                title={button.text}
                onPress={button.onPress}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    width: windowWidth * 0.8, // 80% do width do device
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginVertical: 7,
  },
  box: {
    padding: 20,
    paddingBottom: 0,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});
