import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsLinkedin,BsTwitter, BsPerson } from 'react-icons/bs';
  
  export default function Contact(
    ) {
    return (
      <section id="contact" >
      <Container bgColor='#e5eaf5' maxW="100%" p={1} centerContent overflow="hidden">
        <Heading align="center" w='40%' boxShadow={'md'} borderRadius='1vh' m={'auto'} fontSize={{base:'24px',sm:'28px',md:'36px'}}  color='#12343b'>Contact</Heading>
        <Flex >

          <Box
            bg="#12334b"
            color="white"
            // m='auto'
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            >
            <Box p={6}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 40 }}>
                <WrapItem>
                  <Box>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid purple.500' }}
                          leftIcon={<MdPhone color="purple.500" size="20px" />}>
                          +91-86000 85196
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid purple.500' }}
                          leftIcon={<MdEmail color="purple.500" size="20px" />}>
                          a.hemant96@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid purple.500' }}
                          leftIcon={<MdLocationOn color="purple.500" size="20px" />}>
                          Nashik, Maharashtra (India)
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <Link href='https://twitter.com/AherHemant1' isExternal><IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#12334b' }}
                        icon={<BsTwitter size="28px" />}
                      />
                      </Link>
                      <Link href='https://github.com/H-unique245' isExternal>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#12334b' }}
                        icon={<BsGithub size="28px" />}
                      />
                      </Link>
                      <Link href="https://www.linkedin.com/in/hemant-aher-197814b7/" isExternal>
                      <IconButton
                        aria-label="linkedIn"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#12334b' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      </Link>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="#e5eaf5" borderRadius="lg" >
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5} w="100%" >
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size={"lg"} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="lg" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#12334b"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </section>
    );
  }