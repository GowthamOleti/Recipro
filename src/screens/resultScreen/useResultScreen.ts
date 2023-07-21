import {useCallback, useEffect, useState} from 'react';
import {ResultErrorType} from '../../common/constants';
import {analyticsTags, trackAction, trackState} from '../../util/analytics';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {Props} from './resultScreen';

export const useResultScreen = ({input, actionType}: Props) => {
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorType, setErrorType] = useState<ResultErrorType>();

  useEffect(() => {
    trackState(analyticsTags.screens.RESULT);
  }, []);

  const fetchResult = useCallback(() => {
    setErrorType(undefined);
    setOutputText('');
    setIsLoading(true);

    fetchGPTResult({input, actionType}).then(output => {
      setIsLoading(false);
      if (output === 'ERR401') {
        setErrorType(ResultErrorType.INVALID_KEY);
      } else if (output === 'ERR429') {
        setErrorType(ResultErrorType.PAYMENT_DETAILS_UNAVAILABLE);
      } else if (output === '') {
        setErrorType(ResultErrorType.GENERIC);
      } else {
        trackAction(analyticsTags.resultScreen.resultSuccess);
        setOutputText(output);
      }
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
