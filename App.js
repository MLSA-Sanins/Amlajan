import React from 'react';
import Providers from "./src/navigation";
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { store } from "./src/redux/store";
import {Provider} from "react-redux";
//import { StatusBar } from 'expo-status-bar';

//cache images
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

//caching fonts
// function cacheFonts(fonts) {
//   return fonts.map(font => Font.loadAsync(font));
// }

class App extends React.Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/png/search.png'),
      require('./assets/png/map.png'),
      require('./assets/png/contact.png'),
      require('./assets/png/welcome.png')
    ]);

    // const fontsAssets = cacheFonts([]);

    await Promise.all([...imageAssets])
  }

  onFinishLoading = () => {
    this.setState({ isReady: true })
  }


  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={this.onFinishLoading}
          onError={console.warn}
        />
      );
    };
    return (
      <Provider store={store}>
          <Providers />
      </Provider>
    )
  }
}

export default App;
