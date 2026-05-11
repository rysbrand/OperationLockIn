import { useState } from 'react'

const categories = [
  {
    name: 'Protein',
    icon: '🥩',
    color: '#ef4444',
    items: [
      { name: 'Just Bare Chicken Breast Pieces', detail: 'Frozen — better texture than Kirkland raw', tag: 'Kirkland alt' },
      { name: 'Kirkland Wild Argentine Red Shrimp', detail: 'Frozen. ~20g protein per serving', tag: null },
      { name: 'Ground Turkey', detail: 'Meal prep in batches and freeze', tag: null },
      { name: 'Kirkland Liquid Egg Whites', detail: '25 cal, 5g protein, zero fat per serving', tag: 'Kirkland' },
      { name: 'Eggs (5 dozen)', detail: 'Breakfast scrambles + hard boiled snacks', tag: 'Kirkland' },
      { name: 'Kirkland Organic Greek Yogurt', detail: '48 oz plain nonfat — 18g protein per 2/3 cup', tag: 'Kirkland' },
    ]
  },
  {
    name: 'Produce & Frozen Veg',
    icon: '🥦',
    color: '#2a9d8f',
    items: [
      { name: 'Organic Baby Spinach', detail: 'Scrambles, bowls — goes in almost every meal', tag: null },
      { name: 'Fresh Avocados', detail: 'Healthy fat, keeps you full', tag: null },
      { name: 'Kirkland Stir-Fry Vegetable Blend', detail: 'Frozen — flash-frozen at peak ripeness', tag: 'Kirkland' },
      { name: 'Kirkland Frozen Green Beans', detail: 'Low cal, high volume side', tag: 'Kirkland' },
    ]
  },
  {
    name: 'Summer Fruits',
    icon: '🍓',
    color: '#f4a261',
    items: [
      { name: 'Kirkland Frozen Mixed Berries', detail: 'Yogurt bowls + smoothies. Reduces food waste vs fresh', tag: 'Kirkland' },
      { name: 'Kirkland Frozen Mango Chunks', detail: 'Yogurt bowls, smoothies', tag: 'Kirkland' },
      { name: 'Fresh Strawberries (clamshell)', detail: 'Big clamshells in summer — great deal', tag: null },
      { name: 'Fresh Watermelon', detail: 'Whole or halved — Costco carries in summer', tag: null },
    ]
  },
  {
    name: 'Carbs & Whole Grains',
    icon: '🌾',
    color: '#e9c46a',
    items: [
      { name: 'Kirkland Jasmine Rice', detail: 'Shrimp stir-fry base', tag: 'Kirkland' },
      { name: 'Kirkland Quinoa', detail: '8g protein per cup. Complete protein — all 9 amino acids', tag: 'Kirkland' },
    ]
  },
  {
    name: 'Pantry & Flavor',
    icon: '🧴',
    color: '#457b9d',
    items: [
      { name: 'Kirkland Extra Virgin Olive Oil', detail: 'Primary cooking fat', tag: 'Kirkland' },
      { name: 'Kirkland Everything Bagel Seasoning', detail: 'Zero cal flavor — goes on everything', tag: 'Kirkland' },
      { name: 'Kirkland Hummus (Pine Nut)', detail: 'Snack with bell peppers or cucumbers', tag: 'Kirkland' },
      { name: 'Rao\'s Marinara', detail: 'Clean ingredients, good for turkey scramble variation', tag: null },
    ]
  },
  {
    name: 'Caffeine & Supplements',
    icon: '⚡',
    color: '#8b5cf6',
    items: [
      { name: 'Celsius or Reign Energy Drinks', detail: 'Zero sugar. Check: <5g sugar, <200mg caffeine, <20 cal', tag: 'Check label' },
      { name: 'Kirkland Women\'s Multivitamin', detail: 'Insurance for iron, D, calcium, magnesium at 1,600 cal', tag: 'Kirkland' },
      { name: 'Pre-workout (your brand)', detail: 'Factor in calories if it has any', tag: null },
    ]
  },
]

