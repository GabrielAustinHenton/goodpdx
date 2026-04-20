'use client'

import { useUser } from '@clerk/nextjs'

export function useAuth() {
  const { isSignedIn, user, isLoaded } = useUser()
  return {
    isLoggedIn: !!isSignedIn,
    user,
    isLoaded,
  }
}
