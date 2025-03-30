export default function Loading() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] space-y-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-primary border-t-transparent animate-spin"></div>
      </div>
      <p className="text-lg text-muted-foreground">Loading...</p>
    </div>
  )
} 