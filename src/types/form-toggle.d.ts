export interface FormToggleTheme {
  name?: FormToggleThemeName
  outer: string
  inner: string
  focus?: string
}
export type FormToggleThemes = FormToggleTheme[]
export type FormToggleThemeName =
  'white' |
  'gray' |
  'red' |
  'orange' |
  'amber' |
  'yellow' |
  'lime' |
  'green' |
  'emerald' |
  'teal' |
  'cyan' |
  'sky' |
  'blue' |
  'indigo' |
  'violet' |
  'purple' |
  'fuchsia' |
  'pink' |
  'rose'
  // NOT ON WINDI YET
  // 'slate' |
  // 'zinc' |
  // 'neutral' |
  // 'stone' |

export type FormToggleSizeLabel = 'xs'| 's'| 'm'| 'l'| 'xl'
export interface FormToggleSize {
  name: string
  button: string
  span: string
  translate: string
}
export type FormToggleSizes = FormToggleSize[]
