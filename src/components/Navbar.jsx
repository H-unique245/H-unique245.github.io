import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Home','About','Skills', 'Projects', 'Contact', 'Resume'];

const Links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/skills",
    title: "Skills"
  },
  {
    path: "/projects",
    title: "Projects"
  },
  {
      path: "/contact",
      title: "Contact"
  },
  {
      path: "https://drive.google.com/file/d/1GCKeDmhmjuyUQPq5OrAODrrttRduvCjm/view?usp=share_link",
      title: "Resume"
  }
];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    color="whitesmoke"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: 'black',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children==="Resume" ? "https://drive.google.com/file/d/1GCKeDmhmjuyUQPq5OrAODrrttRduvCjm/view?usp=share_link": children}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('purple.400', 'purple.700')} px={4} pos="fixed"  w="100%" zIndex={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box rounded={'full'} border="3px solid orange" p={2} ><Image w={'4vh'} src='https://3.files.edl.io/bb16/22/02/18/154713-de5b1c4e-3d3f-44e0-95dc-bcb7627d37dc.png' slt='logo' /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.path}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            
                <Avatar
                  size={'md'}
                  src={
                    'https://avatars.githubusercontent.com/u/101566293?v=4'
                  }
                />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}