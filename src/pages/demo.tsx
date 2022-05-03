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
    <div className="min-h-screen select-none grid auto-cols-fr auto-rows-fr place-items-center">
      <ToggleDarkModeBtn className="hover:(h-8 w-8)" />
      <ToggleLngBtn className="hover:text-xl" />
      <div onClick={back} className="cursor-pointer h-5 w-5 color-base heroicons-outline:arrow-left hover:(h-8 w-8)" />
    </div>
  )
})
