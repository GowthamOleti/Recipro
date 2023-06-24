import {useCallback, useEffect, useState} from 'react';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {Props} from './resultScreen';

export const useResultScreen = ({input, actionType}: Props) => {
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchResult = useCallback(() => {
    setIsLoading(true);
    fetchGPTResult({input, actionType}).then(output => {
      setOutputText(output);
      setIsLoading(false);
    });
  }, [actionType, input]);

  useEffect(() => {
    if (input && actionType) {
      fetchResult();
    }
  }, [input, actionType, fetchResult]);

  return {
    isLoading,
    outputText,
  };
};
