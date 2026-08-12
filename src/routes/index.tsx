import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/contact'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

type Lang = 'hant' | 'hans'

const content = {
  hant: {
    langLabel: '简体中文',
    nav: {
      about: '關於我們',
      advantages: '我們的優勢',
      services: '服務項目',
      contact: '聯絡我們',
    },
    hero: {
      title: '港人內地遺產繼承法律服務',
      subtitle:
        '深圳律師團隊協助香港居民處理內地物業、銀行存款及其他資產繼承事宜。',
      cta: '立即免費諮詢',
    },
    about: {
      heading: '關於我們',
      body: '廣東金橋百信深圳律師事務所律師團隊，熟悉香港與內地法律制度，與香港律師合作，協助香港居民完成跨境遺產繼承流程。',
    },
    advantages: {
      heading: '我們的優勢',
      items: [
        '先審核資料，再決定是否委託香港律師',
        '避免資料不足導致程序無法進行',
        '協調香港公證轉遞及內地公證、過戶流程',
        '深圳律師全程跟進',
      ],
    },
    services: {
      heading: '服務項目',
      items: [
        {
          title: '內地房產繼承',
          desc: '協助辦理內地房產繼承登記及過戶手續。',
        },
        {
          title: '內地銀行存款繼承',
          desc: '協助辦理內地銀行存款繼承提取手續。',
        },
        {
          title: '香港文件公證轉遞',
          desc: '協調香港文件經公證處轉遞至內地使用。',
        },
        {
          title: '內地公證及產權變更',
          desc: '辦理內地繼承公證及不動產產權變更登記。',
        },
      ],
    },
    form: {
      heading: '免費諮詢',
      sub: '填寫以下表格，我們的律師團隊將盡快與您聯絡。',
      name: '姓名',
      phone: '電話 / WhatsApp',
      estateType: '遺產類型',
      estateTypeOptions: ['物業', '銀行存款', '其他'],
      estateTypePlaceholder: '請選擇遺產類型',
      location: '所在地區',
      message: '遺產問題簡述',
      submit: '提交諮詢',
      thanks: '感謝您的提交，我們將盡快與您聯絡。',
      namePlaceholder: '請輸入您的姓名',
      phonePlaceholder: '請輸入電話或 WhatsApp 號碼',
      locationPlaceholder: '例如：香港 / 深圳',
      messagePlaceholder: '請簡述您遇到的遺產繼承問題',
    },
    contact: {
      heading: '聯絡我們',
      whatsapp: 'WhatsApp 諮詢',
      call: '電話諮詢',
    },
    footer: '廣東金橋百信深圳律師事務所　版權所有',
    privacyLink: '隱私政策',
  },
  hans: {
    langLabel: '繁體中文',
    nav: {
      about: '关于我们',
      advantages: '我们的优势',
      services: '服务项目',
      contact: '联络我们',
    },
    hero: {
      title: '港人内地遗产继承法律服务',
      subtitle:
        '深圳律师团队协助香港居民处理内地物业、银行存款及其他资产继承事宜。',
      cta: '立即免费咨询',
    },
    about: {
      heading: '关于我们',
      body: '广东金桥百信深圳律师事务所律师团队，熟悉香港与内地法律制度，与香港律师合作，协助香港居民完成跨境遗产继承流程。',
    },
    advantages: {
      heading: '我们的优势',
      items: [
        '先审核资料，再决定是否委托香港律师',
        '避免资料不足导致程序无法进行',
        '协调香港公证转递及内地公证、过户流程',
        '深圳律师全程跟进',
      ],
    },
    services: {
      heading: '服务项目',
      items: [
        {
          title: '内地房产继承',
          desc: '协助办理内地房产继承登记及过户手续。',
        },
        {
          title: '内地银行存款继承',
          desc: '协助办理内地银行存款继承提取手续。',
        },
        {
          title: '香港文件公证转递',
          desc: '协调香港文件经公证处转递至内地使用。',
        },
        {
          title: '内地公证及产权变更',
          desc: '办理内地继承公证及不动产产权变更登记。',
        },
      ],
    },
    form: {
      heading: '免费咨询',
      sub: '填写以下表格，我们的律师团队将尽快与您联络。',
      name: '姓名',
      phone: '电话 / WhatsApp',
      estateType: '遗产类型',
      estateTypeOptions: ['物业', '银行存款', '其他'],
      estateTypePlaceholder: '请选择遗产类型',
      location: '所在地区',
      message: '遗产问题简述',
      submit: '提交咨询',
      thanks: '感谢您的提交，我们将尽快与您联络。',
      namePlaceholder: '请输入您的姓名',
      phonePlaceholder: '请输入电话或 WhatsApp 号码',
      locationPlaceholder: '例如：香港 / 深圳',
      messagePlaceholder: '请简述您遇到的遗产继承问题',
    },
    contact: {
      heading: '联络我们',
      whatsapp: 'WhatsApp 咨询',
      call: '电话咨询',
    },
    footer: '广东金桥百信深圳律师事务所　版权所有',
    privacyLink: '隐私政策',
  },
} as const

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function LandingPage() {
  const [lang, setLang] = useState<Lang>('hant')
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[#0a1a35] text-white">
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Advantages t={t} />
      <Services t={t} />
      <ConsultForm t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  )
}

