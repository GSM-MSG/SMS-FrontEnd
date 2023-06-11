import env from '@lib/env'
import Head from 'next/head'

interface Props {
  title?: string
  description?: string
  link?: string
  image?: string
}

const SEO = ({
  title,
  description = '광주소프트웨어마이스터고등학교에 재학중인 학생들의 이력을 관리하는 서비스입니다',
  link = env.NEXT_PUBLIC_CLIENT_URL,
  image = '/png/twitter-card.png',
}: Props) => {
  return (
    <Head>
      <title>SMS{title && ` | ${title}`}</title>

      <meta
        name='keywords'
        content='SMS,sms,광주소프트웨어마이스터고등학교,학생,관리,gsm'
      />
      <meta name='description' content={description} />

      {/* twitter card */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={link} />
      <meta property='og:image' content={image} />

      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={title} />
      <meta name='twitter:url' content={link} />
      <meta name='twitter:image' content={image} />
    </Head>
  )
}

export default SEO
