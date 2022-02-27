import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import Button from '../../Button';
import styles from './ContentInputModal.style';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      // text componentinde herhangi bir şey yoksa/boşsa fonksiyonu gönderme
      return;
    }

    onSend(text); // varsa text componentini gönder
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input_text}
            placeholder="Darla hadi milleti..."
            onChangeText={setText}
            placeholderTextColor="#a4a4a4"
            multiline //yazıların satır bitince aşağıya inmesini sağlar.
          />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
