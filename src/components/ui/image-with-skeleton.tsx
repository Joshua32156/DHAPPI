import * as React from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

// Affiche un skeleton tant que l'image n'est pas chargée, puis fait un fondu.
// Le parent doit être positionné (relative) : le skeleton s'étend sur inset-0.
function ImageWithSkeleton({
  className,
  onLoad,
  onError,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const ref = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState(false)

  // Image déjà en cache : onLoad a pu se déclencher avant l'hydratation
  React.useEffect(() => {
    if (ref.current?.complete) setLoaded(true)
  }, [])

  return (
    <>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
      <img
        ref={ref}
        className={cn(
          "transition-[opacity,transform] duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
        onError={(e) => {
          setLoaded(true)
          onError?.(e)
        }}
        {...props}
      />
    </>
  )
}

export { ImageWithSkeleton }
