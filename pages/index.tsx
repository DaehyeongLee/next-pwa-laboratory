import { useTranslation } from 'next-i18next'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Page() {
  const { t } = useTranslation('common')
  return <h1>{t('greeting')}</h1>
}


export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'ko', ['common'])),
    },
  }
};