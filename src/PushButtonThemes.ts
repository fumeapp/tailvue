import { PushButtonThemes } from './types/push-button'

// @unocss-include
export const themes: PushButtonThemes = [
  {
    name: 'white',
    primary: 'border border-gray-300 shadow-sm font-medium rounded text-gray-700 bg-white',
    dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-600 dark:ring-offset-gray-800',
    active: 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    disabled: '',
  },
  {
    name: 'dark',
    primary: 'border border-gray-600 shadow-sm font-medium rounded text-gray-400 bg-gray-700',
    active: 'hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ring-offset-gray-800',
    disabled: '',
  },
  {
    name: 'white-left',
    primary: 'border border-gray-300 shadow-sm font-medium rounded-l-md text-gray-700 bg-white',
    dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500 dark:ring-offset-gray-800',
    active: 'hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
    disabled: '',
  },
  {
    name: 'white-mid',
    primary: '-ml-px relative inline-flex items-center border border-gray-300 shadow-sm font-medium text-gray-700 bg-white',
    dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500 dark:ring-offset-gray-800',
    active: 'hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
    disabled: '',
  },
  {
    name: 'white-right',
    primary: '-ml-px border border-gray-300 shadow-sm font-medium rounded-r-md text-gray-700 bg-white',
    dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:dark:bg-gray-500 dark:ring-offset-gray-800',
    active: 'hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
    disabled: '',
  },
  {
    name: 'text',
    primary: 'text-gray-700',
    active: 'hover:text-gray-500 hover:bg-gray-100 focus:outline-none active:text-gray-800 active:bg-gray-50',
  },
  {
    name: 'indigo',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600',
    active: 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    disabled: '',
  },
  {
    name: 'indigo-light',
    primary: 'text-indigo-700 bg-indigo-100',
    active: 'hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 active:bg-indigo-200',
    disabled: '',
  },
  {
    name: 'indigo-dark',
    primary: 'text-indigo-200 bg-indigo-900 rounded shadow-sm',
    active: 'hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 active:bg-indigo-800',
    disabled: '',
  },
  {
    name: 'red',
    primary: 'bg-red-600 border border-transparent font-medium rounded shadow-sm text-white',
    active: 'hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 focus:shadow-outline-red active:bg-red-700',
    disabled: '',
  },
  {
    name: 'yellow',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-yellow-600',
    active: 'hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:shadow-outline-yellow active:bg-yellow-700',
    disabled: '',
  },
  {
    name: 'green',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-green-600',
    active: 'hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:shadow-outline-green active:bg-green-700',
    disabled: '',
  },
  {
    name: 'emerald',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-emerald-600',
    active: 'hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:shadow-outline-emerald active:bg-emerald-700',
    disabled: '',
  },
  {
    name: 'teal',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-teal-600',
    active: 'hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 focus:shadow-outline-teal active:bg-teal-700',
    disabled: '',
  },
  {
    name: 'blue',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-blue-600',
    active: 'hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:shadow-outline-blue active:bg-blue-700',
    disabled: '',
  },
  {
    name: 'light-blue',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-light-blue-600',
    active: 'hover:bg-light-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 focus:shadow-outline-light-blue active:bg-light-blue-700',
    disabled: '',
  },
  {
    name: 'cyan',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-cyan-600',
    active: 'hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:shadow-outline-cyan active:bg-cyan-700',
    disabled: '',
  },
  {
    name: 'purple',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-purple-600',
    active: 'hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:shadow-outline-purple active:bg-purple-700',
    disabled: '',
  },
  {
    name: 'pink',
    primary: 'border border-transparent font-medium rounded shadow-sm text-white bg-pink-600',
    active: 'hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 focus:shadow-outline-pink active:bg-pink-700',
    disabled: '',
  },
]
