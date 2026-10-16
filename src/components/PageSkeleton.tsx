import { Skeleton } from "@/components/ui/skeleton";

// Squelette affiché pendant le chargement (lazy) d'une page :
// reprend la structure commune header / bandeau hero / contenu.
const PageSkeleton = () => (
  <div className="min-h-screen bg-background" aria-busy="true">
    <span className="sr-only">Chargement…</span>

    <div className="fixed top-0 inset-x-0 z-50 h-20 border-b bg-background">
      <div className="container-premium h-full flex items-center justify-between">
        <Skeleton className="h-10 w-32" />
        <div className="hidden lg:flex items-center gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-20" />
          ))}
        </div>
        <Skeleton className="h-10 w-10 lg:hidden" />
      </div>
    </div>

    <Skeleton className="mt-20 h-[50vh] w-full rounded-none" />

    <div className="container-premium py-16 space-y-12">
      <div className="max-w-2xl mx-auto space-y-4">
        <Skeleton className="h-8 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PageSkeleton;
