import { useTranslation } from 'next-i18next'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Typography, Box } from '@mui/material'
import Carousel from "react-material-ui-carousel"
import StarToggle from '../components/common/StarToggle/StarToggle'

const stepsCarousel = [
  {
    title: "carousel1",
    url: 'images/index/carousel1.jpg',
    desc: [
      "멋진 옷과 슈트케이스를 확인하세요.",
    ],
  },
  {
    title: "carousel2",
    url: 'images/index/carousel2.jpg',
    desc: [
      "자연광을 듬뿍 받은 옷을 확인하세요.",
    ],
  },
]

export default function Page() {
  const { t } = useTranslation('common')
  return (
    <>
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible
        sx={{
          width: '700px'
        }}
      >
        {stepsCarousel.map((content) => (
          <Box key={content.title} justifyContent="center">
            <img src={content.url} style={{ width: '700px', height: '300px' }} />
            {content.desc.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </Box>
        ))}
      </Carousel>
      <Typography variant='h3'>{t('greeting')}</Typography>
      <StarToggle />
    </>
  )
}

Page.leftActionType = 'menu'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'ko', ['common'])),
    },
  }
};