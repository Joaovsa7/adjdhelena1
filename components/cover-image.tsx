import Image from 'next/image'

interface Props {
  title: string
  coverImage: {
    node: {
      sourceUrl: string
    }
  }
  slug?: string
}

export default function CoverImage({ title, coverImage }: Props) {
  const image = (
    <Image
      src={coverImage.node.sourceUrl}
      alt={title}
      height={600}
      width={600}
      style={{
        borderRadius: 8
      }}
      objectFit='cover'
    />
  )

  return image
}
