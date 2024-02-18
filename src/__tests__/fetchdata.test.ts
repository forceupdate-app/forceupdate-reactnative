import { fetchData } from '../services/fetchdata';

const ENDPOINT = `http://localhost:8080/check-version`;

describe('fetchData', () => {
  it('should return the data when the response is successful', async () => {
    // Arrange
    const version = '1.0.0';
    const platform = 'iOS';
    const language = 'en';
    const api_key = 'your-api-key';

    const expectedData = {
      // Define your expected data here
    };

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(expectedData),
    });

    // Act
    const result = await fetchData({ version, platform, language, api_key });

    // Assert
    expect(result).toEqual(expectedData);
    expect(fetch).toHaveBeenCalledWith(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
      body: JSON.stringify({ version, platform, language, api_key }),
    });
  });

  it('should throw an error when the response is not successful', async () => {
    // Arrange
    const version = '1.0.0';
    const platform = 'iOS';
    const language = 'en';
    const api_key = 'your-api-key';

    const errorData = {
      // Define your error data here
    };

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(errorData),
    });

    // Act and Assert
    await expect(
      fetchData({ version, platform, language, api_key })
    ).rejects.toThrowError();
    expect(fetch).toHaveBeenCalledWith(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
      body: JSON.stringify({ version, platform, language, api_key }),
    });
  });
});
