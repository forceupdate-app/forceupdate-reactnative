import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import { CustomModal } from './CustomModal';

export interface IForceUpdateModal {
  message: string;
  store_url: string;
  title: string;
  update_button_text: string;
  onForceUpdate: (() => void) | null;
}

export const ForceUpdateModal: React.FC<IForceUpdateModal> = ({
  message,
  title,
  update_button_text,
  store_url,
  onForceUpdate,
}) => {
  const handleUpdate = useCallback(() => {
    Linking.openURL(store_url);
    onForceUpdate && onForceUpdate();
  }, [onForceUpdate, store_url]);

  return (
    <CustomModal
      message={message}
      title={title}
      buttons={[
        {
          onPress: handleUpdate,
          text: update_button_text,
          isPreferred: true,
          style: 'default',
        },
      ]}
    />
  );
};

export default ForceUpdateModal;
