import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Image,
    Link,
  } from '@chakra-ui/react';
  // import {Link,useNavigate} from "react-router-dom";
   
  export default function ProjectCard({name,description,image,tech,project,deploylink, githublink}) {
    return (
      <Center py={6} px={3}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'5%'}
          p={6}
          textAlign={'center'}>
          <Image
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'30vh'}
            src={
              image
            }
            alt={'Avatar Alt'}
            mb={4}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'}  mb={4}>
            @{project}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            h={'10rem'} 
            px={3}>
            {description}
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {tech?.map((el)=>
            <Badge key={el}
            px={2}
            py={1}
            bg='purple.200'
            fontWeight={'400'}>
            {el}
          </Badge>
            )}
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Live
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={'xl'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
                <Link to={{pathname:githublink}} >
              Source 
              </Link>
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }