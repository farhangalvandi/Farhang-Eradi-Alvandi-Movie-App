import { Box, Center, CheckIcon, Select } from "native-base";

const SelectType = props => {
  const { options, onSelectChange, selectedOption } = props;
  const service = selectedOption;

  return (
    <Center>
      <Box minHeight="20" py="6">
        <Select
          selectedValue={service}
          minWidth="200"
          defaultValue={options[0].value}
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" color="white" />
          }}
          mt={1}
          onValueChange={value => onSelectChange(value)}
        >
          {options.map(option => (
            <Select.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Select>
      </Box>
    </Center>
  );
};

export default SelectType;
