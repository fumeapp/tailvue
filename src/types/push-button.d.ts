export interface PushButtonTheme {
  name?: PushButtonThemeName
  primary: string
  active: string
  dark?: string
  disabled?: string
}
export type PushButtonThemes = PushButtonTheme[]
export type PushButtonThemeName =
  'white' |
  'dark' |
  'white-left' |
  'white-mid' |
  'white-right' |
  'text' |
  'indigo' |
  'indigo-light' |
  'indigo-dark' |
  'red' |
  'yellow' |
  'green' |
  'emerald' |
  'teal' |
  'cyan' |
  'blue' |
  'light-blue' |
  'purple' |
  'pink'
export type PushButtonState = 'active'|'loading'|'disabled'
export type PushButtonSize = 'xs'| 's'| 'm'| 'l'| 'xl'
