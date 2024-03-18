import React, { useCallback } from 'react';
import { Alert, Linking } from 'react-native';
import { AppBackgroundView } from './AppBackgroundView';

interface IUpdateModal {
  message: string;
  store_url: string;
  title: string;
  update_button_text: string;
  dismiss_button_text: string;
  onUpdate: (() => void) | null;
  onDismiss: (() => void) | null;
  showAppBackground?: boolean;
  children: React.ReactNode;
}

export const UpdateModal: React.FC<IUpdateModal> = ({
  message,
  store_url,
  title,
  update_button_text,
  dismiss_button_text,
  onDismiss,
  onUpdate,
  showAppBackground = true,
  children,
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
          onPress: closeModal,
          isPreferred: false,
          style: 'cancel',
        },
        {
          text: update_button_text,
          onPress: handleUpdate,
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

  if (showAppBackground) {
    return <AppBackgroundView>{children}</AppBackgroundView>;
  }

  return null;
};

export default UpdateModal;
