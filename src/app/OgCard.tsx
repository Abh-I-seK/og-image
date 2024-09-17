import Link from "next/link"

export interface OGData {
  'image': string
  'title': string
  'site_name': string
  'description': string
  'url': string
}

export default function OGCard({ ogData }: { ogData: OGData }) {
  return (
    <Link href={ogData.url}>
    <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg grid grid-cols-2 max-h-[160px] mt-3 border-1 border-black">
      <div className="relative h-48 w-full mx-auto">
        <img
          src={ogData['image']}
          alt={ogData['title']}
          className='object-fill'
        />
      </div>
      <div className="p-3">
        <div className="text-sm text-blue-400 mb-2">{ogData['site_name']}</div>
        <h2 className="text-md font-bold text-white mb-2 line-clamp-2">{ogData['title']}</h2>
        <p className="text-gray-400 mb-4 line-clamp-2">{ogData['description']}</p>
      </div>
    </div>
    </Link>
  )
}