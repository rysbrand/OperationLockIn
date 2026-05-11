const macroData = [
  { label: 'Calories',   value: 1675, unit: 'cal',  color: '#f4a261', max: 2300, note: '~500 cal deficit from estimated TDEE of ~2,100–2,300' },
  { label: 'Protein',    value: 178,  unit: 'g',    color: '#2a9d8f', max: 220,  note: '2.25g/kg — upper end of evidence-based recomposition range (1.6–2.2g/kg)' },
  { label: 'Carbs',      value: 112,  unit: 'g',    color: '#e9c46a', max: 200,  note: 'Add ½ cup rice or quinoa at lunch if energy dips on heavy lift days (+111 cal)' },
  { label: 'Fat',        value: 51,   unit: 'g',    color: '#e76f51', max: 100,  note: 'Moderate fat — essential for hormones, joints & vitamin absorption' },
];

const mealBreakdown = [
  { meal: '🥣 Breakfast — Greek Yogurt Protein Bowl', cals: 373, protein: 45, carbs: 37, fat: 5,  timing: 'Morning' },
  { meal: '🥚 Snack 1 — Hard Boiled Eggs + Fruit',    cals: 260, protein: 17, carbs: 12, fat: 15, timing: 'Mid-morning' },
  { meal: '🍚 Lunch — Chicken Quinoa Bowl',            cals: 486, protein: 52, carbs: 28, fat: 18, timing: 'Midday' },
  { meal: '🍫 Snack 2 — Chocolate Recovery Smoothie', cals: 145, protein: 20, carbs: 13, fat: 2,  timing: 'Post-workout' },
  { meal: '🍤 Dinner A — Shrimp Stir-Fry',             cals: 410, protein: 41, carbs: 37, fat: 5,  timing: 'Evening (alt)' },
  { meal: '🍳 Dinner B — Turkey Egg Scramble',         cals: 413, protein: 48, carbs: 3,  fat: 18, timing: 'Evening (alt)' },
];

const dailyTotals = [
  { label: 'Dinner A day', cals: 1674, protein: 175, carbs: 127, fat: 45 },
  { label: 'Dinner B day', cals: 1677, protein: 182, carbs: 93,  fat: 58 },
];

const micronutrients = [
  { name: 'Iron',      sources: 'Spinach, turkey, eggs, chia seeds',      why: 'Energy & oxygen transport — critical for menstruating women', flag: true },
  { name: 'Calcium',   sources: 'Greek yogurt, shrimp',                   why: 'Bone health — 1,000mg/day target for women under 50', flag: false },
  { name: 'Vitamin D', sources: 'Eggs (limited) — Kirkland multivitamin', why: 'Calcium absorption & muscle function', flag: true },
  { name: 'Magnesium', sources: 'Chia seeds, quinoa, spinach',            why: 'Muscle recovery, reduces soreness', flag: false },
  { name: 'Folate',    sources: 'Spinach, avocado',                       why: 'Cell repair — important for active women', flag: false },
  { name: 'Omega-3',   sources: 'Shrimp (low) — consider fish oil',       why: 'Inflammation, joint health during heavy lifting', flag: true },
];

