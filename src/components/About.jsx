import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function About() {
    return (
      <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
        <Flex p={6} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={8} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'orange.400',
                  zIndex: -1,
                }}>
                Hello 👋
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                I am Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Aspiring full-stack web developer with hands-on experience in projects build
             on the MERN stack. Collaborative, team player who is proficient in working
             with interdisciplinary teams and executing goal-oriented projects and looking
             to join an organization where I can develop my skill set while contributing to
             the company.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'purple.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}>
                RESUME
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'profile Image'}
            rounded='full'
            objectFit={'cover'}
            src={
              'https://avatars.githubusercontent.com/u/101566293?v=4'
            }
          />
        </Flex>
      </Stack>
    );
  }