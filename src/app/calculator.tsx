'use client'

import React, { useState, useEffect } from 'react'

const TIMEZONES = [
  // Americas
  { label: 'Eastern Time (EST)', value: 'America/New_York', region: 'Americas' },
  { label: 'Central Time (CST)', value: 'America/Chicago', region: 'Americas' },
  { label: 'Mountain Time (MST)', value: 'America/Denver', region: 'Americas' },
  { label: 'Pacific Time (PST)', value: 'America/Los_Angeles', region: 'Americas' },
  { label: 'Atlantic Time (AST)', value: 'America/Halifax', region: 'Americas' },
  { label: 'Brazil Time (BRT)', value: 'America/Sao_Paulo', region: 'Americas' },
  { label: 'Argentina Time (ART)', value: 'America/Argentina/Buenos_Aires', region: 'Americas' },

  // Europe
  { label: 'GMT / UTC', value: 'UTC', region: 'Europe' },
  { label: 'Central European Time (CET)', value: 'Europe/Berlin', region: 'Europe' },
  { label: 'Eastern European Time (EET)', value: 'Europe/Athens', region: 'Europe' },
  { label: 'Moscow Standard Time (MSK)', value: 'Europe/Moscow', region: 'Europe' },
  { label: 'Western European Time (WET)', value: 'Europe/London', region: 'Europe' },

  // Asia
  { label: 'India Standard Time (IST)', value: 'Asia/Kolkata', region: 'Asia' },
  { label: 'China Standard Time (CST)', value: 'Asia/Shanghai', region: 'Asia' },
  { label: 'Japan Standard Time (JST)', value: 'Asia/Tokyo', region: 'Asia' },
  { label: 'Korea Standard Time (KST)', value: 'Asia/Seoul', region: 'Asia' },
  { label: 'Singapore Standard Time (SGT)', value: 'Asia/Singapore', region: 'Asia' },
  { label: 'Hong Kong Time (HKT)', value: 'Asia/Hong_Kong', region: 'Asia' },
  { label: 'Indochina Time (ICT)', value: 'Asia/Bangkok', region: 'Asia' },
  { label: 'Pakistan Standard Time (PKT)', value: 'Asia/Karachi', region: 'Asia' },
  { label: 'Gulf Standard Time (GST)', value: 'Asia/Dubai', region: 'Asia' },

  // Pacific
  { label: 'Australian Eastern Time (AEST)', value: 'Australia/Sydney', region: 'Pacific' },
  { label: 'New Zealand Standard Time (NZST)', value: 'Pacific/Auckland', region: 'Pacific' },
  { label: 'Hawaii-Aleutian Standard Time (HST)', value: 'Pacific/Honolulu', region: 'Pacific' },
]

const MAJOR_CITIES = [
  { city: 'New York', tz: 'America/New_York' },
  { city: 'London', tz: 'Europe/London' },
  { city: 'Tokyo', tz: 'Asia/Tokyo' },
  { city: 'Seoul', tz: 'Asia/Seoul' },
  { city: 'Sydney', tz: 'Australia/Sydney' },
  { city: 'Dubai', tz: 'Asia/Dubai' },
  { city: 'Mumbai', tz: 'Asia/Kolkata' },
  { city: 'Berlin', tz: 'Europe/Berlin' },
  { city: 'São Paulo', tz: 'America/Sao_Paulo' },
  { city: 'Los Angeles', tz: 'America/Los_Angeles' },
  { city: 'Singapore', tz: 'Asia/Singapore' },
  { city: 'Beijing', tz: 'Asia/Shanghai' },
]

const POPULAR_CONVERSIONS = [
  { label: 'NY to Tokyo', from: 'America/New_York', to: 'Asia/Tokyo' },
  { label: 'NY to London', from: 'America/New_York', to: 'Europe/London' },
  { label: 'LA to Tokyo', from: 'America/Los_Angeles', to: 'Asia/Tokyo' },
  { label: 'London to Dubai', from: 'Europe/London', to: 'Asia/Dubai' },
  { label: 'Berlin to Singapore', from: 'Europe/Berlin', to: 'Asia/Singapore' },
]

