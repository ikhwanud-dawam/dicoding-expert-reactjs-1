import { HStack } from "@chakra-ui/react";
import ChipItem, { chipShape } from "./ChipItem";
import PropTypes from "prop-types";

export default function ChipsList({
  chips,
  selectedCategory,
  onCategoryClick,
}) {
  const uniqueCategory = chips.filter(
    (value, index, self) =>
      index === self.findIndex((chip) => chip.category === value.category),
  );

  return (
    <HStack mt="1rem" wrap="wrap">
      {uniqueCategory.map((chip) => (
        <ChipItem
          key={chip.id}
          isSelected={selectedCategory === chip.category}
          onCategoryClick={onCategoryClick}
          {...chip}
        />
      ))}
    </HStack>
  );
}

ChipsList.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.shape(chipShape)).isRequired,
  selectedCategory: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
};
