import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/contact'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      {
        title: '隱私政策｜廣東金橋百信深圳律師事務所',
      },
      {
        name: 'description',
        content:
          '廣東金橋百信深圳律師事務所隱私政策，說明我們如何收集、使用及保護客戶於港人內地遺產繼承法律諮詢中提供的個人資料。',
      },
    ],
  }),
})

type Lang = 'hant' | 'hans'

const content = {
  hant: {
    langLabel: '简体中文',
    backHome: '返回首頁',
    title: '隱私政策',
    updated: '最後更新日期：2026 年 8 月',
    intro:
      '廣東金橋百信深圳律師事務所（下稱「本所」）尊重並重視每一位客戶的個人資料私隱。本隱私政策說明本所在為香港居民提供內地遺產繼承法律諮詢服務過程中，如何收集、使用及保護您所提供的資料。',
    sections: [
      {
        heading: '一、我們收集的信息',
        body: '為評估及跟進您的遺產繼承諮詢個案，本所可能收集以下資料：',
        items: [
          '姓名',
          '電話號碼',
          'WhatsApp 聯絡方式',
          '所在地區',
          '遺產類型（例如物業、銀行存款等）',
          '您透過諮詢表格或其他渠道主動提交的個案內容及相關資訊',
        ],
      },
      {
        heading: '二、信息用途',
        body: '本所收集的資料僅用於以下目的：',
        items: ['聯絡客戶，回覆諮詢', '了解及評估遺產繼承案件的具體情況', '為客戶提供相關法律諮詢及後續服務'],
      },
      {
        heading: '三、信息保護',
        body: '本所將採取合理的安全措施保護您的個人資料，並承諾：',
        items: [
          '不會出售您的個人資料',
          '不會出租您的個人資料',
          '不會向第三方非法披露您的客戶資料',
        ],
      },
      {
        heading: '四、聯絡我們',
        body: '如您對本隱私政策有任何疑問，或希望查閱、更正、刪除您所提供的個人資料，歡迎透過以下方式與本所聯絡：',
      },
    ],
    contact: {
      whatsapp: 'WhatsApp 諮詢',
      call: '電話諮詢',
    },
    footer: '廣東金橋百信深圳律師事務所　版權所有',
  },
  hans: {
    langLabel: '繁體中文',
    backHome: '返回首页',
    title: '隐私政策',
    updated: '最后更新日期：2026 年 8 月',
    intro:
      '广东金桥百信深圳律师事务所（下称「本所」）尊重并重视每一位客户的个人资料私隐。本隐私政策说明本所在为香港居民提供内地遗产继承法律咨询服务过程中，如何收集、使用及保护您所提供的资料。',
    sections: [
      {
        heading: '一、我们收集的信息',
        body: '为评估及跟进您的遗产继承咨询个案，本所可能收集以下资料：',
        items: [
          '姓名',
          '电话号码',
          'WhatsApp 联系方式',
          '所在地区',
          '遗产类型（例如物业、银行存款等）',
          '您透过咨询表格或其他渠道主动提交的个案内容及相关信息',
        ],
      },
      {
        heading: '二、信息用途',
        body: '本所收集的资料仅用于以下目的：',
        items: ['联络客户，回复咨询', '了解及评估遗产继承案件的具体情况', '为客户提供相关法律咨询及后续服务'],
      },
      {
        heading: '三、信息保护',
        body: '本所将采取合理的安全措施保护您的个人资料，并承诺：',
        items: [
          '不会出售您的个人资料',
          '不会出租您的个人资料',
          '不会向第三方非法披露您的客户资料',
        ],
      },
      {
        heading: '四、联络我们',
        body: '如您对本隐私政策有任何疑问，或希望查阅、更正、删除您所提供的个人资料，欢迎透过以下方式与本所联络：',
      },
    ],
    contact: {
      whatsapp: 'WhatsApp 咨询',
      call: '电话咨询',
    },
    footer: '广东金桥百信深圳律师事务所　版权所有',
  },
} as const

function PrivacyPolicyPage() {
  const [lang, setLang] = useState<Lang>('hant')
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[#0a1a35] text-white">
      <header className="sticky top-0 z-50 border-b border-[#c9a24b]/20 bg-[#0a1a35]/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-wide text-[#e8c76b]">
              金橋百信
            </span>
            <span className="hidden text-sm text-white/50 sm:inline">
              深圳律師事務所
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm text-white/80 hover:text-[#e8c76b]"
            >
              {t.backHome}
            </Link>
            <button
              onClick={() => setLang(lang === 'hant' ? 'hans' : 'hant')}
              className="rounded-full border border-[#e8c76b]/60 px-4 py-1.5 text-sm text-[#e8c76b] transition hover:bg-[#e8c76b] hover:text-[#0a1a35]"
            >
              {t.langLabel}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{t.title}</h1>
        <p className="mt-3 text-sm text-white/50">{t.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-white/80">{t.intro}</p>

        <div className="mt-10 space-y-10">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-xl font-semibold text-[#e8c76b]">
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                {section.body}
              </p>
              {'items' in section && (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-relaxed text-white/80"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-[#e8c76b]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-start gap-4 sm:flex-row">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#25d366] px-8 py-3.5 text-center text-base font-semibold text-[#0a1a35] transition hover:brightness-95"
          >
            {t.contact.whatsapp}
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="rounded-md border border-[#e8c76b] px-8 py-3.5 text-center text-base font-semibold text-[#e8c76b] transition hover:bg-[#e8c76b] hover:text-[#0a1a35]"
          >
            {t.contact.call}
          </a>
        </div>
      </main>

      <footer className="border-t border-[#c9a24b]/20 px-5 py-8 text-center text-xs text-white/50">
        <p>{t.footer}</p>
        <Link
          to="/"
          className="mt-2 inline-block text-white/50 underline decoration-white/20 underline-offset-2 transition hover:text-[#e8c76b] hover:decoration-[#e8c76b]/60"
        >
          {t.backHome}
        </Link>
      </footer>
    </div>
  )
}
