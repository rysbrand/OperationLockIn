import { useState } from 'react';

const meals = {
  B: {
    id: 'B',
    label: 'Breakfast',
    name: 'Greek Yogurt Protein Bowl',
    emoji: '🥣',
    cals: 373,
    protein: 45,
    carbs: 37,
    fat: 5,
    details: '1 cup Kirkland Greek yogurt (130 cal / 23g protein) + 1 scoop pea protein powder (~100 cal / ~20g protein) + ½ cup frozen mango (~50 cal) + ½ cup mixed berries (~35 cal) + 1 tbsp chia seeds (~58 cal / 2g protein)',
    color: '#f4a261',
    timing: 'Morning',
  },
  S1: {
    id: 'S1',
    label: 'Snack 1',
    name: 'Hard Boiled Eggs + Fruit',
    emoji: '🥚',
    cals: 260,
    protein: 17,
    carbs: 12,
    fat: 15,
    details: '2 hard boiled eggs (~140 cal / 12g protein / 10g fat) + 2 tbsp Kirkland hummus (~70 cal / 4g protein) + 1 cup strawberries (~50 cal / 1g protein)',
    color: '#e9c46a',
    timing: 'Mid-morning',
  },
  L: {
    id: 'L',
    label: 'Lunch',
    name: 'Chicken Quinoa Bowl',
    emoji: '🍚',
    cals: 486,
    protein: 52,
    carbs: 28,
    fat: 18,
    details: '5oz cooked chicken breast (223 cal / 45g protein / 4.6g fat) + ½ cup cooked quinoa (111 cal / 4g protein / 20g carbs) + 1 cup baby spinach (7 cal / 1g protein) + ½ cup stir-fry veg (~25 cal / 1g protein) + ½ avocado (120 cal / 1.5g protein / 11g fat) + garlic lime seasoning (0 cal)',
    color: '#2a9d8f',
    timing: 'Midday',
  },
  S2: {
    id: 'S2',
    label: 'Snack 2',
    name: 'Chocolate Recovery Smoothie',
    emoji: '🍫',
    cals: 145,
    protein: 20,
    carbs: 13,
    fat: 2,
    details: '1 scoop chocolate pea protein powder (~100 cal / 20g protein) + ½ cup frozen mango or mixed berries (~45 cal / 0.5g protein) — blend with water and ice. Fast-digesting post-workout protein. On some days swap for 3oz cold flank steak strips + green beans instead.',
    color: '#a78bfa',
    timing: 'Post-workout',
  },
  DA: {
    id: 'DA',
    label: 'Dinner',
    name: 'Shrimp Stir-Fry',
    emoji: '🍤',
    cals: 410,
    protein: 41,
    carbs: 37,
    fat: 5,
    details: '8oz Kirkland Argentine shrimp (~160 cal / 36g protein / 1g fat) + ¾ cup cooked jasmine rice (~160 cal / 3g protein / 34g carbs) + 1 cup stir-fry veg blend (~50 cal / 2g protein) + 1 tsp olive oil (~40 cal)',
    color: '#e76f51',
    timing: 'Evening',
  },
  DB: {
    id: 'DB',
    label: 'Dinner',
    name: 'Turkey Egg Scramble',
    emoji: '🍳',
    cals: 413,
    protein: 48,
    carbs: 3,
    fat: 18,
    details: '4oz 93% lean ground turkey (~160 cal / 22g protein / 8g fat) + ½ cup liquid egg whites (~63 cal / 13g protein) + 2 whole eggs (~143 cal / 13g protein / 9g fat) + 1 cup spinach + 1 tsp olive oil (~47 cal)',
    color: '#457b9d',
    timing: 'Evening',
  },
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const schedule = [
  ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'],
  ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'],
  ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'],
  ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'],
  ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'],
  ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'],
  ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'],
  ['B','S1','L','S2','DB'], ['B','S1','L','S2','DA'], ['B','S1','L','S2','DB'],
];

const treatDays = [5, 6, 12, 13, 19, 20, 26, 27];

export default function MealPlan() {
  const [week, setWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const [activeMeal, setActiveMeal] = useState(null);

  const weekStart = week * 7;
  const weekDays = schedule.slice(weekStart, weekStart + 7);
  const avgCals = Math.round(weekDays.reduce((s, d) => s + d.reduce((ss, m) => ss + meals[m].cals, 0), 0) / 7);
  const avgPro = Math.round(weekDays.reduce((s, d) => s + d.reduce((ss, m) => ss + meals[m].protein, 0), 0) / 7);

  const displayMeals = activeDay !== null ? schedule[weekStart + activeDay] : ['B', 'S1', 'L', 'S2', 'DA'];

  return (
    <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
      <style>{`
        .meal-card { border-radius: 0.75rem; border: 1px solid #1a1a1a; background: #0f0f0f; padding: 1.1rem; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden; }
        .meal-card:hover { border-color: #2a2a2a; background: #141414; transform: translateY(-1px); }
        .meal-card.open { border-color: #333; background: #141414; }
      `}</style>

      {/* Week tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[0, 1, 2, 3].map(w => (
          <button
            key={w}
            onClick={() => { setWeek(w); setActiveDay(null); setActiveMeal(null); }}
            style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '2rem', border: `1px solid ${week === w ? '#f4a261' : '#1a1a1a'}`, background: week === w ? '#1a0f00' : 'transparent', color: week === w ? '#f4a261' : '#444', transition: 'all 0.2s' }}
          >
            Week {w + 1}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[
          ['Avg Calories', `${avgCals} cal`, '#f4a261'],
          ['Avg Protein', `${avgPro}g`, '#2a9d8f'],
          ['Structure', '3 meals + 2 snacks', '#a78bfa'],
          ['Treat Days', 'Fri & Sat 🍺', '#e9c46a'],
        ].map(([l, v, c]) => (
          <div key={l} style={{ fontSize: '0.75rem', background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.5rem', padding: '0.5rem 0.9rem' }}>
            <span style={{ color: '#444' }}>{l}: </span><strong style={{ color: c }}>{v}</strong>
          </div>
        ))}
      </div>

      {/* Day selector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {days.map((d, i) => {
          const gi = weekStart + i;
          const isTreat = treatDays.includes(gi);
          return (
            <button
              key={i}
              onClick={() => { setActiveDay(activeDay === i ? null : i); setActiveMeal(null); }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.65rem 0.2rem', borderRadius: '0.6rem', border: `1px solid ${activeDay === i ? '#f4a261' : '#1a1a1a'}`, background: activeDay === i ? '#1a0f00' : '#0f0f0f', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#444', marginBottom: '0.2rem' }}>{d}</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: '#e8e4dc' }}>D{gi + 1}</span>
              {isTreat ? <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#e9c46a', marginTop: '0.25rem' }} /> : null}
            </button>
          );
        })}
      </div>

      {/* Treat banner */}
      {activeDay !== null && treatDays.includes(weekStart + activeDay) ? (
        <div style={{ background: '#1a1508', border: '1px solid #3d3010', borderRadius: '0.6rem', padding: '0.65rem 1rem', fontSize: '0.78rem', color: '#e9c46a', marginBottom: '1rem' }}>
          🌟 Treat day — trim ~150 cal by reducing rice at dinner. Enjoy that beer or sweet!
        </div>
      ) : null}

      {/* Daily total */}
      {activeDay !== null ? (() => {
        const dm = schedule[weekStart + activeDay];
        const totals = dm.reduce((a, m) => ({
          cals: a.cals + meals[m].cals,
          protein: a.protein + meals[m].protein,
          carbs: a.carbs + meals[m].carbs,
          fat: a.fat + meals[m].fat,
        }), { cals: 0, protein: 0, carbs: 0, fat: 0 });
        return (
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', background: '#0f0f0f', border: '1px solid #1a1a1a', borderRadius: '0.75rem', padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
            {[['Calories', totals.cals, '#f4a261', ''], ['Protein', totals.protein, '#2a9d8f', 'g'], ['Carbs', totals.carbs, '#e9c46a', 'g'], ['Fat', totals.fat, '#e76f51', 'g']].map(([l, v, c, u]) => (
              <div key={l}>
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#444', marginBottom: '0.1rem' }}>{l}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: c }}>{v}{u}</div>
              </div>
            ))}
          </div>
        );
      })() : null}

      {/* Meal cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {activeDay === null ? (
          <p style={{ fontSize: '0.75rem', color: '#333', textAlign: 'center', marginBottom: '0.5rem' }}>
            Select a day above to see totals · Showing default meal set
          </p>
        ) : null}
        {displayMeals.map(mId => {
          const meal = meals[mId];
          const isOpen = activeMeal === mId;
          return (
            <div
              key={mId}
              className={`meal-card${isOpen ? ' open' : ''}`}
              onClick={() => setActiveMeal(isOpen ? null : mId)}
              style={{ borderTopColor: isOpen ? meal.color : undefined }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{meal.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.1rem' }}>
                    <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444' }}>{meal.label}</div>
                    <div style={{ fontSize: '0.6rem', color: '#333' }}>{meal.timing}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: '#e8e4dc', marginBottom: '0.5rem' }}>{meal.name}</div>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {[['#f4a261', meal.cals, 'cal'], ['#2a9d8f', meal.protein + 'g', 'protein'], ['#e9c46a', meal.carbs + 'g', 'carbs'], ['#e76f51', meal.fat + 'g', 'fat']].map(([c, v, l]) => (
                      <span key={l} style={{ fontSize: '0.72rem', color: '#666' }}>
                        <strong style={{ color: c, fontSize: '0.82rem' }}>{v}</strong> {l}
                      </span>
                    ))}
                  </div>
                  {isOpen ? (
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #222', fontSize: '0.78rem', color: '#666', lineHeight: 1.6 }}>
                      {meal.details}
                    </div>
                  ) : null}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#333', flexShrink: 0, marginTop: '0.2rem' }}>{isOpen ? '▲' : '▼'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
