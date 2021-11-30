import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import styles from '../styles/Home.module.css';
import { baseUrl, fetchApi } from './../utils/fetchApi'
import Property from '../components/Property';
const Banner = ({ purpose, title1, title2, imageUrl, linkName, buttonText, desc1, desc2 }) => {
  return (

    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}

          </Link>
        </Button>
      </Box>
    </Flex>
  )
}

export default function Home({ propertyForSale, propertyForRent }) {
  console.log("propertyForSale : " , propertyForSale);
  console.log("propertyForRent : " , propertyForRent);

  return (
    <Box>
      <Banner purpose="RENT A HOME"
        title1="Rentals Homes For "
        title2="Everyone"
        desc1="Explore Apartments , Villas , Homes"
        desc2="and More"
        buttonText="Explore Renting"
        linkName="/serach?purpose=for-rent"
        imageUrl="https://www.jquery-az.com/html/images/banana.jpg"
      />
      <Flex flexWrap="wrap" >
        {propertyForRent.map((property) => {
         return <Property key={property.id} propertyInfo = {property} />
        })}
      </Flex>
      <Banner purpose='BUY A HOME'
        title1="Find  , Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments , Villas , Homes"
        desc2="and More"
        buttonText="Explore Buying"
        linkName="/serach?purpose=for-sale"
        imageUrl="https://www.jquery-az.com/html/images/banana.jpg"

      />
      <Flex flexWrap="wrap" >
        {propertyForSale.map((property) => {
          return <Property key={property.id} propertyInfo = {property}/>
        })}
      </Flex>


    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }

}
