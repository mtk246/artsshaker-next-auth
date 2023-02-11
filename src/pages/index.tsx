import Head from 'next/head';

import { Button, Card, Typography } from '@mui/material';
import Banner from '@/components/Banner';
import { NavBar } from '@/components/navigation';
import { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
const Home:NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <Banner
          title="Artsshaker"
          tagline="Portfolio builder & client manager for artists"
          btn1={
            <Button variant="contained" className="rounded-lg">
              Get Started
            </Button>
          }
          btn2={
            <Button variant="outlined" className="rounded-lg">
              <Typography variant="button" className="font-bold">
                Tutorial
              </Typography>
            </Button>
          }
        ></Banner>
      </main>
    </>
  );
}

export default Home;
