import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export function AuthModal() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton mode="modal">
        <button className="cn-primary-btn hover:bg-hoverbtn">
          Sign In
        </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
      <div className="relative group">
          <UserButton 
            appearance={{
              elements: {
                colorPrimary: 'cn-glass',
                userPreviewMainIdentifier: 'text-[#6247FF]',
              }
            }}
          />
          <div className="absolute inset-0 -z-10 bg-[#6247FF]/10 blur-xl" />
        </div>
      </SignedIn>
    </div> 
  )
}