interface IFetchData {
  version: string;
  platform: string;
  language: string;
  api_key: string;
}

export interface ICheckVersionResponse {
  needs_update: boolean;
  force_update: boolean;
  message: string;
  store_url: string;
  dismiss_button_text: string;
  update_button_text: string;
  title: string;
}

export interface IErrorResponse {
  message: string[];
  error: string;
  statusCode: number;
}

const VERSION = 'v1';
const PATH = 'check-version';
const ENDPOINT = `https://api.forceupdate.app/${VERSION}/${PATH}`;

export async function fetchData({
  version,
  platform,
  language,
  api_key,
}: IFetchData): Promise<ICheckVersionResponse> {
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
      body: JSON.stringify({
        version,
        platform,
        language,
        api_key,
      }),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as any;
      try {
        throw new Error(errorData.message.join(' '), {
          cause: errorData.error,
        });
      } catch (error) {
        throw new Error(errorData.statusText || errorData.message);
      }
    }

    const data: ICheckVersionResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
