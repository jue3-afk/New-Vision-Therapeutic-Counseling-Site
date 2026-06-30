'use client'

import * as React from 'react'

const psychologyTodayScriptAttributes = {
  'data-badge': '14',
  'data-id': '395428',
  'data-code':
    'aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xNC9wcm9maWxlLzM5NTQyOD9jYWxsYmFjaz1zeGNhbGxiYWNr',
}

type BadgeScriptProps = {
  src: string
  attributes?: Record<string, string>
  children: React.ReactNode
}

function BadgeScript({ src, attributes, children }: BadgeScriptProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.type = 'text/javascript'

    if (attributes) {
      Object.entries(attributes).forEach(([name, value]) => {
        script.setAttribute(name, value)
      })
    }

    containerRef.current?.appendChild(script)

    return () => {
      script.remove()
    }
  }, [attributes, src])

  return <div ref={containerRef}>{children}</div>
}

export function PsychologyTodayBadge() {
  return (
    <BadgeScript
      src="https://member.psychologytoday.com/verified-seal.js"
      attributes={psychologyTodayScriptAttributes}
    >
      <a
        href="https://www.psychologytoday.com/profile/395428"
        className="sx-verified-seal"
        aria-label="Verified Psychology Today profile"
      />
    </BadgeScript>
  )
}

export function CredlyBadge() {
  return (
    <BadgeScript src="https://cdn.credly.com/assets/utilities/embed.js">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="a945927a-9014-4872-b6b5-6932d2604a99"
        data-share-badge-host="https://www.credly.com"
      />
    </BadgeScript>
  )
}