const LANGUAGES: Record<string, Record<string, string>> = {
  en: {
    title: 'Timezone Converter',
    fromTime: 'From Time',
    toTimezone: 'To Timezone',
    fromTimezone: 'From Timezone',
    date: 'Date',
    useCurrentTime: 'Use Current Time',
    swap: 'Swap Timezones',
    convert: 'Convert',
    worldClock: 'World Clock',
    popularConversions: 'Popular Conversions',
    timeDifference: 'Time Difference',
    hours: 'hours',
    dayInfo: 'Day Info',
    sameDay: 'Same day',
    nextDay: 'Next day',
    previousDay: 'Previous day',
  },
  es: {
    title: 'Convertidor de Zonas Horarias',
    fromTime: 'De la Hora',
    toTimezone: 'A Zona Horaria',
    fromTimezone: 'De Zona Horaria',
    date: 'Fecha',
    useCurrentTime: 'Usar Hora Actual',
    swap: 'Intercambiar Zonas',
    convert: 'Convertir',
    worldClock: 'Reloj Mundial',
    popularConversions: 'Conversiones Populares',
    timeDifference: 'Diferencia de Hora',
    hours: 'horas',
    dayInfo: 'Información del Día',
    sameDay: 'Mismo día',
    nextDay: 'Día siguiente',
    previousDay: 'Día anterior',
  },
  fr: {
    title: 'Convertisseur de Fuseaux Horaires',
    fromTime: 'De Heure',
    toTimezone: 'À Fuseau Horaire',
    fromTimezone: 'De Fuseau Horaire',
    date: 'Date',
    useCurrentTime: 'Utiliser l\'Heure Actuelle',
    swap: 'Échanger les Fuseaux',
    convert: 'Convertir',
    worldClock: 'Horloge Mondiale',
    popularConversions: 'Conversions Populaires',
    timeDifference: 'Décalage Horaire',
    hours: 'heures',
    dayInfo: 'Information du Jour',
    sameDay: 'Même jour',
    nextDay: 'Jour suivant',
    previousDay: 'Jour précédent',
  },
  de: {
    title: 'Zeitzonenkonverter',
    fromTime: 'Von Zeit',
    toTimezone: 'Zur Zeitzone',
    fromTimezone: 'Von Zeitzone',
    date: 'Datum',
    useCurrentTime: 'Aktuelle Zeit Verwenden',
    swap: 'Zeitzonen Tauschen',
    convert: 'Konvertieren',
    worldClock: 'Weltuhr',
    popularConversions: 'Beliebte Konvertierungen',
    timeDifference: 'Zeitunterschied',
    hours: 'Stunden',
    dayInfo: 'Taginformation',
    sameDay: 'Gleicher Tag',
    nextDay: 'Nächster Tag',
    previousDay: 'Vorheriger Tag',
  },
  zh: {
    title: '时区转换器',
    fromTime: '从时间',
    toTimezone: '到时区',
    fromTimezone: '从时区',
    date: '日期',
    useCurrentTime: '使用当前时间',
    swap: '交换时区',
    convert: '转换',
    worldClock: '世界时钟',
    popularConversions: '热门转换',
    timeDifference: '时间差',
    hours: '小时',
    dayInfo: '日期信息',
    sameDay: '同一天',
    nextDay: '次日',
    previousDay: '前一天',
  },
  ja: {
    title: 'タイムゾーン変換ツール',
    fromTime: '時刻を',
    toTimezone: 'へのタイムゾーン',
    fromTimezone: 'からのタイムゾーン',
    date: '日付',
    useCurrentTime: '現在の時刻を使用',
    swap: 'タイムゾーンを交換',
    convert: '変換',
    worldClock: '世界時計',
    popularConversions: '人気の変換',
    timeDifference: '時差',
    hours: '時間',
    dayInfo: '日付情報',
    sameDay: '同じ日',
    nextDay: '翌日',
    previousDay: '前日',
  },
  pt: {
    title: 'Conversor de Fusos Horários',
    fromTime: 'Da Hora',
    toTimezone: 'Para Fuso Horário',
    fromTimezone: 'Do Fuso Horário',
    date: 'Data',
    useCurrentTime: 'Usar Hora Atual',
    swap: 'Trocar Fusos Horários',
    convert: 'Converter',
    worldClock: 'Relógio Mundial',
    popularConversions: 'Conversões Populares',
    timeDifference: 'Diferença de Hora',
    hours: 'horas',
    dayInfo: 'Informação do Dia',
    sameDay: 'Mesmo dia',
    nextDay: 'Próximo dia',
    previousDay: 'Dia anterior',
  },
  ru: {
    title: 'Конвертер часовых поясов',
    fromTime: 'От времени',
    toTimezone: 'В часовой пояс',
    fromTimezone: 'Из часового пояса',
    date: 'Дата',
    useCurrentTime: 'Использовать текущее время',
    swap: 'Поменять часовые пояса',
    convert: 'Конвертировать',
    worldClock: 'Мировые часы',
    popularConversions: 'Популярные конвертации',
    timeDifference: 'Разница во времени',
    hours: 'часов',
    dayInfo: 'Информация о дне',
    sameDay: 'Тот же день',
    nextDay: 'Следующий день',
    previousDay: 'Предыдущий день',
  },
  ko: {
    title: '시간대 변환기',
    fromTime: '시간 기준',
    toTimezone: '시간대로',
    fromTimezone: '시간대에서',
    date: '날짜',
    useCurrentTime: '현재 시간 사용',
    swap: '시간대 바꾸기',
    convert: '변환',
    worldClock: '세계 시계',
    popularConversions: '인기 변환',
    timeDifference: '시간 차이',
    hours: '시간',
    dayInfo: '날짜 정보',
    sameDay: '같은 날',
    nextDay: '다음 날',
    previousDay: '이전 날',
  },
  it: {
    title: 'Convertitore di Fusi Orari',
    fromTime: 'Dall\'Ora',
    toTimezone: 'Al Fuso Orario',
    fromTimezone: 'Dal Fuso Orario',
    date: 'Data',
    useCurrentTime: 'Usa Ora Attuale',
    swap: 'Scambia Fusi Orari',
    convert: 'Converti',
    worldClock: 'Orologio Mondiale',
    popularConversions: 'Conversioni Popolari',
    timeDifference: 'Differenza Oraria',
    hours: 'ore',
    dayInfo: 'Informazione del Giorno',
    sameDay: 'Stesso giorno',
    nextDay: 'Giorno successivo',
    previousDay: 'Giorno precedente',
  },
  ar: {
    title: 'محول المناطق الزمنية',
    fromTime: 'من الوقت',
    toTimezone: 'إلى المنطقة الزمنية',
    fromTimezone: 'من المنطقة الزمنية',
    date: 'التاريخ',
    useCurrentTime: 'استخدام الوقت الحالي',
    swap: 'تبديل المناطق الزمنية',
    convert: 'تحويل',
    worldClock: 'ساعة عالمية',
    popularConversions: 'التحويلات الشهيرة',
    timeDifference: 'فرق الوقت',
    hours: 'ساعات',
    dayInfo: 'معلومات اليوم',
    sameDay: 'نفس اليوم',
    nextDay: 'اليوم التالي',
    previousDay: 'اليوم السابق',
  },
}

