import { useTranslation } from 'next-i18next'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Typography } from '@mui/material'

export default function Page() {
  const { t } = useTranslation('common')
  return <Typography variant='h3'>{t('greeting')}</Typography>
}

Page.leftActionType = 'menu'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'ko', ['common'])),
    },
  }
};