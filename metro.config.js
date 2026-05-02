// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaultconfig = getDefaultConfig(__dirname);

for (const extension of ['db', 'wasm']) {
  if (!defaultconfig.resolver.assetExts.includes(extension)) {
    defaultconfig.resolver.assetExts.push(extension);
  }
}

module.exports = defaultconfig;