export default function GroceryList() {
  const [checked, setChecked] = useState({})
  const [openCat, setOpenCat] = useState(null)

  const toggle = (key) => setChecked(p => ({ ...p, [key]: !p[key] }))
  const totalItems = categories.reduce((s,c) => s + c.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length

  return (
    <div style={{ padding: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', letterSpacing: '0.03em', color: '#e8e4dc', lineHeight: 1, marginBottom: '0.3rem' }}>Costco Run 🛒</div>
        <div style={{ fontSize: '0.75rem', color: '#555' }}>Sioux Falls, SD · 3700 S Grange Ave</div>
        <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{ height: 4, flex: 1, background: '#1a1a1a', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#2a9d8f', borderRadius: 2, width: `${(checkedCount/totalItems)*100}%`, transition: 'width 0.3s' }} />
          </div>
          <span style={{ fontSize: '0.72rem', color: '#555', whiteSpace: 'nowrap' }}>{checkedCount}/{totalItems} items</span>
          {checkedCount > 0 && (
            <button onClick={() => setChecked({})} style={{ fontSize: '0.65rem', color: '#444', textDecoration: 'underline', cursor: 'pointer' }}>reset</button>
          )}
        </div>
      </div>

      {/* Costco tip */}
      {/* <div style={{ background: '#0a0f1a', border: '1px solid #1a2a3a', borderRadius: '0.6rem', padding: '0.7rem 1rem', fontSize: '0.75rem', color: '#5a8ab0', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        💡 <strong style={{ color: '#7ab0d0' }}>Sioux Falls Costco note:</strong> This location is noted as relatively small — if something's out of stock, the Kirkland frozen proteins and veg are the most consistent finds. Frozen beats fresh for food waste on a 4-week plan anyway.
      </div> */}

      {/* Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {categories.map((cat, ci) => {
          const catChecked = cat.items.filter((_,ii) => checked[`${ci}-${ii}`]).length
          const isOpen = openCat === ci

          return (
            <div key={cat.name} style={{ border: `1px solid ${isOpen ? cat.color + '44' : '#1a1a1a'}`, borderRadius: '0.75rem', overflow: 'hidden', background: '#0f0f0f', transition: 'border-color 0.2s' }}>
              {/* Category header */}
              <button onClick={() => setOpenCat(isOpen ? null : ci)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1rem', background: 'transparent', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{cat.icon}</span>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '0.08em', color: isOpen ? cat.color : '#e8e4dc', transition: 'color 0.2s' }}>{cat.name}</span>
                  {catChecked > 0 && <span style={{ fontSize: '0.65rem', background: cat.color + '22', color: cat.color, border: `1px solid ${cat.color}44`, borderRadius: '2rem', padding: '0.1rem 0.5rem', fontWeight: 600 }}>{catChecked}/{cat.items.length}</span>}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#333' }}>{isOpen ? '▲' : '▼'}</span>
              </button>

              {/* Items */}
              {isOpen && (
                <div style={{ borderTop: '1px solid #1a1a1a' }}>
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`
                    const isDone = checked[key]
                    return (
                      <div key={ii} onClick={() => toggle(key)}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderBottom: ii < cat.items.length-1 ? '1px solid #111' : 'none', cursor: 'pointer', opacity: isDone ? 0.4 : 1, transition: 'opacity 0.2s', background: isDone ? '#0a0a0a' : 'transparent' }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${isDone ? cat.color : '#333'}`, background: isDone ? cat.color : 'transparent', flexShrink: 0, marginTop: '0.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                          {isDone && <span style={{ fontSize: '0.65rem', color: '#080808', fontWeight: 700 }}>✓</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#e8e4dc', textDecoration: isDone ? 'line-through' : 'none' }}>{item.name}</span>
                            {item.tag && <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', padding: '0.1rem 0.4rem', borderRadius: '2rem', background: cat.color + '22', color: cat.color, border: `1px solid ${cat.color}33` }}>{item.tag}</span>}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#555', marginTop: '0.1rem', lineHeight: 1.4 }}>{item.detail}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div style={{ marginTop: '1.5rem', fontSize: '0.7rem', color: '#333', textAlign: 'center', lineHeight: 1.6 }}>
        Tap categories to expand · Tap items to check off
      </div>
    </div>
  )
}
