import { Heading } from '@chakra-ui/react'
import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <Heading as='h3' mb='4' fontWeight='light'>
        Leia também
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <a key={node.slug} href={`/artigos/${node.slug}`}>
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              excerpt={node.excerpt}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
