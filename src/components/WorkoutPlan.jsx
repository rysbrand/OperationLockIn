import { useState } from 'react'

const plan = [
  {
    day: 'Monday', short: 'MON', focus: 'Lower Body — Quads & Glutes',
    tag: 'HEAVY', tagColor: '#ef4444', icon: '🦵',
    warmup: [
      { name: '90/90 Hip Stretch', sets: '2 × 60s each side', note: 'Protect lower back — keep spine tall' },
      { name: 'Hip Flexor Lunge Stretch', sets: '2 × 45s each side', note: '' },
      { name: 'Glute Bridge', sets: '2 × 15 reps', note: 'Activate glutes before loading spine' },
      { name: 'Leg Swings (front/back + lateral)', sets: '10 each direction', note: '' },
    ],
    lifts: [
      { name: 'Barbell Back Squat', sets: '4 × 5', note: 'Heavy. Brace core hard, keep chest up — spares lower back' },
      { name: 'Romanian Deadlift', sets: '3 × 8', note: 'Hinge at hips, soft knees. Stop if lower back rounds' },
      { name: 'Leg Press', sets: '3 × 10', note: 'Good substitute if back is flaring' },
      { name: 'Walking Lunges', sets: '3 × 12 each leg', note: '' },
      { name: 'Leg Extension', sets: '3 × 12', note: '' },
      { name: 'Standing Calf Raise', sets: '3 × 15', note: '' },
    ],
    cooldown: [
      { name: 'Pigeon Pose', sets: '2 × 90s each side', note: 'Relieves hip flexors and glutes that pull on the lower back' },
      { name: 'Supine Knee-to-Chest', sets: '2 × 60s each side', note: 'Gentle lower back decompression' },
      { name: 'Seated Forward Fold', sets: '2 × 60s', note: '' },
      { name: 'Happy Baby Pose', sets: '1 × 90s', note: '' },
    ],
  },
  {
    day: 'Tuesday', short: 'TUE', focus: 'Upper Body — Push',
    tag: 'HEAVY', tagColor: '#ef4444', icon: '💪',
    warmup: [
      { name: 'Arm Circles', sets: '30s each direction', note: '' },
      { name: 'Band Pull-Aparts', sets: '3 × 15', note: 'Warms up rear delts and scapula' },
      { name: 'Wall Slides', sets: '2 × 12', note: 'Opens thoracic spine — great for posture under load' },
      { name: 'Cat-Cow', sets: '2 × 10 reps', note: 'Mobilizes the whole spine before upper pressing' },
    ],
    lifts: [
      { name: 'Barbell Bench Press', sets: '4 × 5', note: 'Heavy. Retract scapula, feet flat on floor' },
      { name: 'Overhead Press (DB or BB)', sets: '4 × 6', note: "Don't hyperextend lower back at lockout — brace your core" },
      { name: 'Incline DB Press', sets: '3 × 10', note: '' },
      { name: 'Lateral Raises', sets: '3 × 15', note: '' },
      { name: 'Tricep Rope Pushdown', sets: '3 × 12', note: '' },
      { name: 'Chest Dips or Machine Dips', sets: '3 × 10', note: 'Skip if shoulder discomfort' },
    ],
    cooldown: [
      { name: 'Doorway Chest Stretch', sets: '2 × 60s', note: '' },
      { name: 'Cross-Body Shoulder Stretch', sets: '2 × 45s each', note: '' },
      { name: "Child's Pose", sets: '2 × 60s', note: 'Decompresses the spine after overhead pressing' },
      { name: 'Thoracic Rotation (seated)', sets: '10 each side', note: '' },
    ],
  },
  {
    day: 'Wednesday', short: 'WED', focus: 'LISS Cardio + Core',
    tag: 'LISS', tagColor: '#3b82f6', icon: '🚶',
    warmup: [
      { name: '5 min easy walk to warm up', sets: '—', note: '' },
    ],
    lifts: [
      { name: 'Incline Treadmill Walk or Bike', sets: '35–45 min', note: "Zone 2 — you should be able to hold a conversation" },
      { name: 'Dead Bug', sets: '3 × 10 each side', note: 'Core stability without loading the spine' },
      { name: 'Bird Dog', sets: '3 × 12 each side', note: 'Teaches the back to stabilize under light load' },
      { name: 'Pallof Press', sets: '3 × 12 each side', note: 'Anti-rotation core — protects lower back long term' },
      { name: 'Plank', sets: '3 × 30–45s', note: 'No sagging hips' },
      { name: 'Side Plank', sets: '2 × 30s each', note: '' },
    ],
    cooldown: [
      { name: 'Full-Body Stretch Flow', sets: '10–12 min', note: 'Best recovery day for long holds' },
      { name: 'Lying Spinal Twist', sets: '2 × 90s each side', note: 'Priority for lower back — do this every week' },
      { name: 'Hip Flexor Lunge + Reach', sets: '2 × 60s each', note: '' },
      { name: 'Seated Butterfly Stretch', sets: '2 × 60s', note: '' },
      { name: 'Foam Roll: Thoracic Spine + Glutes', sets: '2 min each', note: 'Skip lumbar — direct foam rolling on lower back can aggravate it' },
    ],
  },
  {
    day: 'Thursday', short: 'THU', focus: 'Upper Body — Pull',
    tag: 'HEAVY', tagColor: '#ef4444', icon: '🏋️',
    warmup: [
      { name: 'Dead Hang or Assisted Dead Hang', sets: '2 × 30s', note: 'Decompresses spine before pulling' },
      { name: 'Scapular Pull-Ups', sets: '2 × 10', note: '' },
      { name: 'Band Face Pulls', sets: '2 × 15', note: 'Rear delt + rotator cuff warmup' },
      { name: 'Cat-Cow', sets: '2 × 10', note: '' },
    ],
    lifts: [
      { name: 'Barbell or DB Row', sets: '4 × 6', note: "Heavy. Brace core — don't let lower back round" },
      { name: 'Lat Pulldown', sets: '4 × 8', note: '' },
      { name: 'Seated Cable Row', sets: '3 × 10', note: '' },
      { name: 'Face Pulls', sets: '3 × 15', note: 'Keeps shoulders balanced for longevity' },
      { name: 'Barbell or DB Curl', sets: '3 × 12', note: '' },
      { name: 'Hammer Curl', sets: '3 × 12', note: '' },
    ],
    cooldown: [
      { name: 'Lat Stretch (hanging or doorframe)', sets: '2 × 60s each side', note: '' },
      { name: "Child's Pose with Side Reach", sets: '2 × 60s each side', note: '' },
      { name: 'Supine Knee-to-Chest', sets: '2 × 60s', note: 'Lower back decompression after rowing' },
      { name: 'Neck Rolls', sets: '60s slow', note: '' },
    ],
  },
  {
    day: 'Friday', short: 'FRI', focus: 'Lower Body — Posterior Chain',
    tag: 'HEAVY', tagColor: '#ef4444', icon: '🔥',
    note: '⚠️ Lower back priority day. Go by feel — if your back is already fatigued, reduce weights and prioritize form over load.',
    warmup: [
      { name: 'Hip Circle Rotations', sets: '10 each direction', note: '' },
      { name: 'Glute Bridge', sets: '2 × 20', note: 'Essential — fire glutes before loading hamstrings' },
      { name: 'Leg Swings', sets: '10 each direction', note: '' },
      { name: "World's Greatest Stretch", sets: '5 each side', note: 'Full lower body mobility in one move' },
    ],
    lifts: [
      { name: 'Conventional Deadlift', sets: '4 × 4–5', note: 'HEAVY. Brace like you\'re about to get punched. Drive the floor away.' },
      { name: 'Hip Thrust (Barbell)', sets: '4 × 8', note: 'Glute focus — less spinal load than squats' },
      { name: 'Lying Leg Curl', sets: '3 × 10', note: '' },
      { name: 'Bulgarian Split Squat', sets: '3 × 8 each', note: 'Single-leg — great for catching asymmetries' },
      { name: 'Cable Pull-Through', sets: '3 × 12', note: 'Hip hinge pattern at lower load — great deadlift accessory' },
    ],
    cooldown: [
      { name: 'Pigeon Pose', sets: '2 × 2 min each side', note: 'Longest hold of the week — you earned it' },
      { name: 'Standing Hamstring Stretch', sets: '2 × 60s each', note: '' },
      { name: 'Lying Spinal Twist', sets: '2 × 90s each side', note: 'Non-negotiable after deadlift day' },
      { name: 'Legs Up The Wall', sets: '3–5 min', note: 'Passive recovery, reduces lower back tension' },
      { name: 'Happy Baby Pose', sets: '2 × 60s', note: '' },
    ],
  },
]

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0)
  const [section, setSection] = useState('lifts')
  const current = plan[activeDay]

  return (
    <div style={{ minHeight: '100%', background: '#080808' }}>
      <style>{`
        .ex-row { display: grid; grid-template-columns: 1fr auto; gap: 0.5rem; align-items: start; padding: 0.9rem 1rem; border-radius: 0.6rem; background: #0f0f0f; border: 1px solid #1a1a1a; transition: border-color 0.2s; }
        .ex-row:hover { border-color: #2a2a2a; }
        .ex-name { font-size: 0.88rem; font-weight: 500; color: #e8e4dc; margin-bottom: 0.15rem; }
        .ex-note { font-size: 0.71rem; color: #555; font-style: italic; line-height: 1.4; }
        .ex-right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; flex-shrink: 0; }
        .ex-sets { font-family: 'Bebas Neue', sans-serif; font-size: 0.95rem; letter-spacing: 0.05em; color: #ef4444; white-space: nowrap; text-align: right; }
        .liss .ex-sets { color: #3b82f6; }
        .yt-btn { display: flex; align-items: center; gap: 0.3rem; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #555; background: #161616; border: 1px solid #222; border-radius: 2rem; padding: 0.2rem 0.5rem; cursor: pointer; text-decoration: none; transition: all 0.2s; white-space: nowrap; }
        .yt-btn:hover { color: #ff4444; border-color: #ff444466; background: #1a0a0a; }
        .yt-btn svg { flex-shrink: 0; }
        .sec-label { font-family: 'Bebas Neue', sans-serif; font-size: 0.85rem; letter-spacing: 0.15em; color: #333; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
        .sec-label::after { content: ''; flex: 1; height: 1px; background: #1a1a1a; }
      `}</style>

      {/* Day nav */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1a1a1a', overflowX: 'auto' }}>
        {plan.map((d, i) => (
          <button key={i} onClick={() => { setActiveDay(i); setSection('lifts') }}
            style={{ flexShrink: 0, padding: '0.9rem 1.1rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.95rem', letterSpacing: '0.08em', color: activeDay === i ? '#ef4444' : '#444', borderBottom: activeDay === i ? '2px solid #ef4444' : '2px solid transparent', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
            <span style={{ fontSize: '0.8rem' }}>{d.icon}</span>{d.short}
          </button>
        ))}
        {[{s:'SAT',e:'😴'},{s:'SUN',e:'😴'}].map((r,i) => (
          <button key={`r${i}`} disabled style={{ flexShrink: 0, padding: '0.9rem 1.1rem', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.95rem', letterSpacing: '0.08em', color: '#2a2a2a', borderBottom: '2px solid transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
            <span style={{ fontSize: '0.8rem' }}>{r.e}</span>{r.s}
          </button>
        ))}
      </div>

      <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
        {/* Day header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.2rem 0.7rem', borderRadius: '2rem', background: current.tagColor + '22', color: current.tagColor, border: `1px solid ${current.tagColor}44` }}>{current.tag}</span>
            <span style={{ fontSize: '0.72rem', color: '#444' }}>{current.day}</span>
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', letterSpacing: '0.03em', color: '#e8e4dc', lineHeight: 1 }}>{current.focus}</div>
          {current.note && <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: '#e9c46a', background: '#1a1500', border: '1px solid #3d3010', borderRadius: '0.5rem', padding: '0.7rem 1rem', lineHeight: 1.5 }}>{current.note}</div>}
        </div>

        {current.tag === 'HEAVY' && (
          <div style={{ background: '#0f0800', border: '1px solid #2a1a00', borderRadius: '0.5rem', padding: '0.6rem 0.9rem', fontSize: '0.72rem', color: '#666', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            <strong style={{ color: '#e9c46a' }}>Lower back reminder:</strong> Brace your core on every compound lift. If anything pulls sharply — stop, reduce weight, or use the machine alternative.
          </div>
        )}

        {/* Section tabs */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {[['warmup','🔥 Warm-Up'],['lifts', current.tag === 'LISS' ? '🚶 Cardio + Core' : '🏋️ Lifts'],['cooldown','🧘 Cool-Down']].map(([id, label]) => (
            <button key={id} onClick={() => setSection(id)} style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 0.9rem', borderRadius: '2rem', border: `1px solid ${section === id ? '#444' : '#1a1a1a'}`, background: section === id ? '#1a1a1a' : 'transparent', color: section === id ? '#e8e4dc' : '#444', transition: 'all 0.2s' }}>{label}</button>
          ))}
        </div>

        {/* Exercises */}
        <div className={current.tag === 'LISS' && section === 'lifts' ? 'liss' : ''} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="sec-label">{section === 'warmup' ? 'Flexibility + Activation — 8–12 min' : section === 'lifts' ? current.tag === 'LISS' ? 'Cardio + Core Work' : 'Main Lifts' : 'Flexibility + Recovery — 10–15 min'}</div>
          {current[section].map((ex, i) => {
            const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' exercise tutorial')}`
            return (
              <div className="ex-row" key={i}>
                <div>
                  <div className="ex-name">{ex.name}</div>
                  {ex.note && <div className="ex-note">{ex.note}</div>}
                </div>
                <div className="ex-right">
                  <div className="ex-sets">{ex.sets}</div>
                  <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="yt-btn">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                    </svg>
                    demo
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}