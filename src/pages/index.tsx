import { useTitle } from 'ahooks'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export default React.memo(function IndexPage() {
  useTitle('Vite React')
  const navigate = useNavigate()

  return (
    <div className="h-screen auto-cols-fr auto-rows-fr grid place-items-center" onClick={() => navigate('/demo')}>
      <span className="cursor-pointer h-5 w-5 heroicons-outline:arrow-right hover:(h-8 w-8) " />
    </div>
  )
})
