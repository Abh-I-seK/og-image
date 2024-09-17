import Image from 'next/image'

export interface OGData {
  'og:image': string
  'og:title': string
  'og:site_name': string
  'og:description': string
  'og:url': string
}

export default function OGCard({ ogData }: { ogData: OGData }) {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 w-full">
        <img
          src={ogData['og:image']}
          alt={ogData['og:title']}
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-400 mb-2">{ogData['og:site_name']}</div>
        <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">{ogData['og:title']}</h2>
        <p className="text-gray-400 mb-4 line-clamp-3">{ogData['og:description']}</p>
        <a
          href={ogData['og:url']}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {ogData['og:url']}
        </a>
      </div>
    </div>
  )
}