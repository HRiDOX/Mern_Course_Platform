import React from 'react';
import { Link } from 'react-router-dom'
import { Heading, Stack, VStack,Text ,Button,Image, Box,HStack} from '@chakra-ui/react';
import "./home.css"
import vg from "../../assets/images/bg.png"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from  "react-icons/si";
import {DiAws} from "react-icons/di"
const Home = () => {
  return (
   <section className='home'>
    <div className="container">
        <Stack
        direction={['column','row']}
        height="100%"
        justifyContent={['center','space-between']}
        alignItems="center"
        spacing={['16','56']}
        
        
        >

            <VStack width={'full'} alignItems={['center','flex-end']}>
                <Heading children="Learn From The Noob" size={'2xl'}/> 
                <Text children="Find Your Favourites Courses From Here"/>
                <Link to="/courses">
                    <Button size={"lg"} colorScheme="yellow">
                        Explore Now

                    </Button>
                
                </Link>

            </VStack>
            <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain"/>

        </Stack>
    </div>
    <Box padding={"8"} bg="blackAlpha.800">
        <Heading textAlign={"center"} fontFamily="body" color={"yellow.400"} children="Brands"/>
    </Box>
    <HStack className='brandsBanner'>
        <CgGoogle/>
        <CgYoutube/>
        <SiCoursera/>
        <SiUdemy/>
        <DiAws/>
    </HStack>
    

   </section>
  )
}

export default Home
