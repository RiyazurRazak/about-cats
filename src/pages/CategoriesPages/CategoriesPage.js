import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants/urls";
import { appKey } from "../../constants/vault";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${baseUrl}/categories?api_key=${appKey}`
      );
      const { data } = response;
      const formatedData = data.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setCategories(formatedData);
    })();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      (async () => {
        const response = await axios.get(
          `${baseUrl}/images/search?limit=${20}&category_ids=${selectedCategory}&api_key=${appKey}`
        );
        setImages(response.data);
      })();
    }
  }, [selectedCategory]);

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedCategory(selectedItems[0].value);
    }
  };

  return (
    <Box m="10px 10%">
      <CUIAutoComplete
        label="Select A Category"
        placeholder="hats"
        items={categories}
        onSelectedItemsChange={(changes) =>
          handleSelectedItemsChange(changes.selectedItems)
        }
      />
      <Wrap>
        {images.map((image, index) => (
          <WrapItem key={index}>
            <img
              src={image.url}
              alt={image.id}
              width="150px"
              height="150px"
              style={{ objectFit: "cover" }}
            />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default Categories;
