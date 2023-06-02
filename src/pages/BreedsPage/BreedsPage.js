import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/urls";
import { appKey } from "../../constants/vault";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
function Breeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${baseUrl}/breeds?api_key=${appKey}`);
      const { data } = response;
      setBreeds(data);
    })();
  }, []);

  console.log(breeds);

  return (
    <Box m="10px 10%">
      <Heading mb="24px">All Breads List</Heading>
      <Accordion m="0 10%" allowToggle>
        {breeds.map((breed) => (
          <AccordionItem key={breed.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"md"} m="20px 0">
                    {breed.name}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Image
                src={breed.image?.url}
                alt={breed.name}
                h="200px"
                w="100%"
                objectFit={"contain"}
                mb="12px"
              />
              <Text>{breed.description}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default Breeds;
