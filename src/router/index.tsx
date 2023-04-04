import { createBrowserRouter } from 'react-router-dom'
import { Home, IdentityTree, Layout, Settings } from '../pages'
import { HomeIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { BASE_PATH } from '../constants'
import * as React from 'react'

export interface INavigationType {
  name: string
  path: string
  href: string
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  element: JSX.Element
}

export const mainNavigation: INavigationType[] = [
  {
    name: 'Home',
    path: '',
    href: BASE_PATH,
    icon: HomeIcon,
    element: <Home />,
  },
  {
    name: 'Identity',
    path: 'identityTree',
    href: `${BASE_PATH}/identityTree`,
    icon: UsersIcon,
    element: <IdentityTree />,
  },
]

export const bottomNavigation: INavigationType[] = [
  {
    name: 'Settings',
    path: 'settings',
    href: `${BASE_PATH}/settings`,
    icon: Cog6ToothIcon,
    element: <Settings />,
  },
]

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <Layout />,
    children: [...mainNavigation, ...bottomNavigation].map(
      ({ path, element }) => {
        return { path, element }
      }
    ),
  },
])

export default router
