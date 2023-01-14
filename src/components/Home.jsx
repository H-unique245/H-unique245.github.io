import {
    Box,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Home({HomeRef}) {
    return (
        <Stack  id="/"  bgColor='#e5eaf5' >
        {/* <Flex p={5} mt={20} flex={{base:1.5,md:2,lg:2}} align={'center'} justify={'center'}> */}
      <Stack mt={20} direction={{ base: 'column-reverse', md: 'row' }} alignItems="center" p={5} >
          
          <Stack spacing={8} w={'full'} maxW={{md:'60%'}} p={{sm:'',md:5}}>
            <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color='#16123f'
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '10%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Hello 👋
              </Text>
              <br />{' '}
              <Text w='100%' color={'#16123f'}  as={'span'}>
                I am Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md',md:"lg", lg: 'xl' }} fontWeight={400} lineHeight={'1.7'} color={'#16123f'}>
            Aspiring full-stack web developer with hands-on experience in projects build
             on the MERN stack. Collaborative, team player who is proficient in working
             with interdisciplinary teams and executing goal-oriented projects and looking
             to join an organization where I can develop my skill set while contributing to
             the company.
            </Text>
            <Stack alignItems={'center'}  spacing={4}>
              <Button
                rounded={'full'}
                w={{base:'',md:'sm',lg:'md'}}
                p={5}
                bg={'#12343b'}
                fontSize={{base:'md', md:'xl'}}
                color={'white'}
                _hover={{
                  bg: '#e5eaf5',
                border:'1px solid black',
                  color:'#12343b'
                }}>
                  {/* <i class="fa fa-download" aria-hidden="true"></i> */}
                  {/* rel="external" target="_blank" */}
                  <a href="./Hemant_Aher_Resume.pdf" download   >
          {/* Resume &nbsp; */}
                RESUME
                </a>
              </Button>
            </Stack>
          </Stack>
          {/* <Spacer></Spacer> */}
          <Box>
        <Image w={{base:"60%",sm:"60%",md:"80%",lg:'full'}} m={'auto'} rounded='50%' p={2} src="./profile.jpg" alt="about"/>
          </Box>
          </Stack>

        {/* </Flex> */}
        {/* <Flex bgColor={'purple.200'} flex={1}  align="center" >
        </Flex> */}
      </Stack>
    );
  }