import React from 'react';
import Text from './text';
import Button from './button';

function ActionButton({children, ...props}) {
  return <Button 
  style={{
    shadowColor:'#000',
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  }}
  px={8}
  {...props}
  minWidth="actionButton" height="actionButton" borderRadius="full" bg="white">{children}</Button>;
}

function ActionButtonTitle({children, ...props}){
    return <Text color="textLight" {...props} fontWeight="bold" ml={8} mr={8}>{children}</Text>;
}

export {
    ActionButton,
    ActionButtonTitle
} 