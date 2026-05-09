import { useState } from 'react'

const meals = {
  B:  { id:'B',  label:'Breakfast', name:'Greek Yogurt Bowl',    emoji:'🥣', cals:370, protein:30, carbs:45, fat:8,  details:'1 cup Greek yogurt + ½ cup frozen mango + ½ cup mixed berries + 1 tbsp chia seeds + strawberries', color:'#f4a261' },
  L:  { id:'L',  label:'Lunch',     name:'Chicken Quinoa Bowl',  emoji:'🍚', cals:500, protein:48, carbs:40, fat:13, details:'5oz chicken + ½ cup quinoa + 1 cup spinach + ½ avocado + stir-fry veg blend', color:'#2a9d8f' },
  DA: { id:'DA', label:'Dinner',    name:'Shrimp Stir-Fry',      emoji:'🍤', cals:430, protein:38, carbs:42, fat:10, details:'6oz shrimp + ¾ cup jasmine rice + stir-fry veg blend + olive oil + everything bagel seasoning', color:'#e76f51' },
  DB: { id:'DB', label:'Dinner',    name:'Turkey Egg Scramble',  emoji:'🍳', cals:400, protein:42, carbs:12, fat:18, details:'4oz ground turkey + ½ cup liquid egg whites + 2 whole eggs + 1 cup spinach + olive oil', color:'#457b9d' },
}

const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const schedule = [
  ['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],
  ['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],
  ['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],
  ['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],['B','L','DA'],['B','L','DB'],
]
const treatDays = [5,6,12,13,19,20,26,27]

export default function MealPlan() {
  const [week, setWeek] = useState(0)
  const [activeDay, setActiveDay] = useState(null)
  const [activeMeal, setActiveMeal] = useState(null)

  const weekStart = week * 7
  const weekDays = schedule.slice(weekStart, weekStart + 7)
  const avgCals = Math.round(weekDays.reduce((s,d) => s + d.reduce((ss,m) => ss + meals[m].cals, 0), 0) / 7)
  const avgPro  = Math.round(weekDays.reduce((s,d) => s + d.reduce((ss,m) => ss + meals[m].protein, 0), 0) / 7)

  const displayMeals = activeDay !== null ? schedule[weekStart + activeDay] : ['B','L','DA']

  return (
    <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
      <style>{`
        .meal-card { border-radius: 0.75rem; border: 1px solid #1a1a1a; background: #0f0f0f; padding: 1.1rem; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden; }
        .meal-card:hover { border-color: #2a2a2a; background: #141414; transform: translateY(-1px); }
        .meal-card.open { border-color: #333; background: #141414; }
      `}</style>

      {/* Week tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[0,1,2,3].map(w => (
          <button key={w} onClick={() => { setWeek(w); setActiveDay(null); setActiveMeal(null) }}
            style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '2rem', border: `1px solid ${week===w?'#f4a261':'#1a1a1a'}`, background: week===w?'#1a0f00':'transparent', color: week===w?'#f4a261':'#444', transition: 'all 0.2s' }}>
            Week {w+1}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[['Avg Calories', `${avgCals} cal`, '#f4a261'], ['Avg Protein', `${avgPro}g`, '#2a9d8f'], ['Treat Days', 'Fri & Sat 🍺', '#e9c46a']].map(([l,v,c]) => (
          <div key={l} style={{ fontSize: '0.75rem', background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.5rem', padding: '0.5rem 0.9rem' }}>
            <span style={{ color: '#444' }}>{l}: </span><strong style={{ color: c }}>{v}</strong>
          </div>
        ))}
      </div>

      {/* Day selector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {days.map((d,i) => {
          const gi = weekStart + i
          const isTreat = treatDays.includes(gi)
          return (
            <button key={i} onClick={() => { setActiveDay(activeDay===i?null:i); setActiveMeal(null) }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.65rem 0.2rem', borderRadius: '0.6rem', border: `1px solid ${activeDay===i?'#f4a261':'#1a1a1a'}`, background: activeDay===i?'#1a0f00':'#0f0f0f', cursor: 'pointer', transition: 'all 0.2s' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#444', marginBottom: '0.2rem' }}>{d}</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: '#e8e4dc' }}>D{gi+1}</span>
              {isTreat && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#e9c46a', marginTop: '0.25rem' }} />}
            </button>
          )
        })}
      </div>

      {/* Treat banner */}
      {activeDay !== null && treatDays.includes(weekStart + activeDay) && (
        <div style={{ background: '#1a1508', border: '1px solid #3d3010', borderRadius: '0.6rem', padding: '0.65rem 1rem', fontSize: '0.78rem', color: '#e9c46a', marginBottom: '1rem' }}>
          🌟 Treat day — trim ~150 cal from rice or quinoa at dinner to make room. Enjoy it!
        </div>
      )}

      {/* Daily total */}
      {activeDay !== null && (() => {
        const dm = schedule[weekStart + activeDay]
        const totals = dm.reduce((a,m) => ({ cals: a.cals+meals[m].cals, protein: a.protein+meals[m].protein, carbs: a.carbs+meals[m].carbs, fat: a.fat+meals[m].fat }), {cals:0,protein:0,carbs:0,fat:0})
        return (
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.75rem', padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
            {[['Calories', totals.cals, '#f4a261',''], ['Protein', totals.protein, '#2a9d8f','g'], ['Carbs', totals.carbs, '#e9c46a','g'], ['Fat', totals.fat, '#e76f51','g']].map(([l,v,c,u]) => (
              <div key={l}>
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#444', marginBottom: '0.1rem' }}>{l}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: c }}>{v}{u}</div>
              </div>
            ))}
          </div>
        )
      })()}

      {/* Meal cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {activeDay === null && <p style={{ fontSize: '0.75rem', color: '#333', textAlign: 'center', marginBottom: '0.5rem' }}>Select a day above to see totals · Showing default meal set</p>}
        {displayMeals.map(mId => {
          const meal = meals[mId]
          const isOpen = activeMeal === mId
          return (
            <div key={mId} className={`meal-card${isOpen?' open':''}`} onClick={() => setActiveMeal(isOpen?null:mId)}
              style={{ borderTopColor: isOpen ? meal.color : undefined }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{meal.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: '0.15rem' }}>{meal.label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: '#e8e4dc', marginBottom: '0.5rem' }}>{meal.name}</div>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {[['#f4a261',meal.cals,'cal'],['#2a9d8f',meal.protein+'g','protein'],['#e9c46a',meal.carbs+'g','carbs'],['#e76f51',meal.fat+'g','fat']].map(([c,v,l]) => (
                      <span key={l} style={{ fontSize: '0.72rem', color: '#666' }}><strong style={{ color: c, fontSize: '0.82rem' }}>{v}</strong> {l}</span>
                    ))}
                  </div>
                  {isOpen && <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #222', fontSize: '0.78rem', color: '#666', lineHeight: 1.5 }}>{meal.details}</div>}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#333', flexShrink: 0, marginTop: '0.2rem' }}>{isOpen ? '▲' : '▼'}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
