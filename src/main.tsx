import ErrorFallback from '@/components/ErrorFallback'
import PageLoading from '@/components/PageLoading'
import '@/modules/i18n'
import { log } from '@/modules/utils'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './index.css'

log(`Build time: ${BUILD_TIME}`)

const Router = React.lazy(() => import('@/modules/DynamicRouter'))

const container = document.getElementById('root') || document.body

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<PageLoading />}>
        <Router />
      </React.Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
)
