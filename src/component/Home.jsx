import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  CardFooter,
  Divider,
} from '@chakra-ui/react';
import React, { useState } from 'react';

function Home() {
  const [userName, setUsername] = useState('');
  const [data, setData] = useState(null);
  const getUserDetail = async () => {
    let details = await fetch(`https://api.github.com/users/${userName}`);
    const result = await details.json();
    setData(result);
    console.log(data);
  };

  return (
    <>
      <Box
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
        margin="auto"
      >
        <Stack>
          <input
            type="text"
            placeholder="Enter Github username"
            onChange={event => {
              setUsername(event.target.value);
            }}
            style={{
              alignSelf: 'center',
              width: '20rem',
              border: '0.1rem solid blue',
              borderRadius: '0.5rem',
              height: '3rem',
              padding: '2rem',
            }}
          />
          <Button onClick={getUserDetail} width="40" alignSelf={'center'}>
            Get Information
          </Button>
          <Card
            display={'flex'}
            alignItems={'center'}
            justifyContent={'centetr'}
            width="2xl"
            shadow={'2xl'}
          >
            {data ? (
              <>
                <Stack
                  height={'80'}
                  backgroundColor={'blue.600'}
                  w="2xl"
                  marginTop={'10'}
                ></Stack>
                <CardBody>
                  <Image
                    src={data.avatar_url}
                    borderRadius={'full'}
                    alt={'User Image'}
                    alignSelf="center"
                    marginTop={'-60'}
                    objectFit="cover"
                  />
                  <Stack
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Heading size={'lg'}>User Name: {data.login}</Heading>
                    <Heading size={'md'}>Name : {data.name}</Heading>
                    <Divider />
                    <Text>No of public repo : {data.public_repos}</Text>
                    <Text>No of public gists : {data.public_gists}</Text>
                    <Divider />
                    <CardFooter>
                      <Text>
                        Profile created on :
                        {new Date(data.created_at).toISOString().slice(0, 10)}
                      </Text>
                    </CardFooter>
                  </Stack>
                </CardBody>
              </>
            ) : (
              <Heading>Please Enter Github Username</Heading>
            )}
          </Card>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