interface CalculatorState {
  hours: string
  minutes: string
  date: string
  fromTz: string
  toTz: string
  is24h: boolean
  isPM: boolean
}

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    hours: '09',
    minutes: '00',
    date: new Date().toISOString().split('T')[0],
    fromTz: 'America/New_York',
    toTz: 'Asia/Tokyo',
    is24h: false,
    isPM: false,
  })

  const [result, setResult] = useState<{
    fromTime: string
    toTime: string
    timeDiff: number
    dayDiff: number
  } | null>(null)

  const [language, setLanguage] = useState<string>('en')
  const [mounted, setMounted] = useState(false)

  const t = (key: keyof typeof LANGUAGES.en) => LANGUAGES[language]?.[key] || LANGUAGES.en[key]

  useEffect(() => {
    setMounted(true)
    const savedState = localStorage.getItem('tzConverterState')
    const savedLang = localStorage.getItem('tzConverterLang')

    if (savedState) {
      try {
        setState(JSON.parse(savedState))
      } catch (e) {
        // ignore parse errors
      }
    }

    if (savedLang) setLanguage(savedLang)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('tzConverterState', JSON.stringify(state))
    }
  }, [state, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('tzConverterLang', language)
    }
  }, [language, mounted])

  const convertTime = () => {
    const hours = state.is24h ? parseInt(state.hours) : parseInt(state.hours) + (state.isPM && state.hours !== '12' ? 12 : state.hours === '12' && !state.isPM ? -12 : 0)
    const minutes = parseInt(state.minutes)

    const sourceDate = new Date(state.date)
    sourceDate.setHours(hours, minutes, 0, 0)

    const sourceTime = sourceDate.toLocaleString('en-US', {
      timeZone: state.fromTz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const targetTime = sourceDate.toLocaleString('en-US', {
      timeZone: state.toTz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const sourceFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: state.fromTz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    const targetFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: state.toTz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    const sourceParts = sourceFormatter.formatToParts(sourceDate)
    const targetParts = targetFormatter.formatToParts(sourceDate)

    const sourceHour = parseInt(sourceParts.find(p => p.type === 'hour')?.value || '0')
    const targetHour = parseInt(targetParts.find(p => p.type === 'hour')?.value || '0')

    const sourceDay = parseInt(sourceParts.find(p => p.type === 'day')?.value || '0')
    const targetDay = parseInt(targetParts.find(p => p.type === 'day')?.value || '0')

    let timeDiff = targetHour - sourceHour
    let dayDiff = targetDay - sourceDay

    if (timeDiff < -12) timeDiff += 24
    if (timeDiff > 12) timeDiff -= 24

    const fromTimeStr = `${sourceTime}`
    const toTimeStr = `${targetTime}`

    setResult({
      fromTime: fromTimeStr,
      toTime: toTimeStr,
      timeDiff,
      dayDiff,
    })
  }

  const handleUseCurrentTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const date = now.toISOString().split('T')[0]

    setState(prev => ({
      ...prev,
      hours: state.is24h ? hours : (parseInt(hours) % 12 || 12).toString().padStart(2, '0'),
      minutes,
      date,
      isPM: parseInt(hours) >= 12,
    }))
  }

  const handleSwap = () => {
    setState(prev => ({
      ...prev,
      fromTz: prev.toTz,
      toTz: prev.fromTz,
    }))
  }

  const handlePopularConversion = (from: string, to: string) => {
    setState(prev => ({
      ...prev,
      fromTz: from,
      toTz: to,
    }))
  }

  const groupedTimezones = TIMEZONES.reduce((acc, tz) => {
    if (!acc[tz.region]) acc[tz.region] = []
    acc[tz.region].push(tz)
    return acc
  }, {} as Record<string, typeof TIMEZONES>)

  const dayDiffText = result
    ? result.dayDiff === 0
      ? t('sameDay')
      : result.dayDiff > 0
      ? t('nextDay')
      : t('previousDay')
    : ''

  if (!mounted) return null

  return (
    <div className="min-h-screen px-4 py-8 md:py-12" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header with Language Selector */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--accent)' }}>
            {t('title')}
          </h1>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="px-3 py-2 rounded-lg border-2"
            style={{ borderColor: 'var(--card-border)', color: 'var(--text)' }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="ko">한국어</option>
            <option value="it">Italiano</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        {/* Main Converter Card */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Time Input */}
            <div>
              <label className="block font-semibold mb-2" style={{ color: 'var(--text)' }}>
                {t('fromTime')}
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="number"
                  min={state.is24h ? '0' : '1'}
                  max={state.is24h ? '23' : '12'}
                  value={state.hours}
                  onChange={e => setState(prev => ({ ...prev, hours: e.target.value }))}
                  className="tool-input w-20"
                  placeholder="HH"
                />
                <span className="text-2xl font-bold self-center" style={{ color: 'var(--text)' }}>:</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={state.minutes}
                  onChange={e => setState(prev => ({ ...prev, minutes: e.target.value }))}
                  className="tool-input w-20"
                  placeholder="MM"
                />
              </div>
              <div className="flex gap-2 mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={state.is24h}
                    onChange={e => setState(prev => ({ ...prev, is24h: e.target.checked, isPM: false }))}
                  />
                  <span style={{ color: 'var(--text-muted)' }}>24h</span>
                </label>
                {!state.is24h && (
                  <div className="flex gap-2 flex-1">
                    <button
                      onClick={() => setState(prev => ({ ...prev, isPM: false }))}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                        !state.isPM ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      AM
                    </button>
                    <button
                      onClick={() => setState(prev => ({ ...prev, isPM: true }))}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                        state.isPM ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      PM
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Date Input */}
            <div>
              <label className="block font-semibold mb-2" style={{ color: 'var(--text)' }}>
                {t('date')}
              </label>
              <input
                type="date"
                value={state.date}
                onChange={e => setState(prev => ({ ...prev, date: e.target.value }))}
                className="tool-input mb-3"
              />
              <button onClick={handleUseCurrentTime} className="btn-primary w-full">
                {t('useCurrentTime')}
              </button>
            </div>
          </div>

          {/* Timezone Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold mb-2" style={{ color: 'var(--text)' }}>
                {t('fromTimezone')}
              </label>
              <select
                value={state.fromTz}
                onChange={e => setState(prev => ({ ...prev, fromTz: e.target.value }))}
                className="tool-input"
              >
                {Object.entries(groupedTimezones).map(([region, tzs]) => (
                  <optgroup key={region} label={region}>
                    {tzs.map(tz => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2" style={{ color: 'var(--text)' }}>
                {t('toTimezone')}
              </label>
              <select
                value={state.toTz}
                onChange={e => setState(prev => ({ ...prev, toTz: e.target.value }))}
                className="tool-input"
              >
                {Object.entries(groupedTimezones).map(([region, tzs]) => (
                  <optgroup key={region} label={region}>
                    {tzs.map(tz => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-col md:flex-row">
            <button onClick={convertTime} className="btn-primary flex-1">
              {t('convert')}
            </button>
            <button
              onClick={handleSwap}
              className="btn-secondary flex-1"
              style={{ color: 'var(--accent)' }}
            >
              {t('swap')} ⇄
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
              {t('convert')} {t('convert')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('fromTimezone')}
                </p>
                <p className="tool-result text-4xl">{result.fromTime}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('toTimezone')}
                </p>
                <p className="tool-result text-4xl">{result.toTime}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('timeDifference')}
                </p>
                <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                  {result.timeDiff > 0 ? '+' : ''}{result.timeDiff} {t('hours')}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>
                  {t('dayInfo')}
                </p>
                <p className="text-lg font-bold" style={{ color: 'var(--accent)' }}>
                  {dayDiffText}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Popular Conversions */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            {t('popularConversions')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {POPULAR_CONVERSIONS.map(conv => (
              <button
                key={conv.label}
                onClick={() => handlePopularConversion(conv.from, conv.to)}
                className="btn-secondary text-sm py-2"
              >
                {conv.label}
              </button>
            ))}
          </div>
        </div>

        {/* World Clock */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
            {t('worldClock')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAJOR_CITIES.map(({ city, tz }) => {
              const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tz,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
              })
              const time = formatter.format(new Date())

              return (
                <div key={city} className="bg-purple-50 rounded-xl p-4">
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-muted)' }}>
                    {city}
                  </p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>
                    {time}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
