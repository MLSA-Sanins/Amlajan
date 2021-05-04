import React from 'react';
import Providers from "./src/navigation";
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
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

export default class App extends React.Component {
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


  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    };
    return <Providers/>
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
