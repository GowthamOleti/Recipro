import {useState, useEffect, useCallback} from 'react';
import ShareMenu from 'react-native-share-menu';

type SharedItem = {
  mimeType: string;
  data: string | string[];
  extraData?: any;
};

export const useFetchSharedItem = () => {
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

  if (sharedMimeType && sharedData && sharedMimeType === 'text/plain') {
    // The user shared text
    return String(sharedData);
  }

  return null;
};
