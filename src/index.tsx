import * as React from 'react';

import { fetchData, type ICheckVersionResponse } from './services/fetchdata';
import ForceUpdateModal from './components/ForceUpdateModal';
import { UpdateModal } from './components/UpdateModal';
import { LoadingComponent } from './components/Loading';
import ErrorComponent from './components/ErrorComponent';

interface IForceUpdate {
  api_key: string;
  language: string;
  platform: 'ANDROID' | 'IOS';
  version: string;
  children: React.ReactNode;
  showAppBackground?: boolean;
  onDismiss?: () => void;
  onForceUpdate?: () => void;
  onUpdate?: () => void;
  onVersionCheck?: () => void;
  onVersionCheckError?: (error: string) => void;
  onVersionCheckSuccess?: (response: ICheckVersionResponse) => void;
  onVersionCheckStart?: () => void;
  onVersionCheckEnd?: () => void;
  onVersionCheckComplete?: () => void;
  onLoadingStart?: () => void;
  onLoadingEnd?: () => void;
}

export const ForceUpdate: React.FC<IForceUpdate> = ({
  api_key,
  language,
  platform,
  version,
  children,
  showAppBackground = true,
  ...props
}: IForceUpdate) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [apiResponse, setApiResponse] =
    React.useState<ICheckVersionResponse | null>(null);

  const {
    onDismiss,
    onForceUpdate,
    onLoadingStart,
    onLoadingEnd,
    onUpdate,
    onVersionCheckSuccess,
    onVersionCheckError,
  } = props;

  React.useEffect(() => {
    setIsLoading(true);

    if (onLoadingStart) {
      onLoadingStart();
    }

    fetchData({
      api_key,
      language,
      platform,
      version,
    })
      .then((response) => {
        setApiResponse(response);

        if (onVersionCheckSuccess) {
          onVersionCheckSuccess(response);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);

        if (onVersionCheckError) {
          onVersionCheckError(error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);

        if (onLoadingEnd) {
          onLoadingEnd();
        }
      });
  }, [
    api_key,
    language,
    onLoadingEnd,
    onLoadingStart,
    onVersionCheckError,
    onVersionCheckSuccess,
    platform,
    version,
  ]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (errorMessage) {
    return <ErrorComponent errorMessage={errorMessage} />;
  }

  if (apiResponse?.force_update) {
    return (
      <ForceUpdateModal
        message={apiResponse.message}
        store_url={apiResponse.store_url}
        title={apiResponse.title}
        update_button_text={apiResponse.update_button_text}
        onForceUpdate={onForceUpdate ? onForceUpdate : null}
        showAppBackground={showAppBackground}
      >
        {children}
      </ForceUpdateModal>
    );
  }

  if (apiResponse?.needs_update) {
    return (
      <UpdateModal
        message={apiResponse.message}
        store_url={apiResponse.store_url}
        title={apiResponse.title}
        update_button_text={apiResponse.update_button_text}
        dismiss_button_text={apiResponse.dismiss_button_text}
        onUpdate={onUpdate ? onUpdate : null}
        onDismiss={onDismiss ? onDismiss : null}
        showAppBackground={showAppBackground}
      >
        {children}
      </UpdateModal>
    );
  }

  return <>{children}</>;
};
