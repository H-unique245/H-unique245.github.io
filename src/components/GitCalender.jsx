import { Box, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

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
    <Box  p={10}  bgColor='purple.300' alignItems="center">
  <Container  maxW={{base:'container.sm',sm:'container.lg',md:'container.md',lg:'container.lg'}} p={5}  centerContent >
    <Heading>Git Hub Stats</Heading>
    <Stack direction={['column', 'row']} m={4} spacing={{base:4,md:8}}>
     <p align="left" ><img align="center" src="https://github-readme-stats.vercel.app/api?username=h-unique245&theme=shades-of-purple&show_icons=true&locale=en" alt="h-unique245" /></p>
     <p align="left"><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=h-unique245&theme=shades-of-purple" alt="h-unique245" /></p>
    </Stack>
    <GitHubCalendar
    username="H-unique245"
    blockSize={18}
    blockMargin={5}
    fontSize={16}
    showWeekdayLabels
    // hideTotalCount={true}
    // hideColorLegend={{base:true, lg:false}}
    theme={colorTheme}
  >
    {/* <ReactTooltip delayShow={20} html /> */}
  </GitHubCalendar>
  </Container>
  </Box>
  )
}

export default GitCalender
