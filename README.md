# reactnative-forceupdate

A lightweight React Native package for enforcing app version updates. Ensure users always have the latest enhancements and fixes without dependencies.

## Features

- Enforce app version updates for Android and iOS
- Ensure users have the latest enhancements and fixes
- Lightweight and native implementation
- No external dependencies
- 100% test coverage
- Made with Typescript
- Customizable forceupdate modal on forceupdate dashboard
- Callbacks for handling modal events
- Support for multiple languages
- Support for multiple platforms
- A completed [SAAS](https://forceupdate.app) to manage your versions

## Creating an account

To use this package, you need to create an account on [ForceUpdate](https://forceupdate.app) and create a project. You will get an API key that you will use to check if the app is updated.

There is a free plan that you can use to test the package!

## Installation

Install the package using:

npm

```sh
npm install reactnative-forceupdate
```

or

yarn

```sh
yarn add reactnative-forceupdate
```

## Usage

Import the package

```tsx
import { ForceUpdate } from 'reactnative-forceupdate';
```

Wrap your app with the `ForceUpdate` component. It will check if the app is updated and show a modal if it's not.

```tsx
<ForceUpdate
  api_key="6bbc51d23e5938d512a62a83c230dfdef89ab7a2c75bdc1f0f42909d5e04feb5"
  language={'en'}
  platform={'ANDROID'}
  version={'1.0.2'}
>
  <View>
    <FakeProvider>
      <Text>My App</Text>
    </FakeProvider>
  </View>
</ForceUpdate>
```

## API Reference

These properties are required when instantiating the `ForceUpdate` component.

| Parameter | Explanation                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| Platform  | It should be either 'ANDROID' or 'IOS'                                          |
| Version   | The actual version of your app                                                  |
| Api_key   | The API key of your project. You can get it on your forceupdate.app dashboard   |
| Language  | The language of the message. The same defined on your forceupdate.app dashboard |

### Optional props (Callbacks)

These are the optional props that you can use to handle the modal events.

| Parameter              | Explanation                                        | Context                                                                    |
| ---------------------- | -------------------------------------------------- | -------------------------------------------------------------------------- |
| onDismiss              | Callback when the user dismisses the modal         | only appliable when `force_update` is `false`                              |
| onForceUpdate          | Callback when the user clicks on the update button | only appliable when `force_update` is `true`                               |
| onUpdate               | Callback when the user clicks on the update button | only appliable when `force_update` is `false` and `needs_update` is `true` |
| onVersionCheck         | Callback when the version check starts             | always                                                                     |
| onVersionCheckError    | Callback when the version check fails              | always when error                                                          |
| onVersionCheckSuccess  | Callback when the version check succeeds           | always when success                                                        |
| onVersionCheckStart    | Callback when the version check starts             | always                                                                     |
| onVersionCheckEnd      | Callback when the version check ends               | always                                                                     |
| onVersionCheckComplete | Callback when the version check completes          | always                                                                     |
| onLoadingStart         | Callback when the loading starts                   | always                                                                     |
| onLoadingEnd           | Callback when the loading ends                     | always                                                                     |

### API response

You do not manipulate the API response, but it's important to understand the properties that you can use to customize the modal on forceupdate.app dashboard.

| Parameter           | Explanation                                | Context                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| needs_update        | If the app needs an update                 | Defined on your version on forceupdate.app                                                                                                                                                                       |
| force_update        | If the app needs a force update            | Defined on your version on forceupdate.app                                                                                                                                                                       |
| title               | The title of the modal                     | The title that will be shown to the user when modal appear                                                                                                                                                       |
| message             | The message that will be shown to the user | The message that will be shown to the user when modal appear                                                                                                                                                     |
| store_url           | The url of the app store                   | The url that the user will be redirected when clicking on the update button. It consider the platform that the user is using, this property is defined on when you call <ForceUpdate ... platform={'ANDROID'} /> |
| dismiss_button_text | The text of the dismiss button             | The text of the dismiss button, defined on your version on forceupdate.app                                                                                                                                       |
| update_button_text  | The text of the update button              | The text of the update button, defined on your version on forceupdate.app                                                                                                                                        |

## Examples

### Expo

```tsx
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// ...

const version = Constants.manifest.version;
const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';
const language = 'en'; // or get it from any library like I18n
const apiKey =
  '6bbc51d23e5938d512a62a83c230dfdef89ab7a2c75bdc1f0f42909d5e04feb5';

return (
  <ForceUpdate
    api_key={apiKey}
    language={language}
    platform={platform}
    version={version}
  >
    <YourApp />
  </ForceUpdate>
);
```

### React Native

If you are using react-native without expo, you can get the version using the [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info) package.

```tsx
import DeviceInfo from 'react-native-device-info';
```

And then use it like this:

```tsx
import { Platform } from 'react-native';
// ...
const version = DeviceInfo.getVersion();
const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';
const language = 'en'; // or get it from any library like I18n
const apiKey =
  '6bbc51d23e5938d512a62a83c230dfdef89ab7a2c75bdc1f0f42909d5e04feb5';

return (
  <ForceUpdate
    api_key={apiKey}
    language={language}
    platform={platform}
    version={version}
  >
    <YourApp />
  </ForceUpdate>
);
```

## Api key

The API key is a unique identifier for your app. You can get it by creating an account on [ForceUpdate](https://forceupdate.app) and create a project to get one.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
