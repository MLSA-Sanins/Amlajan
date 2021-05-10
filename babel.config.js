module.exports = function(api) {
  api.cache(true);
  if (process.env["ENV"] === "prod") {
    plugins.push("transform-remove-console");
  }
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};