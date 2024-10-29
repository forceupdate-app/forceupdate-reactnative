import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { fetchData } from '../services/fetchdata';
import { ForceUpdate } from '../index';
import { Text } from 'react-native';

const TIMEOUT = 20000;

jest.mock('../services/fetchdata', () => ({
  fetchData: jest.fn(),
}));

describe('ForceUpdate', () => {
  const mockOnLoadingStart = jest.fn();
  const mockOnLoadingEnd = jest.fn();
  const mockOnVersionCheckSuccess = jest.fn();
  const mockOnVersionCheckError = jest.fn();
  const mockOnForceUpdate = jest.fn();
  const mockOnUpdate = jest.fn();
  const mockOnDismiss = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.setTimeout(60000);
  });

  it(
    'should render LoadingComponent while fetching data',
    async () => {
      (fetchData as jest.Mock).mockResolvedValueOnce({});

      const { getByTestId } = render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      expect(getByTestId('loading-component')).toBeTruthy();

      await waitFor(
        () => {
          expect(mockOnLoadingStart).toHaveBeenCalledTimes(1);
          expect(mockOnLoadingEnd).toHaveBeenCalledTimes(1);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should not render ErrorComponent if there is an error fetching data',
    async () => {
      const errorMessage = 'Error fetching data';
      (fetchData as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

      const { queryByText } = render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(queryByText(errorMessage)).toBeNull();
          expect(mockOnVersionCheckError).toHaveBeenCalledWith(errorMessage);
          expect(queryByText('Some text')).toBeTruthy();
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should render ForceUpdateModal if force_update is true',
    async () => {
      const apiResponse = {
        force_update: true,
        message: 'Force update required',
        store_url: 'https://example.com',
        title: 'Force Update',
        update_button_text: 'Update Now',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      const { getByText } = render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(getByText(apiResponse.message)).toBeTruthy();
          expect(getByText(apiResponse.update_button_text)).toBeTruthy();
          expect(mockOnForceUpdate).toHaveBeenCalledTimes(0);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should render UpdateModal if needs_update is true',
    async () => {
      const apiResponse = {
        needs_update: true,
        message: 'Update available',
        store_url: 'https://example.com',
        title: 'Update',
        update_button_text: 'Update Now',
        dismiss_button_text: 'Dismiss',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnUpdate).toHaveBeenCalledTimes(0);
          expect(mockOnDismiss).toHaveBeenCalledTimes(0);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should render children if neither force_update nor needs_update is true',
    async () => {
      const apiResponse = {
        force_update: false,
        needs_update: false,
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      const { getByText } = render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>App content</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(getByText('App content')).toBeTruthy();
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should call onLoadingStart and onLoadingEnd when fetching data',
    async () => {
      (fetchData as jest.Mock).mockResolvedValueOnce({});

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnLoadingStart).toHaveBeenCalledTimes(1);
          expect(mockOnLoadingEnd).toHaveBeenCalledTimes(1);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should call onVersionCheckSuccess with response when fetching data is successful',
    async () => {
      const apiResponse = {
        force_update: false,
        needs_update: false,
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnVersionCheckSuccess).toHaveBeenCalledWith(apiResponse);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should call onVersionCheckError with error message when fetching data fails',
    async () => {
      const errorMessage = 'Error fetching data';
      (fetchData as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnVersionCheckError).toHaveBeenCalledWith(errorMessage);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should handle fetchData success',
    async () => {
      const response = { force_update: false, needs_update: false };
      (fetchData as jest.Mock).mockResolvedValueOnce(response);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
          expect(mockOnVersionCheckSuccess).toHaveBeenCalledWith(response);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should handle fetchData failure',
    async () => {
      const error = new Error('fetch error');
      (fetchData as jest.Mock).mockRejectedValueOnce(error);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
          expect(mockOnVersionCheckError).toHaveBeenCalledWith(error.message);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  it(
    'should handle onVersionCheckSuccess error',
    async () => {
      const response = { force_update: false, needs_update: false };
      (fetchData as jest.Mock).mockResolvedValueOnce(response);
      const error = new Error('onVersionCheckSuccess error');
      mockOnVersionCheckSuccess.mockImplementationOnce(() => {
        throw error;
      });

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
          expect(mockOnVersionCheckSuccess).toHaveBeenCalledWith(response);
        },
        { timeout: TIMEOUT }
      );
    },
    TIMEOUT
  );

  describe('Callback functions', () => {
    it('should do nothing if onLoadingStart is undefined', async () => {
      (fetchData as jest.Mock).mockResolvedValueOnce({});

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnLoadingEnd).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing if onLoadingEnd is undefined', async () => {
      (fetchData as jest.Mock).mockResolvedValueOnce({});

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnLoadingStart).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing if onVersionCheckSuccess is undefined', async () => {
      const response = { force_update: false, needs_update: false };
      (fetchData as jest.Mock).mockResolvedValueOnce(response);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing if onVersionCheckError is undefined', async () => {
      const error = new Error('fetch error');
      (fetchData as jest.Mock).mockRejectedValueOnce(error);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing if onForceUpdate is undefined', async () => {
      const apiResponse = {
        force_update: true,
        message: 'Force update required',
        store_url: 'https://example.com',
        title: 'Force Update',
        update_button_text: 'Update Now',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing if onUpdate is undefined', async () => {
      const apiResponse = {
        needs_update: true,
        message: 'Update available',
        store_url: 'https://example.com',
        title: 'Update',
        update_button_text: 'Update Now',
        dismiss_button_text: 'Dismiss',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing if onDismiss is undefined', async () => {
      const apiResponse = {
        needs_update: true,
        message: 'Update available',
        store_url: 'https://example.com',
        title: 'Update',
        update_button_text: 'Update Now',
        dismiss_button_text: 'Dismiss',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(fetchData).toHaveBeenCalledTimes(1);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing when onForceUpdate is undefined and force_update is true', async () => {
      const apiResponse = {
        force_update: true,
        message: 'Force update required',
        store_url: 'https://example.com',
        title: 'Force Update',
        update_button_text: 'Update Now',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      const { getByText } = render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onUpdate={mockOnUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(getByText(apiResponse.message)).toBeTruthy();
          expect(getByText(apiResponse.update_button_text)).toBeTruthy();
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing when onUpdate is undefined and needs_update is true', async () => {
      const apiResponse = {
        needs_update: true,
        message: 'Update available',
        store_url: 'https://example.com',
        title: 'Update',
        update_button_text: 'Update Now',
        dismiss_button_text: 'Dismiss',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onDismiss={mockOnDismiss}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnUpdate).toHaveBeenCalledTimes(0);
          expect(mockOnDismiss).toHaveBeenCalledTimes(0);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });

    it('should do nothing when onDismiss is undefined and needs_update is true', async () => {
      const apiResponse = {
        needs_update: true,
        message: 'Update available',
        store_url: 'https://example.com',
        title: 'Update',
        update_button_text: 'Update Now',
        dismiss_button_text: 'Dismiss',
      };
      (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

      render(
        <ForceUpdate
          api_key="API_KEY"
          language="en"
          platform="IOS"
          version="1.0.0"
          onLoadingStart={mockOnLoadingStart}
          onLoadingEnd={mockOnLoadingEnd}
          onVersionCheckSuccess={mockOnVersionCheckSuccess}
          onVersionCheckError={mockOnVersionCheckError}
          onForceUpdate={mockOnForceUpdate}
          onUpdate={mockOnUpdate}
        >
          <Text>Some text</Text>
        </ForceUpdate>
      );

      await waitFor(
        () => {
          expect(mockOnUpdate).toHaveBeenCalledTimes(0);
          expect(mockOnDismiss).toHaveBeenCalledTimes(0);
        },
        {
          timeout: TIMEOUT,
        }
      );
    });
  });

  it('the background of app should appear if the property "showAppBackground" is not informed', async () => {
    const apiResponse = {
      needs_update: true,
      message: 'Update available',
      store_url: 'https://example.com',
      title: 'Update',
      update_button_text: 'Update Now',
      dismiss_button_text: 'Dismiss',
    };
    (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

    const { getByTestId } = render(
      <ForceUpdate
        api_key="API_KEY"
        language="en"
        platform="IOS"
        version="1.0.0"
        onLoadingStart={mockOnLoadingStart}
        onLoadingEnd={mockOnLoadingEnd}
        onVersionCheckSuccess={mockOnVersionCheckSuccess}
        onVersionCheckError={mockOnVersionCheckError}
        onForceUpdate={mockOnForceUpdate}
        onUpdate={mockOnUpdate}
      >
        <Text>Some text</Text>
      </ForceUpdate>
    );

    await waitFor(
      () => {
        expect(getByTestId('app-background')).toBeTruthy();
      },
      {
        timeout: TIMEOUT,
      }
    );
  });

  it('the background of app should appear if the property "showAppBackground" is true', async () => {
    const apiResponse = {
      needs_update: true,
      message: 'Update available',
      store_url: 'https://example.com',
      title: 'Update',
      update_button_text: 'Update Now',
      dismiss_button_text: 'Dismiss',
    };
    (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

    const { getByTestId } = render(
      <ForceUpdate
        api_key="API_KEY"
        language="en"
        platform="IOS"
        version="1.0.0"
        onLoadingStart={mockOnLoadingStart}
        onLoadingEnd={mockOnLoadingEnd}
        onVersionCheckSuccess={mockOnVersionCheckSuccess}
        onVersionCheckError={mockOnVersionCheckError}
        onForceUpdate={mockOnForceUpdate}
        onUpdate={mockOnUpdate}
        showAppBackground
      >
        <Text>Some text</Text>
      </ForceUpdate>
    );

    await waitFor(
      () => {
        expect(getByTestId('app-background')).toBeTruthy();
      },
      {
        timeout: TIMEOUT,
      }
    );
  });

  it('the background of app should not appear if the property "showAppBackground" is false', async () => {
    const apiResponse = {
      needs_update: true,
      force_update: true,
      message: 'Update available',
      store_url: 'https://example.com',
      title: 'Update',
      update_button_text: 'Update Now',
      dismiss_button_text: 'Dismiss',
    };
    (fetchData as jest.Mock).mockResolvedValueOnce(apiResponse);

    const { queryByTestId } = render(
      <ForceUpdate
        api_key="API_KEY"
        language="en"
        platform="IOS"
        version="1.0.0"
        onLoadingStart={mockOnLoadingStart}
        onLoadingEnd={mockOnLoadingEnd}
        onVersionCheckSuccess={mockOnVersionCheckSuccess}
        onVersionCheckError={mockOnVersionCheckError}
        onForceUpdate={mockOnForceUpdate}
        onUpdate={mockOnUpdate}
        showAppBackground={false}
      >
        <Text>Some text</Text>
      </ForceUpdate>
    );

    await waitFor(
      () => {
        expect(queryByTestId('app-background')).toBeNull();
      },
      {
        timeout: TIMEOUT,
      }
    );
  });
});
