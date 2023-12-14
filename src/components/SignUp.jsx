import { VStack, Container, Text,Heading, Input, Button, Avatar } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = ()=>{
    return(
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form >
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <Heading textAlign={'center'}>VIDEO HUB</Heading>
                    <Avatar boxSize={'32'} alignSelf={'center'}></Avatar>
                    <Input placeholder="Name" type="text" required/>
                    <Input placeholder="Email" type="email" required/>
                    <Input placeholder="Password" type="password" required/>
                    <Button colorScheme="purple" type="submit">Sign Up</Button>

                    <Text textAlign={'right'}>
                        Already Sign up?{" "}
                        <Button variant={'link' }>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    )
}

export default SignUp;