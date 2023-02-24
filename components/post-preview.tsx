import Image from 'next/image';
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

export default function blogPostWithImage({ title, coverImage, excerpt, author, date }) {
  return (
    <Flex flexDirection='column'>
      <Box
        mb='8px'
        css={{
          img: {
            borderRadius: '8px',
          }
        }}
      >
        <Image
          height={300}
          width={300}
          src={`${coverImage.node.sourceUrl}`}
          alt={coverImage.node.altText}
        />
      </Box>
      <Box
        w={'full'}
        maxW={300}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'} dangerouslySetInnerHTML={{
            __html: excerpt
          }} />
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={author.node.avatar.url}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{author.node.name}</Text>
            <Text color={'gray.500'}>{date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
