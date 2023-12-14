import { VStack, Container, Text,Heading, Input, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = ()=>{
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form >
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <Heading textAlign={'center'}>Welcome Back</Heading>
                    <Input placeholder="Email" type="email" required/>
                    <Input placeholder="Password" type="password" required/>
                    <Button variant={'link'} alignSelf={'flex-end'}>Forgot Password?</Button>

                    <Button colorScheme="purple" type="submit">Log in</Button>

                    <Text textAlign={'right'}>
                        New user?{" "}
                        <Button variant={'link' }>
                            <Link to={'/signup'}>sing up</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container>
    );
}

export default Login;