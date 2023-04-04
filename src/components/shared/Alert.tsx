import {
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import * as React from 'react'
import { type ReactNode } from 'react'

enum AlertType {
  Warning,
  Info,
  Success,
  Error,
}

interface AlertProps {
  type: AlertType
  title: string
  canDismiss?: boolean
  children: ReactNode
}

const alertTypes = {
  [AlertType.Info]: {
    icon: InformationCircleIcon,
    style: {
      icon: 'h-5 w-5 text-blue-400',
      title: 'text-sm font-medium text-blue-800',
      body: 'mt-2 text-sm text-blue-700',
      background: 'rounded-md bg-blue-50 p-4',
    },
  },
  [AlertType.Warning]: {
    icon: ExclamationTriangleIcon,
    style: {
      icon: 'h-5 w-5 text-yellow-400',
      title: 'text-sm font-medium text-yellow-800',
      body: 'mt-2 text-sm text-yellow-700',
      background: 'rounded-md bg-yellow-50 p-4',
    },
  },
  [AlertType.Success]: {
    icon: CheckCircleIcon,
    style: {
      icon: 'h-5 w-5 text-green-400',
      title: 'text-sm font-medium text-green-800',
      body: 'mt-2 text-sm text-green-700',
      background: 'rounded-md bg-green-50 p-4',
    },
  },
  [AlertType.Error]: {
    icon: XCircleIcon,
    style: {
      icon: 'h-5 w-5 text-red-400',
      title: 'text-sm font-medium text-red-800',
      body: 'mt-2 text-sm text-red-700',
      background: 'rounded-md bg-red-50 p-4',
    },
  },
}

const Alert = ({ type, title, children }: AlertProps): JSX.Element => {
  const alert = alertTypes[type]

  return (
    <div className={alert.style.background}>
      <div className="flex">
        <div className="flex-shrink-0">
          <alert.icon className={alert.style.icon} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className={alert.style.title}>{title}</h3>
          <div className={alert.style.body}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export { AlertType }

export default Alert