function Header({
  lang,
  setLang,
  t,
}: {
  lang: Lang
  setLang: (l: Lang) => void
  t: (typeof content)['hant']
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#c9a24b]/20 bg-[#0a1a35]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-wide text-[#e8c76b]">
            金橋百信
          </span>
          <span className="hidden text-sm text-white/50 sm:inline">
            深圳律師事務所
          </span>
        </div>
        <nav className="hidden gap-8 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-[#e8c76b]">
            {t.nav.about}
          </a>
          <a href="#advantages" className="hover:text-[#e8c76b]">
            {t.nav.advantages}
          </a>
          <a href="#services" className="hover:text-[#e8c76b]">
            {t.nav.services}
          </a>
          <a href="#contact" className="hover:text-[#e8c76b]">
            {t.nav.contact}
          </a>
        </nav>
        <button
          onClick={() => setLang(lang === 'hant' ? 'hans' : 'hant')}
          className="rounded-full border border-[#e8c76b]/60 px-4 py-1.5 text-sm text-[#e8c76b] transition hover:bg-[#e8c76b] hover:text-[#0a1a35]"
        >
          {t.langLabel}
        </button>
      </div>
    </header>
  )
}

function Hero({ t }: { t: (typeof content)['hant'] }) {
  return (
    <section className="relative overflow-hidden border-b border-[#c9a24b]/20 px-5 py-24 text-center md:py-36">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(232,199,107,0.15), transparent)',
        }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#e8c76b]">
          Sino-Golden Bridge Baixin Law Firm · Shenzhen
        </p>
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {t.hero.subtitle}
        </p>
        <a
          href="#consult"
          className="mt-10 inline-block rounded-md bg-[#e8c76b] px-8 py-3.5 text-base font-semibold text-[#0a1a35] shadow-lg shadow-[#e8c76b]/20 transition hover:bg-[#f2d789]"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-3xl">
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-3 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-[#e8c76b]" />
      </span>
    </h2>
  )
}

function About({ t }: { t: (typeof content)['hant'] }) {
  return (
    <section id="about" className="border-b border-[#c9a24b]/20 px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading>{t.about.heading}</SectionHeading>
        <p className="text-center text-base leading-relaxed text-white/80 md:text-lg">
          {t.about.body}
        </p>
      </div>
    </section>
  )
}

