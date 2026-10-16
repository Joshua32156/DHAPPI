import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"

// Iframe (ex. Google Maps) avec skeleton tant que le contenu n'est pas chargé.
// Le parent doit être positionné (relative).
function IframeWithSkeleton({
  onLoad,
  ...props
}: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
      <iframe
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
        {...props}
      />
    </>
  )
}

export { IframeWithSkeleton }
