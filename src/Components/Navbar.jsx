import {   Flex,   Img,   Spacer } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-scroll'

function Navbar() {
  
  return (
      <Flex gap={4} px={{base:4,md:10}} alignItems='center'  className='navbar'>
         <Link
            activeClass="active"
            to="home"
            smooth={true}
            offset={-80}
            duration={500}
            
            >
        <Img w='100px'  cursor={'pointer'} my={-3} src='https://th.bing.com/th/id/OIP.VW_opBEygGcTN-jORhkvbgHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
        </Link>
            <Spacer/>
        <Flex gap={{base:5,md:5,lg:10}} wrap='wrap' justifyContent={'flex-end'}  display={{base:'none',md:'inherit'}}>
       
            <Flex gap={{base:5,md:5,lg:15}}>
                
        <Link 
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>About</button>
        </Link>
        <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>Projects</button>
        </Link>
            {/* </Flex> */}
            {/* <Flex  gap={{base:5,md:5,lg:10}}> */}
        <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>Skills</button>
        </Link>
        

        <button className='btn'>Resume</button>
        
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
        <button className='btn'>Contact</button>
        </Link>
            </Flex>
        </Flex>
      </Flex>
  )
}

export default Navbar