function Advantages({ t }: { t: (typeof content)['hant'] }) {
  return (
    <section
      id="advantages"
      className="border-b border-[#c9a24b]/20 bg-[#0d2143] px-5 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading>{t.advantages.heading}</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {t.advantages.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-lg border border-[#c9a24b]/25 bg-[#0a1a35] p-6"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#e8c76b] text-sm font-semibold text-[#e8c76b]">
                {i + 1}
              </span>
              <p className="text-base leading-relaxed text-white/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services({ t }: { t: (typeof content)['hant'] }) {
  return (
    <section id="services" className="border-b border-[#c9a24b]/20 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>{t.services.heading}</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.services.items.map((s, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#c9a24b]/25 bg-gradient-to-b from-[#0d2143] to-[#0a1a35] p-6 transition hover:border-[#e8c76b]/60"
            >
              <h3 className="mb-2 text-lg font-semibold text-[#e8c76b]">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConsultForm({ t }: { t: (typeof content)['hant'] }) {
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    estateType: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/consult-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'consultation', ...fields }),
      })
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="consult"
      className="border-b border-[#c9a24b]/20 bg-[#0d2143] px-5 py-20"
    >
      <div className="mx-auto max-w-xl">
        <SectionHeading>{t.form.heading}</SectionHeading>
        <p className="mb-8 text-center text-sm text-white/70">{t.form.sub}</p>

        {submitted ? (
          <div className="rounded-lg border border-[#e8c76b]/50 bg-[#0a1a35] p-8 text-center text-white/90">
            {t.form.thanks}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg border border-[#c9a24b]/25 bg-[#0a1a35] p-6 md:p-8"
          >
            <div>
              <label className="mb-1.5 block text-sm text-white/80">
                {t.form.name}
              </label>
              <input
                type="text"
                name="name"
                required
                value={fields.name}
                onChange={handleChange}
                placeholder={t.form.namePlaceholder}
                className="w-full rounded-md border border-[#c9a24b]/30 bg-[#0d2143] px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-[#e8c76b]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-white/80">
                {t.form.phone}
              </label>
              <input
                type="text"
                name="phone"
                required
                value={fields.phone}
                onChange={handleChange}
                placeholder={t.form.phonePlaceholder}
                className="w-full rounded-md border border-[#c9a24b]/30 bg-[#0d2143] px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-[#e8c76b]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-white/80">
                {t.form.estateType}
              </label>
              <select
                name="estateType"
                required
                value={fields.estateType}
                onChange={handleChange}
                className="w-full rounded-md border border-[#c9a24b]/30 bg-[#0d2143] px-4 py-2.5 text-white outline-none focus:border-[#e8c76b]"
              >
                <option value="" disabled>
                  {t.form.estateTypePlaceholder}
                </option>
                {t.form.estateTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-white/80">
                {t.form.location}
              </label>
              <input
                type="text"
                name="location"
                value={fields.location}
                onChange={handleChange}
                placeholder={t.form.locationPlaceholder}
                className="w-full rounded-md border border-[#c9a24b]/30 bg-[#0d2143] px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-[#e8c76b]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-white/80">
                {t.form.message}
              </label>
              <textarea
                name="message"
                rows={4}
                value={fields.message}
                onChange={handleChange}
                placeholder={t.form.messagePlaceholder}
                className="w-full rounded-md border border-[#c9a24b]/30 bg-[#0d2143] px-4 py-2.5 text-white placeholder:text-white/35 outline-none focus:border-[#e8c76b]"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-[#e8c76b] px-6 py-3 text-base font-semibold text-[#0a1a35] transition hover:bg-[#f2d789] disabled:opacity-60"
            >
              {t.form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Contact({ t }: { t: (typeof content)['hant'] }) {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-xl text-center">
        <SectionHeading>{t.contact.heading}</SectionHeading>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#25d366] px-8 py-3.5 text-base font-semibold text-[#0a1a35] transition hover:brightness-95"
          >
            {t.contact.whatsapp}
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="rounded-md border border-[#e8c76b] px-8 py-3.5 text-base font-semibold text-[#e8c76b] transition hover:bg-[#e8c76b] hover:text-[#0a1a35]"
          >
            {t.contact.call}
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer({ t }: { t: (typeof content)['hant'] }) {
  return (
    <footer className="border-t border-[#c9a24b]/20 px-5 py-8 text-center text-xs text-white/50">
      <p>{t.footer}</p>
      <Link
        to="/privacy"
        className="mt-2 inline-block text-white/50 underline decoration-white/20 underline-offset-2 transition hover:text-[#e8c76b] hover:decoration-[#e8c76b]/60"
      >
        {t.privacyLink}
      </Link>
    </footer>
  )
}
