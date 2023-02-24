import { GetStaticProps } from 'next'
import Container from '../components/container'
import Layout from '../components/layout'
import { getMenu, getPage } from '../lib/api'
import { HeroBanner } from '../components/hero-banner'
import { AboutUs } from '../components/about-us'

export default function Index({ menuItems, data, preview }) {
 return (
    <Layout preview={preview} menuItems={menuItems}>
      <HeroBanner />
      <AboutUs />
      <Container>
        <main dangerouslySetInnerHTML={{ __html: data }} />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const menuData = await getMenu()
  const data = await getPage('/')

  return {
    props: { preview, menuItems: menuData, data: data.page.content },
    revalidate: 10,
  }
}
