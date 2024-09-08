
"use client"

import { Button } from "@/components/ui/button"
import { useAuthActions } from "@convex-dev/auth/react"
export default function Home() {

  const {signOut} = useAuthActions()
  return (
    <div>
      Logged In
      <Button className="bg-gray-50 text-black" onClick={() => signOut()}>
        Log Out
        
      </Button>
    </div>
  )
}
