import {useCallback, useEffect, useState} from 'react';
import {ResultErrorType} from '../../util/constants';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {Props} from './resultScreen';

export const useResultScreen = ({input, actionType}: Props) => {
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorType, setErrorType] = useState<ResultErrorType>();

  const fetchResult = useCallback(() => {
    setErrorType(undefined);
    setIsLoading(true);
    fetchGPTResult({input, actionType}).then(output => {
      if (output === '401') {
        setErrorType(ResultErrorType.INVALID_KEY);
      } else if (output === '') {
        setErrorType(ResultErrorType.GENERIC);
      } else {
        setOutputText(output);
      }
      setIsLoading(false);
    });
  }, [actionType, input]);

  useEffect(() => {
    if (input && actionType) {
      fetchResult();
    }
  }, [input, actionType, fetchResult]);

  return {
    errorType,
    fetchResult,
    isLoading,
    outputText,
  };
};
