/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ly0zRtfG1BH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginFormModal({authModalOpen,setAuthModalOpen}: any) {
  return (
    <Dialog open={authModalOpen} onOpenChange={setAuthModalOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome back!</DialogTitle>
          <DialogDescription>Enter your email and password to access your account.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </Button>
          <div className="flex justify-between">
          <Link
            href="#"
            className="inline-block w-full text-center text-sm text-muted-foreground underline"
            prefetch={false}
          >
            Forgot your password?
          </Link>
          <Link
            href="/register"
            className="inline-block w-full text-center text-sm text-muted-foreground underline"
            prefetch={false}
          >
            Create new account
          </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}