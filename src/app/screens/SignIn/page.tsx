'use client'

import Button from '@/app/components/Button'
import TextInput from '@/app/components/Input'
import Image from 'next/image'

import React, { useState } from 'react'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

import Logo from '@/app/assets/img/logo.png'
import banner from '@/app/assets/img/backfund.png'
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(true)

  function toggleShowPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setShowPassword(!showPassword) // Corrected to toggle the password visibility
  }

  return (
    <div className=" w-100  h-[100%] rounded-3xl flex ">
      <div className=" w-[100%]  sm:w-[100%] p-5 sm:px-32 sm:py-32  items-center ">
        <div className=" w-full flex items-center justify-center h-full flex-col gap-2 ">
          <div className="flex  flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center  w-32 h-32 rounded-3xl text-white">
              <Image src={Logo} alt="logo" />
            </div>
            <h1 className=" font-semibold text-2xl text-white">
              Uma texto do saas
            </h1>
            <p className=" font-semibold text-base text-[#6c757d]">
              Uma descrição do sistema
            </p>
          </div>
          <form className="flex  flex-col gap-4">
            <div className="flex bg-white rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center">
                <FiMail className="w-5 h-5 " color="#A280FF" />
              </div>
              <TextInput
                className="w-full px-3 py-2  text-gray-900 placeholder-gray-600 rounded-xl outline-none font-normal text-sm"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="flex bg-white rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center">
                <FiLock className="w-5 h-5 " color="#A280FF" />
              </div>
              <TextInput
                type="password"
                placeholder="Senha"
                className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-600 rounded-xl outline-none font-normal"
              />
              <div className="flex items-center justify-center px-3">
                <Button className="" onClick={toggleShowPassword}>
                  {showPassword ? (
                    <FiEye className="w-5 h-5 " color="#A280FF" />
                  ) : (
                    <FiEyeOff className="w-5 h-5 " color="#A280FF" />
                  )}
                </Button>
              </div>
            </div>

            <Button className="w-full h- bg-blue-500 h-12 items-center justify-center flex rounded-xl text-white">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
