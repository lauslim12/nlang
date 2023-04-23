import { Box, IconButton } from '@chakra-ui/react';
import { memo } from 'react';
import { FaLightbulb } from 'react-icons/fa';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => (
  <Box position="fixed" bottom="20px" right={['16px', '48px']} zIndex={3}>
    <IconButton
      aria-label="Icon button to toggle the color mode"
      size="sm"
      icon={<FaLightbulb />}
      colorScheme="teal"
      variant="solid"
      onClick={onClick}
    />
  </Box>
);

export default memo(FloatingActionButton);
