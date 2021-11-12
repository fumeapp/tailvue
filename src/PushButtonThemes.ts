import { PushButtonTheme, PushButtonThemeName } from './PushButtonTypes'

export const themes: PushButtonTheme[] = [
  {
    name: PushButtonThemeName.White,
    primary: 'border border-gray-300 shadow-sm font-medium rounded text-gray-700 bg-white',
    active: 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    disabled: '',
  },
  {
    name: PushButtonThemeName.Text,
    primary: 'text-gray-700',
    active: 'hover:text-gray-500 hover:bg-gray-100 focus:outline-none active:text-gray-800 active:bg-gray-50',
    disabled: '',
  },
]

