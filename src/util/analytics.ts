import analytics from '@react-native-firebase/analytics';
import {
  ExplainerScreenType,
  InputActionType,
  ResultErrorType,
} from '../common/constants';

export const trackAction = (eventName: string) => {
  console.log(`analytics_action: ${eventName}`);
  analytics().logEvent(eventName);
};

export const trackState = (screen: string) => {
  console.log(`analytics_state: ${screen}`);
  analytics().logScreenView({screen_name: screen});
};

export const analyticsTags = {
  screens: {
    HOME: 'homescreen',
    RESULT: 'result_screen',
    ASK_API_KEY: 'ask_key_screen',
  },
  init: {
    initScreen: 'init_screen_{initScreenName}',
    firstTime: 'init_first_time',
    notFirstTime: 'init_not_first_time',
    keyPresent: 'init_key_present',
    keyNotPresent: 'init_key_not_present',
  },
  homescreen: {
    sharedText: 'homescreen_shared_input',
    autoSummarizing: 'homescreen_auto_summarizing',
    paste: 'homescreen_pasted_from_clipboard_btn',
    clear: 'homescreen_clear_input_btn',
    validInput: 'homescreen_valid_input',
    invalidInput: 'homescreen_invalid_input',
    rewriteLongPress: 'homescreen_more_write_options',
    summarizeLongPress: 'homescreen_more_read_options',
  },
  resultScreen: {
    resultSuccess: 'result_screen_result_success',
    resultFailure: 'result_screen_result_failure',
    actions: {
      share: 'result_screen_share_btn',
      shared: 'result_screen_result_shared',
      shareDismissed: 'result_screen_share_dismissed',
      copy: 'result_screen_copy_btn',
      tweet: 'result_screen_tweet_btn',
      email: 'result_screen_email_btn',
    },
    errorButtons: {
      retry: 'result_screen_error_retry_btn',
      reset: 'result_screen_error_reset_key_btn',
      instructions: 'result_screen_error_instructions_btn',
    },
  },
  errorToast: {
    emptyInput: 'homescreen_error_toast_no_input',
    noInternet: 'homescreen_error_toast_no_internet',
    unsupportedLink: 'homescreen_error_toast_unsupported_link',
    rewriteLink: 'homescreen_error_toast_cannot_rewrite_link',
    twitterNotInstalled: 'result_screen_error_toast_twitter_not_installed',
    invalidKey: 'ask_api_key_screen_error_toast_invalid_key',
  },
  privacyPolicy: 'about_screen_privacy_policy_link',
  settingsScreen: {
    // TODO
    autoSummarizeEnable: 'settings_auto_summarize_enable',
    autoSummarizeDisable: 'settings_auto_summarize_disable',
    showTweetMail: 'settings_tweet_mail_show',
    hideTweetMail: 'settings_tweet_mail_hide',
    darkModeEnable: 'settings_dark_mode_enable',
    darkModeDisable: 'settings_dark_mode_disable',
    resetKey: 'settings_reset_key',
    resetKeyModalYes: 'settings_reset_key_modal_yes_btn',
    resetKeyModalCancel: 'settings_reset_key_modal_cancel_btn',
    resetInstructions: 'settings_key_setup_instructions',
    aboutTextCraft: 'settings_about',
    feedback: 'settings_feedback',
  },
  onboarding: {
    // TODO
    aboutScreenRead: 'onboarding_about_read',
    aboutScreenNotRead: 'onboarding_about_not_read',
    aboutScreenNext: 'onboarding_about_next_btn',
    apiKeyLink: 'onboarding_ask_key_screen_link',
    apiKeyNext: 'onboarding_ask_key_screen_next_btn',
    paymentDetailsLink: 'onboarding_add_payment_screen_link',
    usageLimitLink: 'onboarding_add_payment_screen_usage_limit_link',
    done: 'onboarding_add_payment_screen_done_btn',
    apiKeyErrorPopup: {
      error: 'onboarding_generic_key_error',
      paymentError: 'onboarding_key_activation_error',
      invalidKeyError: 'onboarding_invalid_key_error',
      okay: 'onboarding_key_error_modal_okay',
    },
    apiKeyTestSuccess: 'onboarding_key_test_success',
    apiKeyTestFailure: 'onboarding_key_test_failure',
  },
  askApiKeyScreen: {
    apiKeyTestSuccess: 'ask_key_screen_key_test_success',
    apiKeyTestFailure: 'ask_key_screen_key_test_failure',
    apiKeyErrorPopup: {
      // TODO
      error: 'ask_key_screen_generic_key_error',
      paymentError: 'ask_key_screen_key_activation_error',
      invalidKeyError: 'ask_key_screen_invalid_key_error',
      instructions: 'ask_key_screen_error_modal_instructions_btn',
      okay: 'ask_api_key_screen_error_modal_okay_btn',
    },
    saveAPIKey: 'ask_key_screen_save_key_btn',
  },
  apiKeyInstructions: {
    generateKeyLink: 'key_instructions_screen_generate_key_link',
    addPaymentLink: 'key_instructions_screen_payment_link',
    usageLimitLink: 'key_instructions_screen_usage_limit_link',
  },
  headerActions: {
    // TODO
    resultBack: 'result_screen_back_btn',
    settingsBack: 'settings_screen_back_btn',
    aboutScreenBack: 'about_screen_back_btn',
    instructionsScreenBack: 'key_instructions_screen_back_btn',
    askAPIScreenBack: 'ask_key_screen_back_btn',
    addPaymentDetailsScreenBack: 'result_screen_back_btn',
    settingsButtonHome: 'homescreen_settings_btn',
    settingsButtonResult: 'result_screen_settings_btn',
  },
};

export const fetchInputActionTag: Record<InputActionType, string> = {
  SUMMARIZE: 'homescreen_summarize_btn',
  REWRITE: 'homescreen_rewrite_btn',
  REWRITE_PROFESSIONAL: 'homescreen_professional_tone_btn',
  REWRITE_CASUAL: 'homescreen_casual_tone_btn',
  FIX_GRAMMAR: 'homescreen_fix_grammar_btn',
  SHORTEN: 'homescreen_shorten_btn',
  EXPAND: 'homescreen_expand_btn',
  EXPLAIN: 'homescreen_explain_btn',
  EXPLAIN_LIKE_FIVE: 'homescreen_explain_like_five_btn',
  SUMMARIZE_IN_POINTS: 'homescreen_summarize_in_points_btn',
};

export const fetchResultErrorTag: Record<ResultErrorType, string> = {
  GENERIC: 'result_screen_error_generic',
  PAYMENT_DETAILS_UNAVAILABLE: 'result_screen_error_key_not_activated',
  INVALID_KEY: 'result_screen_error_invalid_key',
};

export const fetchExplainerScreenTag: Record<ExplainerScreenType, string> = {
  KEY_INSTRUCTIONS: 'key_instructions_screen',
  ADD_PAYMENT: 'add_payment_screen',
  ABOUT: 'about_screen',
};
