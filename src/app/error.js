'use client'

import { useEffect } from 'react'
import Button from './component/Button'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-4xl font-bold font-bwmss01 mb-4">Something went wrong!</h2>
      <p className="text-xl font-aeonik mb-8 text-gray-300">
        We apologize for the inconvenience.
      </p>
      <div className="flex gap-4">
        <Button 
          onClick={() => reset()} 
          name="Try again" 
          type="primary" 
        />
      </div>
    </div>
  )
}
