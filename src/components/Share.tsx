import React, {useState, useEffect, useCallback} from 'react';
import {AppRegistry, Text, View, Image, Button} from 'react-native';
import ShareMenu, {ShareMenuReactView} from 'react-native-share-menu';

type SharedItem = {
  mimeType: string;
  data: string | string[];
  extraData?: any;
};

export const Test = () => {
  const [sharedData, setSharedData] = useState<string | string[]>();
  const [sharedMimeType, setSharedMimeType] = useState('');

  const handleShare = useCallback((item?: SharedItem) => {
    if (!item) {
      return;
    }

    const {mimeType, data, extraData} = item;

    setSharedData(data);
    setSharedMimeType(mimeType);
    // You can receive extra data from your custom Share View
    console.log(extraData);
  }, []);

  useEffect(() => {
    ShareMenu.getSharedText(handleShare);
  }, [handleShare]);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, [handleShare]);

  if (!sharedMimeType && !sharedData) {
    // The user hasn't shared anything yet
    return null;
  }

  if (sharedMimeType === 'text/plain') {
    // The user shared text
    return <Text>Shared text: {sharedData}</Text>;
  }

  // The user shared a file in general
  return (
    <View>
      <Text>Shared mime type: {sharedMimeType}</Text>
      <Text>Shared file location: {sharedData}</Text>
    </View>
  );
};

const Share = () => {
  const [sharedData, setSharedData] = useState('');
  const [sharedMimeType, setSharedMimeType] = useState('');

  useEffect(() => {
    ShareMenuReactView.data().then(({mimeType, data}) => {
      setSharedData(data);
      setSharedMimeType(mimeType);
    });
  }, []);

  return (
    <View>
      <Button
        title="Dismiss"
        onPress={() => {
          ShareMenuReactView.dismissExtension();
        }}
      />
      <Button
        title="Send"
        onPress={() => {
          // Share something before dismissing
          ShareMenuReactView.dismissExtension();
        }}
      />
      <Button
        title="Dismiss with Error"
        onPress={() => {
          ShareMenuReactView.dismissExtension('Something went wrong!');
        }}
      />
      <Button
        title="Continue In App"
        onPress={() => {
          ShareMenuReactView.continueInApp();
        }}
      />
      <Button
        title="Continue In App With Extra Data"
        onPress={() => {
          ShareMenuReactView.continueInApp({hello: 'from the other side'});
        }}
      />
      {sharedMimeType === 'text/plain' && <Text>{sharedData}</Text>}
      {sharedMimeType.startsWith('image/') && (
        <Image source={{uri: sharedData}} />
      )}
    </View>
  );
};

AppRegistry.registerComponent('Test', () => Test);
AppRegistry.registerComponent('ShareMenuModuleComponent', () => Share);
