import { Box, Container, Heading,  Stack } from '@chakra-ui/react'
// import {Tooltip} from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import "./GitCalender.css";
function GitCalender() {
  const colorTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    <Box  pb={14}  alignItems="center" bgColor='#e5eaf5'>
  <Container  maxW={{base:'container.sm',sm:'container.md',md:'container.lg',lg:'container.xl'}} p={2}  centerContent >
    <Heading align="center" w={{base:'80%',md:'40%'}} boxShadow={'md'} p={2} fontSize={{base:'24px',sm:'28px',md:'36px'}} borderRadius='1vh' m={'auto'}  color='#12343b' >Git Hub Stats</Heading>
    <Stack direction={['column', 'row']} m={4} spacing={{base:4,md:8}}>
     <p align="left" ><img align="center" src="https://github-readme-stats.vercel.app/api?username=h-unique245&theme=prussian&show_icons=true&locale=en" alt="h-unique245" /></p>
     <p align="left"><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=h-unique245&theme=prussian" alt="h-unique245" /></p>
    </Stack>
 <Stack className="git_calender" m={5} p={4}>
    <GitHubCalendar
    username="H-unique245"
    blockSize={18}
    blockMargin={5}
    fontSize={16}
    showWeekdayLabels
    // hideTotalCount={true}
    // hideColorLegend={{base:false,sm:true, md:false}}
    theme={colorTheme}
  >
    {/* <Tooltip delayShow={20} html /> */}
  </GitHubCalendar>
  </Stack>
  </Container>
  </Box>
  )
}

export default GitCalender
