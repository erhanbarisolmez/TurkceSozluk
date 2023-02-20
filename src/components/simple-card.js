import React from 'react';
import Button from './button';
import Text from './text';

function SimpleCardContainer({children, ...props}) {
  return (
    <Button justifyContent="flex-start" borderRadius="normal" bg="white" p={16}  {...props}>
        {children}
    </Button>
  );
}

function SimpleCardTitle({children}) {
  return (
    <Text fontSize={16} fontWeight="bold">
      {children}
    </Text>
  );
}


export {SimpleCardContainer, SimpleCardTitle};
