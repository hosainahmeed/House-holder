'use client'
import Spinner from "@/components/common/Spinner";
import { useEffect, useState } from "react"


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const [designLoad, setDesignLoad] = useState(true)
  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     setDesignLoad(false)
  //   }, 200);
  //   return () => clearTimeout(time);
  // }, []);

  // if (designLoad) {
  //   return <Spinner />
  // }
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  )
}
