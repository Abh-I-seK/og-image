'use client'

import { useState } from 'react'
import OGCard from './OgCard'

export default function OGImageGenerator() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [ogdata , setOgdata] = useState(null)

  const handleAction = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch("https://cold-flower-2dad.gamingbureau10.workers.dev/?url=" + url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json();
      if(data.length <= 4){
        throw new Error('Failed to generate OG image')
      }
      setOgdata(data);
    } catch (err) {
      setError('Failed to generate OG image. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-2">OG Image Generator</h1>
        <p className="text-center text-gray-400 mb-6">
          Enter a URL to generate its Open Graph image
        </p>
        <form action={async()=>{await handleAction()}} className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="url"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </form>
        
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {ogdata && <OGCard ogData={ogdata}/>}
      </div>
    </div>
  )
}
