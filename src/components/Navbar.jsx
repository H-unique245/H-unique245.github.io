import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "#about",
    title: "About"
  },
  {
    path: "#skills",
    title: "Skills"
  },
  {
    path: "#projects",
    title: "Projects"
  },
  {
      path: "#contact",
      title: "Contact"
  }
];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    color="#12343b"
    rounded={'md'}
    fontSize={'xl'}
    fontFamily='Montserrat'
    fontWeight='medium'
    _hover={{
      textDecoration: 'none',
      color: 'white',
      bg: useColorModeValue('#12343b', '#12343b'),
    }}
    href={children.path}>
      
    {children.title}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("./Hemant_Aher_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "./Hemant_Aher_Resume.pdf";
        alink.click();
      });
    });
    window.open("https://drive.google.com/file/d/1GCKeDmhmjuyUQPq5OrAODrrttRduvCjm/view?usp=share_link", '_blank');
    // changeDisplay("none")
  };
  return (
    <>
      <Box bgColor='#e5eaf5' boxShadow={'md'} px={4} pos="fixed"  w="100%" zIndex={2}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={'center'}>
            <Box rounded={'full'} p={2} ><Image w={{base:'30px',md:'20px',lg:'40px'}} src='https://3.files.edl.io/bb16/22/02/18/154713-de5b1c4e-3d3f-44e0-95dc-bcb7627d37dc.png' slt='logo' /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.title} to={link} onClick={isOpen ? onClose : onOpen}>{link}</NavLink>
              ))}
              <Button onClick={onButtonClick} fontFamily='Montserrat'
    fontWeight='medium'  _hover={{
      textDecoration: 'none',
      color: 'white',
      bg: useColorModeValue('#12343b', '#12343b'),
    }} fontSize={'xl'} variant={'ghost'} color="#12343b" border='0px'>Resume</Button>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
{/*             
                <Avatar
                  size={'md'}
                  src={
                    'https://avatars.githubusercontent.com/u/101566293?v=4'
                  }
                /> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} w="xs" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title}>{link}</NavLink>
              ))}
              <Button onClick={onButtonClick} fontFamily='Montserrat'
    fontWeight='medium'  _hover={{
      textDecoration: 'none',
      color: 'white',
      bg: '#12343b',
    }} fontSize={'xl'} variant={'ghost'} color="#12343b" border='0px'>Resume</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}