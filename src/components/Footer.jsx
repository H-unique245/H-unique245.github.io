import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
//   import { ReactNode } from 'react';
  
  const SocialButton = ({ children, label, href}) => {
    return (
      <chakra.button
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.900')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('white.400', 'white.600'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
      bgColor='#e5eaf5'
        borderTop= {'1px solid'}
        // mt={2}
        m="auto"
        color={useColorModeValue('black.400', 'black.900')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Made by Hemant Aher with ❤️  |  All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/AherHemant1'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/hemant-aher-197814b7/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/H-unique245'}>
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }