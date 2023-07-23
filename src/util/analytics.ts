import analytics from '@react-native-firebase/analytics';
import {AppAlertType} from '../common/appAlert';
import {
  ExplainerScreenType,
  InputActionType,
  ResultErrorType,
} from '../common/constants';
import {Screen} from '../navigation/navigationTypes';

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
    askApiKey: 'ask_key_screen',
    home: 'homescreen',
    result: 'result_screen',
    settings: 'settings_screen',
  },
  init: {
    firstTime: 'init_first_time',
    notFirstTime: 'init_not_first_time',
    keyPresent: 'init_key_present',
    keyNotPresent: 'init_key_not_present',
  },
  onboarding: {
    aboutScreenRead: 'onboarding_about_read_completely',
    aboutScreenNext: 'onboarding_about_next_btn',
    apiKeyLink: 'onboarding_ask_key_screen_link',
    apiKeyNext: 'onboarding_ask_key_screen_next_btn',
    addPaymentLink: 'onboarding_add_payment_screen_link',
    usageLimitLink: 'onboarding_add_payment_screen_usage_link',
    done: 'onboarding_add_payment_screen_done_btn',
    apiKeyTestSuccess: 'onboarding_key_test_success',
    apiKeyTestFailure: 'onboarding_key_test_failure',
  },
  homescreen: {
    sharedText: 'homescreen_shared_input',
    autoSummarizing: 'homescreen_auto_summarizing',
    paste: 'homescreen_paste_from_clipboard_btn',
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
    rewriteLink: 'homescreen_error_toast_rewrite_link',
    twitterNotInstalled: 'result_screen_error_toast_cannot_tweet',
    invalidKey: 'ask_key_screen_error_toast_invalid_key',
  },
  settingsScreen: {
    autoSummarizeEnable: 'settings_auto_summarize_enabled',
    autoSummarizeDisable: 'settings_auto_summarize_disabled',
    showTweetEmail: 'settings_tweet_mail_enabled',
    hideTweetMail: 'settings_tweet_mail_disabled',
    darkModeEnable: 'settings_dark_mode_enabled',
    darkModeDisable: 'settings_dark_mode_disabled',
    resetKey: 'settings_reset_key',
    resetKeyModalYes: 'settings_reset_key_modal_yes_btn',
    keySetupInstructions: 'settings_key_setup_instructions',
    aboutTextCraft: 'settings_about',
    feedback: 'settings_feedback',
  },
  askApiKeyScreen: {
    apiKeyTestSuccess: 'ask_key_screen_key_test_success',
    apiKeyTestFailure: 'ask_key_screen_key_test_failure',
    apiKeyLink: 'ask_key_screen_link',
    apiKeyErrorInstructionsBtn: 'ask_key_screen_error_modal_info_btn',
    saveAPIKey: 'ask_key_screen_save_key_btn',
  },
  apiKeyInstructions: {
    generateKeyLink: 'key_instructions_screen_create_key_link',
    addPaymentLink: 'key_instructions_screen_payment_link',
    usageLimitLink: 'key_instructions_screen_usage_link',
  },
  headerActions: {
    settingsButtonHome: 'homescreen_settings_btn',
    settingsButtonResult: 'result_screen_settings_btn',
  },
  privacyPolicy: 'about_screen_privacy_policy_link',
};

export const fetchInitScreenTag: Record<Screen, string> = {
  HOME: 'init_screen_home',
  ASK_API_KEY: 'init_screen_ask_key',
  EXPLAINER: 'init_screen_about',
  RESULT: '',
  SETTINGS: '',
};

export const fetchInputActionTag: Record<InputActionType, string> = {
  EXPAND: 'homescreen_expand_btn',
  EXPLAIN_LIKE_FIVE: 'homescreen_explain_like_five_btn',
  EXPLAIN: 'homescreen_explain_btn',
  FIX_GRAMMAR: 'homescreen_fix_grammar_btn',
  REWRITE_CASUAL: 'homescreen_casual_tone_btn',
  REWRITE_PROFESSIONAL: 'homescreen_professional_tone_btn',
  REWRITE: 'homescreen_rewrite_btn',
  SHORTEN: 'homescreen_shorten_btn',
  SUMMARIZE_IN_POINTS: 'homescreen_summarize_in_points_btn',
  SUMMARIZE: 'homescreen_summarize_btn',
};

export const fetchResultErrorTag: Record<ResultErrorType, string> = {
  GENERIC: 'result_screen_error_generic',
  INVALID_KEY: 'result_screen_error_invalid_key',
  PAYMENT_DETAILS_UNAVAILABLE: 'result_screen_error_key_not_activated',
};

export const fetchExplainerScreenTag: Record<ExplainerScreenType, string> = {
  ABOUT: 'about_screen',
  ADD_PAYMENT: 'add_payment_screen',
  KEY_INSTRUCTIONS: 'key_instructions_screen',
};

export const fetchAlertSecondaryBtnTag: Record<AppAlertType, string> = {
  KEY_ERROR: 'ask_key_screen_error_modal_close_btn',
  ONBOARDING_KEY_ERROR: 'onboarding_error_modal_okay_btn',
  RESET_CONFIRMATION: 'settings_reset_key_modal_cancel_btn',
};
