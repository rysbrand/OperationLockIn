import { useState } from 'react';

const plan = [
  {
    day: 'Monday',
    short: 'MON',
    focus: 'Lower Body — Quads & Glutes',
    tag: 'HEAVY',
    tagColor: '#ef4444',
    icon: '🦵',
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
    day: 'Tuesday',
    short: 'TUE',
    focus: 'Upper Body — Push',
    tag: 'HEAVY',
    tagColor: '#ef4444',
    icon: '💪',
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
    day: 'Wednesday',
    short: 'WED',
    focus: 'LISS Cardio + Core',
    tag: 'LISS',
    tagColor: '#3b82f6',
    icon: '🚶',
    warmup: [
      { name: '5 min easy walk to warm up', sets: '—', note: '' },
    ],
    lifts: [
      { name: 'Incline Treadmill Walk or Bike', sets: '35–45 min', note: 'Zone 2 — you should be able to hold a conversation' },
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
    day: 'Thursday',
    short: 'THU',
    focus: 'Upper Body — Pull',
    tag: 'HEAVY',
    tagColor: '#ef4444',
    icon: '🏋️',
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
    day: 'Friday',
    short: 'FRI',
    focus: 'Lower Body — Posterior Chain',
    tag: 'HEAVY',
    tagColor: '#ef4444',
    icon: '🔥',
    note: '⚠️ Lower back priority day. Go by feel — if your back is already fatigued, reduce weights and prioritize form over load.',
    warmup: [
      { name: 'Hip Circle Rotations', sets: '10 each direction', note: '' },
      { name: 'Glute Bridge', sets: '2 × 20', note: 'Essential — fire glutes before loading hamstrings' },
      { name: 'Leg Swings', sets: '10 each direction', note: '' },
      { name: "World's Greatest Stretch", sets: '5 each side', note: 'Full lower body mobility in one move' },
    ],
    lifts: [
      { name: 'Conventional Deadlift', sets: '4 × 4–5', note: "HEAVY. Brace like you're about to get punched. Drive the floor away." },
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
];

const SAT_WARMUP = [
  { name: 'Joint Circles (neck, shoulders, hips, ankles)', sets: '30s each', note: 'Full body loosening — no rush' },
  { name: 'Cat-Cow', sets: '2 × 10', note: '' },
  { name: "World's Greatest Stretch", sets: '5 each side', note: '' },
  { name: 'Deep Squat Hold', sets: '2 × 60s', note: 'Open hips and lower back before skill work' },
];

const SAT_COOLDOWN = [
  { name: 'Lying Spinal Twist', sets: '2 × 90s each side', note: 'Weekly staple — never skip this one' },
  { name: 'Pigeon Pose', sets: '2 × 90s each side', note: '' },
  { name: 'Legs Up The Wall', sets: '5 min', note: 'Full parasympathetic recovery — end the week here' },
  { name: 'Seated Forward Fold', sets: '2 × 60s', note: '' },
  { name: 'Happy Baby Pose', sets: '2 × 60s', note: '' },
];

const SAT_SUGGESTIONS = [
  { name: 'Push-up Progressions', sets: '4 × max', note: 'Track reps week to week' },
  { name: 'Handstand Practice', sets: '10–15 min', note: 'Wall-assisted or freestanding — consistency beats duration' },
  { name: 'L-Sit Hold', sets: '5 × max hold', note: 'Parallel bars or floor. Build from tuck to full' },
  { name: 'Yoga Flow', sets: '30–45 min', note: 'YouTube: Yoga with Adriene is solid' },
  { name: 'Tai Chi', sets: '20–30 min', note: 'Great for balance and nervous system recovery' },
  { name: 'Outdoor Walk / Hike', sets: '30–60 min', note: 'Sunlight + movement = best recovery combo' },
  { name: 'Ring Rows', sets: '3 × 10–12', note: 'Scapular strength — great skill builder' },
  { name: 'Hollow Body Hold', sets: '4 × 20–30s', note: 'Foundation for gymnastics strength' },
];

const YTIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
  </svg>
);

function ExerciseRow({ ex, accentColor }) {
  const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' exercise tutorial')}`;
  return (
    <div className="ex-row">
      <div>
        <div className="ex-name">{ex.name}</div>
        {ex.note ? <div className="ex-note">{ex.note}</div> : null}
      </div>
      <div className="ex-right">
        <div className="ex-sets" style={{ color: accentColor }}>{ex.sets}</div>
        <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="yt-btn">
          <YTIcon />
          demo
        </a>
      </div>
    </div>
  );
}

export default function WorkoutPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [section, setSection] = useState('warmup');
  const [satLifts, setSatLifts] = useState([]);
  const [newExName, setNewExName] = useState('');
  const [newExSets, setNewExSets] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const isSat = activeDay === 5;
  const current = isSat ? null : plan[activeDay];

  const addExercise = (name, sets) => {
    if (!name.trim()) return;
    setSatLifts(prev => [...prev, { name: name.trim(), sets: sets.trim() || '—', note: '' }]);
    setNewExName('');
    setNewExSets('');
    setShowSuggestions(false);
  };

  const removeExercise = (i) => {
    setSatLifts(prev => prev.filter((_, idx) => idx !== i));
  };

  const getSatSection = () => {
    if (section === 'warmup') return SAT_WARMUP;
    if (section === 'cooldown') return SAT_COOLDOWN;
    return null;
  };

  const accentColor = isSat ? '#a78bfa' : (current && current.tag === 'LISS') ? '#3b82f6' : '#ef4444';

  const tabLabel = (id) => {
    if (id === 'warmup') return '🔥 Warm-Up';
    if (id === 'cooldown') return '🧘 Cool-Down';
    if (isSat) return '⭐ This Week';
    if (current && current.tag === 'LISS') return '🚶 Cardio + Core';
    return '🏋️ Lifts';
  };

  const sectionLabel = () => {
    if (section === 'warmup') return 'Flexibility + Activation — 8–12 min';
    if (section === 'cooldown') return isSat ? 'Flexibility + Recovery — 12–15 min' : 'Flexibility + Recovery — 10–15 min';
    if (isSat) return "This Week's Focus";
    if (current && current.tag === 'LISS') return 'Cardio + Core Work';
    return 'Main Lifts';
  };

  return (
    <div style={{ minHeight: '100%', background: '#080808' }}>
      <style>{`
        .ex-row { display: grid; grid-template-columns: 1fr auto; gap: 0.5rem; align-items: start; padding: 0.9rem 1rem; border-radius: 0.6rem; background: #0f0f0f; border: 1px solid #1a1a1a; transition: border-color 0.2s; }
        .ex-row:hover { border-color: #2a2a2a; }
        .ex-name { font-size: 0.88rem; font-weight: 500; color: #e8e4dc; margin-bottom: 0.15rem; }
        .ex-note { font-size: 0.71rem; color: #555; font-style: italic; line-height: 1.4; }
        .ex-right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; flex-shrink: 0; }
        .ex-sets { font-family: 'Bebas Neue', sans-serif; font-size: 0.95rem; letter-spacing: 0.05em; white-space: nowrap; text-align: right; }
        .yt-btn { display: flex; align-items: center; gap: 0.3rem; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #555; background: #161616; border: 1px solid #222; border-radius: 2rem; padding: 0.2rem 0.5rem; cursor: pointer; text-decoration: none; transition: all 0.2s; white-space: nowrap; }
        .yt-btn:hover { color: #ff4444; border-color: #ff444466; background: #1a0a0a; }
        .sec-label { font-family: 'Bebas Neue', sans-serif; font-size: 0.85rem; letter-spacing: 0.15em; color: #333; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
        .sec-label::after { content: ''; flex: 1; height: 1px; background: #1a1a1a; }
        .rm-btn { font-size: 0.65rem; color: #333; background: transparent; border: 1px solid #222; border-radius: 2rem; padding: 0.15rem 0.5rem; cursor: pointer; transition: all 0.2s; }
        .rm-btn:hover { color: #ef4444; border-color: #ef444466; }
        .add-input { background: #0f0f0f; border: 1px solid #222; border-radius: 0.5rem; padding: 0.55rem 0.75rem; font-size: 0.82rem; color: #e8e4dc; font-family: 'DM Sans', sans-serif; outline: none; width: 100%; transition: border-color 0.2s; box-sizing: border-box; }
        .add-input:focus { border-color: #a78bfa; }
        .add-input::placeholder { color: #333; }
        .suggest-chip { font-size: 0.72rem; background: #111; border: 1px solid #222; border-radius: 0.5rem; padding: 0.5rem 0.75rem; cursor: pointer; color: #888; transition: all 0.2s; text-align: left; }
        .suggest-chip:hover { border-color: #a78bfa66; color: #e8e4dc; background: #160f2a; }
      `}</style>

      {/* Day nav */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1a1a1a', overflowX: 'auto' }}>
        {plan.map((d, i) => (
          <button
            key={i}
            onClick={() => { setActiveDay(i); setSection('warmup'); }}
            style={{
              flexShrink: 0,
              padding: '0.9rem 1.1rem',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              color: activeDay === i ? '#ef4444' : '#444',
              borderBottom: activeDay === i ? '2px solid #ef4444' : '2px solid transparent',
              transition: 'all 0.2s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.15rem',
            }}
          >
            <span style={{ fontSize: '0.8rem' }}>{d.icon}</span>
            {d.short}
          </button>
        ))}
        <button
          onClick={() => { setActiveDay(5); setSection('warmup'); }}
          style={{
            flexShrink: 0,
            padding: '0.9rem 1.1rem',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.95rem',
            letterSpacing: '0.08em',
            color: activeDay === 5 ? '#a78bfa' : '#444',
            borderBottom: activeDay === 5 ? '2px solid #a78bfa' : '2px solid transparent',
            transition: 'all 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.15rem',
          }}
        >
          <span style={{ fontSize: '0.8rem' }}>⭐</span>
          SAT
        </button>
        <button
          disabled
          style={{
            flexShrink: 0,
            padding: '0.9rem 1.1rem',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '0.95rem',
            letterSpacing: '0.08em',
            color: '#2a2a2a',
            borderBottom: '2px solid transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.15rem',
          }}
        >
          <span style={{ fontSize: '0.8rem' }}>😴</span>
          SUN
        </button>
      </div>

      <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>

        {/* Day header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.2rem 0.7rem',
              borderRadius: '2rem',
              background: isSat ? '#a78bfa22' : (current.tagColor + '22'),
              color: isSat ? '#a78bfa' : current.tagColor,
              border: `1px solid ${isSat ? '#a78bfa44' : (current.tagColor + '44')}`,
            }}>
              {isSat ? 'SKILL & RECOVERY' : current.tag}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#444' }}>
              {isSat ? 'Saturday' : current.day}
            </span>
          </div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', letterSpacing: '0.03em', color: '#e8e4dc', lineHeight: 1 }}>
            {isSat ? 'Your Week, Your Choice' : current.focus}
          </div>
          {isSat && (
            <div style={{ marginTop: '0.6rem', fontSize: '0.75rem', color: '#555', lineHeight: 1.5 }}>
              Skill work, movement practice, or active recovery — you decide each week.
            </div>
          )}
          {!isSat && current.note ? (
            <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: '#e9c46a', background: '#1a1500', border: '1px solid #3d3010', borderRadius: '0.5rem', padding: '0.7rem 1rem', lineHeight: 1.5 }}>
              {current.note}
            </div>
          ) : null}
        </div>

        {/* Lower back reminder */}
        {!isSat && current.tag === 'HEAVY' && (
          <div style={{ background: '#0f0800', border: '1px solid #2a1a00', borderRadius: '0.5rem', padding: '0.6rem 0.9rem', fontSize: '0.72rem', color: '#666', marginBottom: '1.25rem', lineHeight: 1.5 }}>
            <strong style={{ color: '#e9c46a' }}>Lower back reminder:</strong> Brace your core on every compound lift. If anything pulls sharply — stop, reduce weight, or use the machine alternative.
          </div>
        )}

        {/* Section tabs */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          {['warmup', 'lifts', 'cooldown'].map(id => (
            <button
              key={id}
              onClick={() => setSection(id)}
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.9rem',
                borderRadius: '2rem',
                border: `1px solid ${section === id ? (isSat ? '#a78bfa' : '#444') : '#1a1a1a'}`,
                background: section === id ? (isSat ? '#160f2a' : '#1a1a1a') : 'transparent',
                color: section === id ? (isSat ? '#a78bfa' : '#e8e4dc') : '#444',
                transition: 'all 0.2s',
              }}
            >
              {tabLabel(id)}
            </button>
          ))}
        </div>

        {/* Exercise list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="sec-label">{sectionLabel()}</div>

          {/* Fixed sections — warmup and cooldown for all days, lifts for Mon–Fri */}
          {(!isSat || section !== 'lifts') && (
            <>
              {(isSat
                ? getSatSection()
                : current[section]
              ).map((ex, i) => (
                <ExerciseRow key={i} ex={ex} accentColor={accentColor} />
              ))}
            </>
          )}

          {/* Saturday lifts — editable */}
          {isSat && section === 'lifts' && (
            <>
              {satLifts.length === 0 && (
                <div style={{ fontSize: '0.78rem', color: '#333', textAlign: 'center', padding: '1.5rem', border: '1px dashed #1a1a1a', borderRadius: '0.75rem' }}>
                  Nothing added yet — pick from suggestions or add your own below
                </div>
              )}

              {satLifts.map((ex, i) => {
                const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' exercise tutorial')}`;
                return (
                  <div className="ex-row" key={i}>
                    <div>
                      <div className="ex-name">{ex.name}</div>
                    </div>
                    <div className="ex-right">
                      <div className="ex-sets" style={{ color: '#a78bfa' }}>{ex.sets}</div>
                      <div style={{ display: 'flex', gap: '0.3rem' }}>
                        <a href={ytUrl} target="_blank" rel="noopener noreferrer" className="yt-btn">
                          <YTIcon />
                          demo
                        </a>
                        <button className="rm-btn" onClick={() => removeExercise(i)}>✕</button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add custom exercise */}
              <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '0.75rem', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444' }}>Add Exercise</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    className="add-input"
                    placeholder="Exercise name..."
                    value={newExName}
                    onChange={e => setNewExName(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') addExercise(newExName, newExSets); }}
                  />
                  <input
                    className="add-input"
                    placeholder="Sets..."
                    value={newExSets}
                    onChange={e => setNewExSets(e.target.value)}
                    style={{ maxWidth: '90px' }}
                    onKeyDown={e => { if (e.key === 'Enter') addExercise(newExName, newExSets); }}
                  />
                </div>
                <button
                  onClick={() => addExercise(newExName, newExSets)}
                  style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #a78bfa44', background: '#160f2a', color: '#a78bfa', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  + Add
                </button>
              </div>

              {/* Suggestions toggle */}
              <button
                onClick={() => setShowSuggestions(s => !s)}
                style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', background: 'transparent', border: '1px solid #1a1a1a', borderRadius: '0.5rem', padding: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {showSuggestions ? '▲ Hide suggestions' : '▼ Browse suggestions'}
              </button>

              {showSuggestions && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#333' }}>Tap to add</div>
                  {SAT_SUGGESTIONS.map((s, i) => (
                    <button key={i} className="suggest-chip" onClick={() => addExercise(s.name, s.sets)}>
                      <div style={{ fontWeight: 600, color: '#e8e4dc', marginBottom: '0.1rem' }}>
                        {s.name}{' '}
                        <span style={{ color: '#a78bfa', fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.85rem' }}>{s.sets}</span>
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#555' }}>{s.note}</div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}