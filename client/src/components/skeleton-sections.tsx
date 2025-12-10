import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function HeroSkeleton() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-muted">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <Skeleton className="h-4 w-48 mx-auto bg-white/20" />
          <Skeleton className="h-20 w-80 md:w-96 mx-auto bg-white/20" />
          <Skeleton className="h-10 w-64 mx-auto bg-white/20" />
          <Skeleton className="h-16 w-72 md:w-80 mx-auto bg-white/20" />
          <Skeleton className="h-6 w-56 mx-auto bg-white/20" />
        </div>
      </div>
    </section>
  );
}

export function EventDetailsSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-4 w-32 mx-auto mb-2" />
          <Skeleton className="h-10 w-64 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start gap-4">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Skeleton className="h-[400px] rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export function TraditionsSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-4 w-48 mx-auto mb-2" />
          <Skeleton className="h-10 w-72 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mt-4">
                  {[...Array(6)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSkeleton() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Skeleton className="h-4 w-48 mx-auto mb-2" />
          <Skeleton className="h-10 w-80 mx-auto" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-14 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
