'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/contexts/LanguageContext'

export default function Signup() {
  const [role, setRole] = useState('client')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert(t('signup.passwordMismatch'))
      return
    }
    // Here you would typically make an API call to create the user account
    // For demonstration purposes, we'll just simulate a successful signup
    document.cookie = `session=authenticated; path=/;`
    document.cookie = `userRole=${role}; path=/;`
    router.push(`/${role}/dashboard`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{t('signup.title')}</CardTitle>
          <CardDescription>{t('signup.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                {t('signup.roleLabel')}
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="client">{t('signup.roleClient')}</option>
                <option value="lawyer">{t('signup.roleLawyer')}</option>
                <option value="admin">{t('signup.roleAdmin')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('signup.emailLabel')}
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t('signup.passwordLabel')}
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                {t('signup.confirmPasswordLabel')}
              </label>
              <Input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              {t('signup.submitButton')}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-600">
            {t('signup.loginPrompt')} <a href="/login" className="text-blue-600 hover:underline">{t('signup.loginLink')}</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

