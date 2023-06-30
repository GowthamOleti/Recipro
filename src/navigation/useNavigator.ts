import {useEffect, useState} from 'react';
import {IsOpenAIApiKeyPresent} from '../util/handleApiKey';
import {Screen} from './navigationTypes';

export const useNavigator = () => {
  const [loading, setLoading] = useState(true);
  const [initRoute, setInitRoute] = useState(Screen.HOME);

  useEffect(() => {
    IsOpenAIApiKeyPresent()
      .then(isOpenAIApiKeyPresent => {
        if (!isOpenAIApiKeyPresent) {
          setInitRoute(Screen.ASK_API_KEY);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setInitRoute]);

  return {
    initRoute,
    loading,
  };
};
