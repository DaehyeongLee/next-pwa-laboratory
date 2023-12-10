import { useTranslation } from 'next-i18next'

export default function Page() {
  const { t } = useTranslation('ko')
  return <h1>{t('greeting')}</h1>
}