export const keywordComponentMap = {
  login: [
    "Utility",
    "Label",
    "InputContainer",
    "Input",
    "InputMessage",
    "Checkbox",
    "CheckboxPanel",
    "Button",
    "Typography",
    "Switch",
    "SwitchLabel",
    "Switch",
    "SwitchLabel",
  ],
  signup: [
    "Utility",
    "Label",
    "InputContainer",
    "Input",
    "InputMessage",
    "Button",
  ],
  modal: [
    "Utility",
    "Button",
    "DialogCloseButton",
    "DialogContent",
    "Typography",
  ],
  navigation: [],
};

export const keywordAliases = {
  login: "login",
  signin: "login",
  authenticate: "login",
  register: "signup",
  signup: "signup",
  modal: "modal",
  dialog: "modal",
};

export const componentInfoMap = {
  Utility: {
    name: "Utility",
    description:
      "Component used to create a div, by default, with the correct Nova utility style classes applied.",
    link: "https://design.visa.com/developing/react/accessibility-utilities/?code_library=react&version=2.5.4#components",
  },
  Input: {
    name: "Input",
    description: "Text fields that enable users to enter free-form content.",
    link: "https://design.visa.com/components/input/?code_library=react&version=2.5.4#components",
  },
  InputContainer: {
    name: "InputContainer",
    description: "Container for styling input elements.",
    link: "https://design.visa.com/components/input/?code_library=react&version=2.5.4#components",
  },
  InputMessage: {
    name: "InputMessage",
    description:
      "Message shown beneath input components to provide context or guidance.",
    link: "https://design.visa.com/components/input/?code_library=react&version=2.5.4#components",
  },
  Checkbox: {
    name: "Checkbox",
    description:
      "Interactive element enabling users to select one or more independent options from a group.",
    link: "https://design.visa.com/components/checkbox/?code_library=react&version=2.5.4",
  },
  CheckboxPanel: {
    name: "CheckboxPanel",
    description:
      "Container to be used with checkbox component to add border and background color.",
    link: "https://design.visa.com/components/checkbox/?code_library=react&version=2.5.4",
  },
  Button: {
    name: "Button",
    description:
      "Interactive elements enabling users to take actions within an interface.",
    link: "https://design.visa.com/components/button/?code_library=react&version=2.5.4",
  },
  Label: {
    name: "Label",
    description: "Component used to label form elements.",
    link: "https://design.visa.com/patterns/forms/",
  },
  Typography: {
    name: "Typography",
    description: "Styles text in a consistent manner.",
    link: "https://design.visa.com/base-elements/typography/?code_library=react&version=2.5.4#body",
  },
  Switch: {
    name: "Switch",
    description:
      "Binary control that allows users to toggle between two states, such as on/off.",
    link: "https://design.visa.com/components/switch/?code_library=react&version=2.5.4#default-switches",
  },
  SwitchLabel: {
    name: "SwitchLabel",
    description: "Label to be used with switch component.",
    link: "https://design.visa.com/components/switch/?code_library=react&version=2.5.4#default-switches",
  },
  DialogCloseButton: {
    name: "DialogCloseButton",
    description: "Button that appears in dialog pop-up windows to close them.",
    link: "https://design.visa.com/components/dialog/?code_library=react&version=2.5.4#api",
  },
  DialogContent: {
    name: "DialogContent",
    description: "Content container for dialog pop-up windows.",
    link: "https://design.visa.com/components/dialog/?code_library=react&version=2.5.4#api",
  },
};
