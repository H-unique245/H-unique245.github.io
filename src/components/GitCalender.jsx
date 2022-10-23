import { Container, Heading, HStack } from '@chakra-ui/react'
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

function GitCalender() {
  return (
    // <Box m={5} p={10} ml={15} alignItems="center">
  <Container maxW={{base:'container.sm',sm:'container.lg',md:'container.md',lg:'container.lg'}} p={5}  centerContent>
    <Heading>Git Hub Stats</Heading>
    <HStack m={4} spacing={8}>
     <p align="left" ><img align="center" src="https://github-readme-stats.vercel.app/api?username=h-unique245&show_icons=true&locale=en" alt="h-unique245" /></p>
     <p align="left"><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=h-unique245&" alt="h-unique245" /></p>
    </HStack>
    <GitHubCalendar
    username="H-unique245"
    blockSize={18}
    fontSize={18}
    showWeekdayLabels
    // hideTotalCount={true}
    // hideColorLegend={{base:true, lg:false}}
    // theme={colorTheme}
  >
    <ReactTooltip delayShow={20} html />
  </GitHubCalendar>
  </Container>
//   </Box>
  )
}

export default GitCalender