export default function Macros() {
  return (
    <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
      <style>{`
        .macro-bar-track { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 0.5rem; }
        .macro-bar-fill { height: 100%; border-radius: 3px; transition: width 0.8s ease; }
        .micro-row { display: grid; grid-template-columns: 120px 1fr; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid #111; align-items: start; }
        .flag { display: inline-block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; padding: 0.1rem 0.4rem; border-radius: 2rem; background: #1a0f00; color: #e9c46a; border: 1px solid #3d2a00; margin-left: 0.4rem; }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', letterSpacing: '0.03em', color: '#e8e4dc', lineHeight: 1, marginBottom: '0.3rem' }}>Daily Macro Targets</div>
        <div style={{ fontSize: '0.75rem', color: '#555' }}>174 lbs · 79kg · Recomposition · Heavy lifting + LISS · Math-verified numbers</div>
      </div>

      {/* TDEE context banner */}
      <div style={{ background: '#0a0f1a', border: '1px solid #1a2a3a', borderRadius: '0.6rem', padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#5a8ab0', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        📊 <strong style={{ color: '#7ab0d0' }}>Estimated TDEE:</strong> ~2,100–2,300 cal/day. At 1,698 cal you are in a ~500 cal deficit — the evidence-based sweet spot for fat loss while preserving muscle. Never go below 1,200 cal/day without medical supervision.
      </div>

      {/* Macro cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
        {macroData.map(m => (
          <div key={m.label} style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.75rem', padding: '1rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: '0.25rem' }}>{m.label}</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: m.color, lineHeight: 1 }}>
              {m.value}<span style={{ fontSize: '0.9rem', marginLeft: '0.2rem', opacity: 0.7 }}>{m.unit}</span>
            </div>
            <div className="macro-bar-track">
              <div className="macro-bar-fill" style={{ width: `${Math.min((m.value / m.max) * 100, 100)}%`, background: m.color }} />
            </div>
            <div style={{ fontSize: '0.68rem', color: '#444', marginTop: '0.4rem', lineHeight: 1.4 }}>{m.note}</div>
          </div>
        ))}
      </div>

      {/* Protein science note */}
      <div style={{ background: '#0a1a0a', border: '1px solid #1a3a1a', borderRadius: '0.6rem', padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#5ab05a', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        💪 <strong style={{ color: '#7ad07a' }}>Why 178g protein?</strong> This food set naturally produces ~175–182g/day. That is 2.25g/kg — at the upper end of the evidence-based 1.6–2.2g/kg range for recomposition, which is ideal for muscle retention in a calorie deficit. Protein is spread across 5 eating occasions to maximise muscle protein synthesis throughout the day.
      </div>

      {/* Per-meal breakdown */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.12em', color: '#444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          PER MEAL BREAKDOWN <span style={{ flex: 1, height: 1, background: '#1a1a1a', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {mealBreakdown.map(m => (
            <div key={m.meal} style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.6rem', padding: '0.85rem 1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#e8e4dc' }}>{m.meal}</div>
                <div style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '0.06em', flexShrink: 0, marginLeft: '0.5rem' }}>{m.timing}</div>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                {[['#f4a261', m.cals, 'cal'], ['#2a9d8f', m.protein + 'g', 'pro'], ['#e9c46a', m.carbs + 'g', 'carbs'], ['#e76f51', m.fat + 'g', 'fat']].map(([c, v, l]) => (
                  <span key={l} style={{ fontSize: '0.72rem', color: '#555' }}>
                    <strong style={{ color: c }}>{v}</strong> {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily totals */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.12em', color: '#444', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          DAILY TOTALS BY DINNER <span style={{ flex: 1, height: 1, background: '#1a1a1a', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {dailyTotals.map(d => (
            <div key={d.label} style={{ background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.75rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444', marginBottom: '0.6rem' }}>{d.label}</div>
              {[['#f4a261', d.cals, 'cal'], ['#2a9d8f', d.protein + 'g', 'protein'], ['#e9c46a', d.carbs + 'g', 'carbs'], ['#e76f51', d.fat + 'g', 'fat']].map(([c, v, l]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '0.7rem', color: '#555' }}>{l}</span>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.9rem', color: c }}>{v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ fontSize: '0.72rem', color: '#7d7b7b', marginTop: '0.75rem', padding: '0.6rem 0.9rem', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '0.5rem', lineHeight: 1.5 }}>
          💡 On heavy lift days where energy dips, add ½ cup cooked quinoa to lunch (+111 cal, +4g protein). Carbs fuel the lifts and spare protein from being used as energy instead of muscle building.
        </div>
      </div>

      {/* Treat day */}
      {/* <div style={{ background: '#1a1508', border: '1px solid #3d3010', borderRadius: '0.6rem', padding: '0.75rem 1rem', fontSize: '0.78rem', color: '#e9c46a', marginBottom: '2rem', lineHeight: 1.6 }}>
        🍺 <strong>Treat day (Fri/Sat):</strong> Budget ~150 cal by reducing rice at dinner. One regular beer ≈ 150 cal. Light beer ≈ 95 cal. One treat/week won't derail recomposition if the other 6 days are on point.
      </div> */}

      {/* RD disclaimer */}
      {/* <div style={{ background: '#1a0a0a', border: '1px solid #3a1a1a', borderRadius: '0.6rem', padding: '0.75rem 1rem', fontSize: '0.72rem', color: '#a05050', marginBottom: '2rem', lineHeight: 1.6 }}>
        ⚕️ <strong style={{ color: '#c07070' }}>Note:</strong> These are evidence-based estimates, not a clinical prescription. A Registered Dietitian can calculate your exact needs from body composition and lab work. Consider a one-off RD consultation — many offer single sessions without long-term commitment.
      </div> */}

      {/* Micronutrients */}
      {/* <div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.12em', color: '#444', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          MICRONUTRIENTS — ACTIVE WOMEN 32 <span style={{ flex: 1, height: 1, background: '#1a1a1a', display: 'block' }} />
        </div>
        <div style={{ fontSize: '0.7rem', color: '#444', marginBottom: '1rem' }}>⚠️ = worth watching · Kirkland women's multivitamin covers the gaps</div>
        {micronutrients.map(m => (
          <div className="micro-row" key={m.name}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e8e4dc' }}>
              {m.name}{m.flag ? <span className="flag">WATCH</span> : null}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#e9c46a', marginBottom: '0.2rem' }}>{m.sources}</div>
              <div style={{ fontSize: '0.7rem', color: '#555', lineHeight: 1.4 }}>{m.why}</div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
