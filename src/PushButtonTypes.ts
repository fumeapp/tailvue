
export interface PushButtonTheme {
  name: PushButtonThemeName
  primary: string
  active: string
  disabled: string
}

export enum PushButtonThemeName {
  White = 'white',
  Text = 'text',
}

export enum PushButtonState {
  Active = 'active',
  Loading = 'loading',
  LoadingQuiet = 'loading-quiet',
  Disabled = 'disabled',
}

export enum PushButtonSize {
  Smallest = 'xs',
  Small = 's',
  Medium = 'm',
  Large = 'l',
  Largest = 'xl',
}

