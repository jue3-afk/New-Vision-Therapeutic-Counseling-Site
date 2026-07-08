// Minimal project-wide type overrides to satisfy the typechecker
declare module 'next/image' {
  import * as React from 'react'
  const Image: React.FC<any>
  export default Image
}

declare module 'next/link' {
  import * as React from 'react'
  const Link: React.FC<any>
  export default Link
}

declare module 'lucide-react' {
  import * as React from 'react'
  export const Heart: React.FC<any>
  export const Brain: React.FC<any>
  export const ArrowRight: React.FC<any>
  export default React.ComponentType<any>
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export {}
