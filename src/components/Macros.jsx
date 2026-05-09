const macroData = [
  { label: 'Calories',   value: 1650, unit: 'cal',  color: '#f4a261', max: 2000, note: '~250 cal deficit for recomposition' },
  { label: 'Protein',    value: 145,  unit: 'g',    color: '#2a9d8f', max: 200,  note: '~0.83g per lb bodyweight (174 lbs)' },
  { label: 'Carbs',      value: 130,  unit: 'g',    color: '#e9c46a', max: 200,  note: 'Fuel for heavy lifting & LISS cardio' },
  { label: 'Fat',        value: 47,   unit: 'g',    color: '#e76f51', max: 100,  note: 'Primarily from avocado, olive oil, eggs' },
]

const mealBreakdown = [
  { meal: '🥣 Breakfast — Greek Yogurt Bowl',   cals: 370, protein: 30, carbs: 45, fat: 8 },
  { meal: '🍚 Lunch — Chicken Quinoa Bowl',     cals: 500, protein: 48, carbs: 40, fat: 13 },
  { meal: '🍤 Dinner A — Shrimp Stir-Fry',     cals: 430, protein: 38, carbs: 42, fat: 10 },
  { meal: '🍳 Dinner B — Turkey Egg Scramble', cals: 400, protein: 42, carbs: 12, fat: 18 },
]

const micronutrients = [
  { name: 'Iron',      sources: 'Spinach, turkey, eggs, chia seeds',      why: 'Energy & oxygen transport — critical for menstruating women', flag: true },
  { name: 'Calcium',   sources: 'Greek yogurt, shrimp',                   why: 'Bone health — 1,000mg/day target for women under 50', flag: false },
  { name: 'Vitamin D', sources: 'Eggs (limited) — consider supplement',   why: 'Calcium absorption & muscle function', flag: true },
  { name: 'Magnesium', sources: 'Chia seeds, quinoa, spinach',            why: 'Muscle recovery, reduces soreness', flag: false },
  { name: 'Folate',    sources: 'Spinach, avocado',                       why: 'Cell repair — important for active women', flag: false },
  { name: 'Omega-3',   sources: 'Shrimp (low) — consider fish oil',       why: 'Inflammation, joint health during heavy lifting', flag: true },
]

export default function Macros() {
  return (
    <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .macro-bar-track { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 0.5rem; }
        .macro-bar-fill { height: 100%; border-radius: 3px; transition: width 0.8s ease; }
        .micro-row { display: grid; grid-template-columns: 120px 1fr; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid #111; align-items: start; }
        .flag { display: inline-block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; padding: 0.1rem 0.4rem; border-radius: 2rem; background: #1a0f00; color: #e9c46a; border: 1px solid #3d2a00; margin-left: 0.4rem; }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', letterSpacing: '0.03em', color: '#e8e4dc', lineHeight: 1, marginBottom: '0.3rem' }}>Daily Macro Targets</div>
        <div style={{ fontSize: '0.75rem', color: '#555' }}>174 lbs · Recomposition · Heavy lifting + LISS</div>
      </div>

      {/* Big macro cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
        {macroData.map(m => (
          <div key={m.label} style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.75rem', padding: '1rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: '0.25rem' }}>{m.label}</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: m.color, lineHeight: 1 }}>{m.value}<span style={{ fontSize: '0.9rem', marginLeft: '0.2rem', opacity: 0.7 }}>{m.unit}</span></div>
            <div className="macro-bar-track">
              <div className="macro-bar-fill" style={{ width: `${(m.value/m.max)*100}%`, background: m.color }} />
            </div>
            <div style={{ fontSize: '0.68rem', color: '#444', marginTop: '0.4rem', lineHeight: 1.4 }}>{m.note}</div>
          </div>
        ))}
      </div>

      {/* Per-meal breakdown */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.12em', color: '#444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          PER MEAL BREAKDOWN <span style={{ flex: 1, height: 1, background: '#1a1a1a', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {mealBreakdown.map(m => (
            <div key={m.meal} style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.6rem', padding: '0.85rem 1rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#e8e4dc', marginBottom: '0.5rem' }}>{m.meal}</div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                {[['#f4a261',m.cals,'cal'],['#2a9d8f',m.protein+'g','pro'],['#e9c46a',m.carbs+'g','carbs'],['#e76f51',m.fat+'g','fat']].map(([c,v,l]) => (
                  <span key={l} style={{ fontSize: '0.72rem', color: '#555' }}><strong style={{ color: c }}>{v}</strong> {l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '0.72rem', color: '#444', marginTop: '0.75rem', padding: '0.6rem 0.9rem', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '0.5rem' }}>
          💡 Dinner alternates A/B — your daily total shifts slightly (~30 cal, ~4g protein). Both are within target range.
        </div>
      </div>

      {/* Treat day note */}
      <div style={{ background: '#1a1508', border: '1px solid #3d3010', borderRadius: '0.6rem', padding: '0.75rem 1rem', fontSize: '0.78rem', color: '#e9c46a', marginBottom: '2rem', lineHeight: 1.6 }}>
        🍺 <strong>Treat day (Fri/Sat):</strong> Budget ~150 cal by reducing rice or quinoa at dinner. One beer ≈ 150 cal. Light beer ≈ 95 cal. Doesn't derail anything if the rest of the week is solid.
      </div>

      {/* Micronutrients */}
      <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.12em', color: '#444', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          MICRONUTRIENTS — ACTIVE WOMEN 32 <span style={{ flex: 1, height: 1, background: '#1a1a1a', display: 'block' }} />
        </div>
        <div style={{ fontSize: '0.7rem', color: '#444', marginBottom: '1rem' }}>⚠️ = worth watching at 1,600 cal · Consider a women's multivitamin as insurance</div>
        {micronutrients.map(m => (
          <div className="micro-row" key={m.name}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e8e4dc' }}>
              {m.name}{m.flag && <span className="flag">WATCH</span>}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#e9c46a', marginBottom: '0.2rem' }}>{m.sources}</div>
              <div style={{ fontSize: '0.7rem', color: '#555', lineHeight: 1.4 }}>{m.why}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
