/**
 * UI constants for the app.
 */
export const UI_CONSTANTS = {
  FORM: {
    TEXTAREA: {
      PLACEHOLDER: "1 portion oats, 2 apples, 500ml milk, handful fries...",
      MIN_ROWS: 1,
      MAX_LENGTH: 1000,
    },
    VALIDATION: {
      MIN_LENGTH: 1,
      MAX_LENGTH: 1000,
    },
  },
  BUTTONS: {
    SUBMIT_TEXT: "Get results",
    SUBMIT_LOADING_TEXT: "Processing...",
    LEARN_MORE_TEXT: "Learn more",
  },
  ERRORS: {
    GENERIC: "An error occurred. Please try again.",
    NETWORK: "Network error. Please check your connection.",
    VALIDATION: {
      EMPTY: "Please enter at least one food item.",
      TOO_LONG: "Food log is too long. Please keep it under 1000 characters.",
    },
  },
  RESULTS: {
    NO_RESULTS_MESSAGE: "No results available. Please log some food first.",
    OVERVIEW_TITLE: "Overview",
    POSITIVE_SCORES_TITLE: "Positive scores",
    NEGATIVE_SCORES_TITLE: "Negative scores",
    OTHER_TITLE: "Other",
    COMPLETE_BREAKDOWN_TITLE: "Complete breakdown",
    ANYTHING_ELSE_TITLE: "Anything else?",
    ANYTHING_ELSE_DESCRIPTION:
      "Missing entry or midnight snack, we’re not here to judge. Add it to today’s entry.",
    UNKNOWN_ITEMS_LOGGED: "unknown items logged",
  },
};
