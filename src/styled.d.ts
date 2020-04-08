import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    // A primary color is the color displayed most frequently across your app’s screens and components.
    primaryColorDark: string
    primaryColorLight: string

    // Should be applied sparingly to accent select parts of your UI.
    accentColor: string

    // Surface colors affect surfaces of components, such as cards, sheets, and menus.
    surfaceColor: string

    // The background color appears behind scrollable content.
    backgroundColor: string

    // Error color indicates errors in components, such as invalid text in a text field.
    errorColor: string

    fontColor: string
  }
}
