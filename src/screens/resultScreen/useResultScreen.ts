import {useCallback, useEffect, useState} from 'react';
import {ResultErrorType} from '../../common/constants';
import {useAppTheme} from '../../common/useAppTheme';
import {analyticsTags, trackAction, trackState} from '../../util/analytics';
import {fetchGPTResult} from '../../util/fetchGPTResult';
import {logError} from '../../util/helpers';
import {ResultProps} from './resultScreen';
import {getStyles} from './resultScreen.styles';

export const useResultScreen = ({input, actionType}: ResultProps) => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorType, setErrorType] = useState<ResultErrorType>();

  useEffect(() => {
    trackState(analyticsTags.screens.result);
  }, []);

  const fetchResult = useCallback(() => {
    setErrorType(undefined);
    setOutputText('');
    setIsLoading(true);

    fetchGPTResult({input, actionType})
      .then(output => {
        setIsLoading(false);
        if (output === 'ERR401') {
          setErrorType(ResultErrorType.InvalidKey);
        } else if (output === 'ERR429') {
          setErrorType(ResultErrorType.KeyNotActivated);
        } else if (output === '') {
          setErrorType(ResultErrorType.Generic);
        } else {
          trackAction(analyticsTags.resultScreen.resultSuccess);
          setOutputText(output);
        }
      })
      .catch(error => {
        logError(error);
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
    styles,
    theme,
  };
};
