import React from 'react';
import Box from './box';
import Button from './button';
import Text from './text';

function CardContainer({children, ...props}) {
  return (
    <Button borderRadius="normal" bg="white" py={16} px={12} {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="#DCE0E0" pl={12} >
        {children}
      </Box>
    </Button>
  );
}

function CardTitle({children}) {
  return (
    <Text fontSize={18} fontWeight="bold" color="textDark">
      {children}
    </Text>
  );
}
function CardSummary({children}) {
  return (
    <Text fontSize={14} mt={8} color="textMedium">
      {children}
    </Text>
  );
}

export {CardContainer, CardTitle, CardSummary};
