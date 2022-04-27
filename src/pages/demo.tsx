import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn'
import ToggleLngBtn from '@/components/ToggleLngBtn'
import { useTitle } from 'ahooks'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export default React.memo(function DemoPage() {
  useTitle('Demo')

  const navigate = useNavigate()
  const back = () => navigate('/')

  return (
    <div className="divide-y flex flex-col min-h-screen divide-gray-500 select-none">
      <div className="flex-1 grid place-items-center">
        <ToggleDarkModeBtn />
      </div>
      <div className="flex-1 grid place-items-center">
        <ToggleLngBtn />
      </div>
      <div className="flex-1 grid place-items-center">
        <span
          onClick={back}
          className="cursor-pointer h-5 w-5 base-color heroicons-outline:arrow-left"
        />
      </div>
    </div>
  )
})
