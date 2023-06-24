import {useEffect, useState} from 'react';
import {IsOpenAIApiKeyPresent} from './util/handleApiKeys';

export const useHomeScreen = () => {
  const [askApiKey, setAskApiKey] = useState(false);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    IsOpenAIApiKeyPresent().then(isOpenAIApiKeyPresent => {
      if (!isOpenAIApiKeyPresent) {
        setAskApiKey(true);
      }
    });
  }, []);

  return {
    askApiKey,
    setAskApiKey,
    inputText,
    setInputText,
  };
};
