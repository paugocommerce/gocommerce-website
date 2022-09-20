import {React, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';





const Custom404 = () => {
	const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return null
}

export default Custom404