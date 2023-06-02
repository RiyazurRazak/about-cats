import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/urls";
import { appKey } from "../../constants/vault";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { catFacts } from "../../data/catFacts";

function Home() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${baseUrl}/images/search?limit=${10}&api_key=${appKey}`
      );
      setImages(response.data);
    })();
  }, []);

  return (
    <React.Fragment>
      <Box
        position={"relative"}
        height={"500px"}
        width={"full"}
        overflow={"hidden"}
      >
        <Slider dots autoplay centerMode arrows infinite>
          {images.map((image) => (
            <Box
              key={image.id}
              height={"500px"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${image.url})`}
            />
          ))}
        </Slider>
      </Box>
      <br />
      <Heading textAlign="center">About Cats</Heading>
      <article>
        <Text m="12px 10%" textAlign="justify">
          The cat (Felis catus) is a domestic species of small carnivorous
          mammal.[1][2] It is the only domesticated species in the family
          Felidae and is commonly referred to as the domestic cat or house cat
          to distinguish it from the wild members of the family.[4] Cats are
          commonly kept as house pets but can also be farm cats or feral cats;
          the feral cat ranges freely and avoids human contact.[5] Domestic cats
          are valued by humans for companionship and their ability to kill small
          rodents. About 60 cat breeds are recognized by various cat
          registries.[6] The cat is similar in anatomy to the other felid
          species: it has a strong flexible body, quick reflexes, sharp teeth,
          and retractable claws adapted to killing small prey like mice and
          rats. Its night vision and sense of smell are well developed. Cat
          communication includes vocalizations like meowing, purring, trilling,
          hissing, growling, and grunting as well as cat-specific body language.
          Although the cat is a social species, it is a solitary hunter. As a
          predator, it is crepuscular, i.e. most active at dawn and dusk. It can
          hear sounds too faint or too high in frequency for human ears, such as
          those made by mice and other small mammals.[7] It also secretes and
          perceives pheromones.[8] Female domestic cats can have kittens from
          spring to late autumn, with litter sizes often ranging from two to
          five kittens.[9] Domestic cats are bred and shown at events as
          registered pedigreed cats, a hobby known as cat fancy. Population
          control of cats may be achieved by spaying and neutering, but their
          proliferation and the abandonment of pets has resulted in large
          numbers of feral cats worldwide, contributing to the extinction of
          entire bird, mammal, and reptile species.[10]
        </Text>
      </article>
      <br />
      <Heading textAlign="center" mb="16px">
        More About Cats
      </Heading>
      <Accordion m="0 10%" allowMultiple allowToggle>
        {catFacts.map((fact, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {fact.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>{fact.content}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <br />
    </React.Fragment>
  );
}

export default Home;
