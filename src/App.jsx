import { useState } from 'react'
import WorkoutPlan from './components/WorkoutPlan.jsx'
import MealPlan from './components/MealPlan.jsx'
import Macros from './components/Macros.jsx'
import GroceryList from './components/GroceryList.jsx'

const tabs = [
  { id: 'workout', label: 'Program', icon: '🏋️' },
  { id: 'meals',   label: 'Meals',   icon: '🍽️' },
  { id: 'macros',  label: 'Macros',  icon: '📊' },
  { id: 'grocery', label: 'Grocery', icon: '🛒' },
]

export default function App() {
  const [active, setActive] = useState('workout')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      {/* Top bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.25rem',
        borderBottom: '1px solid #1a1a1a',
        background: '#080808',
        flexShrink: 0,
        gap: '1rem',
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          color: '#e8e4dc',
          whiteSpace: 'nowrap',
        }}>
          OPERATION <span style={{ color: '#ef4444' }}>LOCK-IN</span>
        </div>

        <nav style={{ display: 'flex', gap: '0.25rem' }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.15rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === t.id ? '#ef4444' : '#555',
                background: active === t.id ? '#1a0a0a' : 'transparent',
                border: `1px solid ${active === t.id ? '#3a0a0a' : 'transparent'}`,
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: '1rem' }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Page content */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {active === 'workout' && <WorkoutPlan />}
        {active === 'meals'   && <MealPlan />}
        {active === 'macros'  && <Macros />}
        {active === 'grocery' && <GroceryList />}
      </main>
    </div>
  )
}
