import { PropsWithChildren } from 'react';
import {
  chakra,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
  TextProps
} from '@chakra-ui/react';
import Container from './container';

export const AboutUs = () => {
  return (
    <Box as='section' py={24} minH='60vh'>
      <Container>
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
          <Box mr={{ base: 0, md: 5 }} mb={{ base: 8, md: 0 }} pos="relative">
            <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: 'auto', md: '30rem' }}
              maxH="40rem"
              objectFit="cover"
              src={`https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
          <Stack direction="column" spacing={6} justifyContent="center">
            <chakra.h2 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
              Uma igreja Histórica
            </chakra.h2>
            <Box>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptas ad magnam suscipit culpa omnis labore mollitia dolore soluta unde. Obcaecati quod quidem assumenda veniam soluta saepe vel amet tenetur.
              </Content>
              <Content mt={4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias voluptas ad magnam suscipit culpa omnis labore mollitia dolore soluta unde. Obcaecati quod quidem assumenda veniam soluta saepe vel amet tenetur.
              </Content>
            </Box>
            <Link href="/sobre-nos" fontSize="sm" color="blue.400">
              Conheça nossa história →
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}
