// https://material.io/design/color/#color-theme-creation
import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  // A primary color is the color displayed most frequently across your app’s screens and components.
  primaryColorDark: "#0779bc",
  primaryColorLight: "#0FACF3",

  // Should be applied sparingly to accent select parts of your UI.
  accentColor: "#f3570f",

  // Surface colors affect surfaces of components, such as cards, sheets, and menus.
  surfaceColor: "#FFFFFF",

  // The background color appears behind scrollable content.
  backgroundColor: "#FFFFFF",

  // Error color indicates errors in components, such as invalid text in a text field.
  errorColor: "#B00020",

  // Success color indicates successful requests in components, such button backgrounds.
  successColor: "#33cc5e",

  fontColor: "#000000",

  headingFontFamily: "Quicksand, sans-serif",
  textFontFamily: "Quicksand, sans-serif"
};
