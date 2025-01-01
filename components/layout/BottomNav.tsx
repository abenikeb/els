'use client'

import { Book, Package, Calendar, User } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface BottomNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const { t } = useLanguage()

  const navItems = [
    { id: 'content', icon: Book, label: t('nav.content') },
    { id: 'packages', icon: Package, label: t('nav.packages') },
    { id: 'appointments', icon: Calendar, label: t('nav.appointments') },
    { id: 'profile', icon: User, label: t('nav.profile') },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-2 px-3 ${
                activeTab === item.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

