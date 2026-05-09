import React, {useState} from 'react'

const flagAssetMap: Record<string, string> = {
  us: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666ca61871315eae5379a32_USA%20Flag.png',
  au: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666ca675b8c4493235ade25_Aus%20flat.png',
  nz: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/668c1de2bce4364450c63d8b_New-zealand.png',
  ae: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/6666ca67c82529502e3cdaa5_UAE%20flag.png',
  in: 'https://cdn.prod.website-files.com/658d4930f1d45343af3cc4b5/669fcade5c5c7db27c4fbba7_NF-Flag.png',
  gb: 'https://flagcdn.com/w80/gb.png',
}

const nameMap: Record<string, string> = {
  us: 'United States',
  au: 'Australia',
  nz: 'New Zealand',
  ae: 'United Arab Emirates',
  in: 'India',
  gb: 'United Kingdom',
}

const emojiMap: Record<string, string> = {
  us: '🇺🇸',
  au: '🇦🇺',
  nz: '🇳🇿',
  ae: '🇦🇪',
  in: '🇮🇳',
  gb: '🇬🇧',
}

export default function Flag({ country = 'us', size = 20 }: { country?: string, size?: number }) {
  const code = country.toLowerCase()
  const [imgError, setImgError] = useState(false)
  const label = nameMap[code] || country
  const src = flagAssetMap[code]
  const fallback = emojiMap[code] || '🏳️'

  return (
    <span className="inline-flex items-center" aria-label={label} role="img">
      {src && !imgError ? (
        <img
          src={src}
          alt={`${label} flag`}
          width={size}
          height={Math.round(size * 0.66)}
          onError={() => setImgError(true)}
          style={{ width: size, height: 'auto', display: 'inline-block' }}
        />
      ) : (
        <span style={{ fontSize: size }}>{fallback}</span>
      )}
    </span>
  )
}
