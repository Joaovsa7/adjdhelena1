import { Heading } from "@chakra-ui/react"
import parse, { domToReact } from "html-react-parser"
import { GetServerSideProps } from "next"
import Link from "next/link"
import Container from "../components/container"
import Layout from "../components/layout"
import { getMenu, getPage } from "../lib/api"

export const getServerSideProps: GetServerSideProps = async ({
  params
}) => {
  const data = await getPage(params?.page)
  const menu = await getMenu()

  return {
    props: {
      data,
      menuItems: menu,
    },
  }
}

function parseHtml(html) {
  const options = {
    replace: ({ name, attribs, children }) => {
      if (!attribs) {
        return
      }

      if (attribs?.class?.includes('wp-')) {
        attribs.class = ''
      }
      // Convert internal links to Next.js Link components.
      const isInternalLink =
        name === "a" && attribs["data-internal-link"] === "true";

      if (isInternalLink) {
        return (
          <Link href={attribs.href}>
            <a {...attribs} class=''>{domToReact(children)}</a>
          </Link>
        );
      }
    },
  } as unknown as any

  return parse(html, options);
}

const Page = ({ data, menuItems }) => {
  const { page } = data
  const { title, content } = page

  return (
    <Layout menuItems={menuItems} preview={false}>
      <Container>
        <Heading>{title}</Heading>
        {parseHtml(content)}
      </Container>
    </Layout>
  )
}

export default Page


