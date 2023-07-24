import {appVersion} from './src/common/constants';

const fs = require('fs');

const updateIOSVersion = () => {
  const iosProjectPath = '/Users/teja2495/Projects/textcraft/ios';
  const plistPath = `${iosProjectPath}/Info.plist`;

  let plistData = fs.readFileSync(plistPath, 'utf8');

  // Update version in Info.plist
  plistData = plistData.replaceAll('{APP_VERSION}', appVersion);

  fs.writeFileSync(plistPath, plistData, 'utf8');
};

updateIOSVersion();
