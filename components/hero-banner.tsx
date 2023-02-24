import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export const HeroBanner = () => {
  return (
    <Flex
      w={'full'}
      h={{
        base: 400,
        md: '95vh'
      }}
      backgroundImage="url('/hero-image.webp')"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 12 })}
        bgGradient={' linear-gradient(180deg, rgba(65,124,254,0) 0%, rgba(0,0,0,0.7273503151260504) 72%);'}>
        <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}
            align='center'
          >
            Somos uma família para o Pai, uma casa para o Espírito e <br /> uma noiva para o Filho
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
