import React, { useCallback } from 'react';
import { Alert, Linking } from 'react-native';

interface IUpdateModal {
  message: string;
  store_url: string;
  title: string;
  update_button_text: string;
  dismiss_button_text: string;
  onUpdate: (() => void) | null;
  onDismiss: (() => void) | null;
}

export const UpdateModal: React.FC<IUpdateModal> = ({
  message,
  store_url,
  title,
  update_button_text,
  dismiss_button_text,
  onDismiss,
  onUpdate,
}) => {
  const handleUpdate = useCallback(() => {
    onUpdate && onUpdate();
    Linking.openURL(store_url);
  }, [onUpdate, store_url]);

  const closeModal = useCallback(() => {
    onDismiss && onDismiss();
  }, [onDismiss]);

  React.useEffect(() => {
    Alert.alert(
      title,
      message,
      [
        {
          text: dismiss_button_text,
          onPress: handleUpdate,
          isPreferred: false,
          style: 'cancel',
        },
        {
          text: update_button_text,
          onPress: closeModal,
          isPreferred: true,
          style: 'default',
        },
      ],
      { cancelable: true, onDismiss: closeModal }
    );
  }, [
    closeModal,
    dismiss_button_text,
    handleUpdate,
    message,
    title,
    update_button_text,
  ]);

  return null;
};

export default UpdateModal;
