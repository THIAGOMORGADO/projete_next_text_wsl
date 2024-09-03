'use client'
import SignIn from '@/app/screens/SignIn/page'
import { useState } from 'react'

export default function Home() {
  const [theme] = useState(false)

  return (
    <div
      className={
        theme
          ? '"w-screen h-screen dark:bg-[#151515] p-10 "'
          : 'w-screen h-screen bg-[#151515] p-10 '
      }
    >
      <SignIn />s
    </div>
  )
}
