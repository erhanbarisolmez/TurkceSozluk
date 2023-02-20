import React from 'react';
import Box from './box';
import Input from './input';
import {Search, X} from './icons';
import theme from '../utils/theme';
import Button from './button';
import {Keyboard, Text} from 'react-native';

function SearchBox({onChangeFocus}) {
    const [isFocus, setFocus] = React.useState(false);
    const [value, setValue] = React.useState('');
    
  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };
  const onClear = () => {
    setValue('');
  }

 React.useEffect(() => {
      onChangeFocus(isFocus)
    }, [isFocus,setFocus]);


  return (
        
    <Box  flexDirection="row" alignItems="center" flex={1}>
        <Box position="relative"  flex={1}>
            
        <Input
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
       
        placeholder="Türkçe Sözlük'te Ara"
        bg="white"
        colors="textDark"
        borderWidth={1}
        borderColor={isFocus ? "#D1D1D1" : "transparent"}
        placeholderTextColor="textMedium"
        height={52}
        pl={52}
        borderRadius="normal"
        value={value}
        onFocus={() => setFocus(true)}
        onChangeText={text => setValue(text)}
      />
      {value.length > 0 &&(
        <Button position="absolute" right={16} top={14}
      onPress={onClear}
      >
         <X color={theme.colors.textDark}/>
      </Button>
      )}
      
     
      <Button position="absolute" left={16} top={14}>
        <Search color={theme.colors.textMedium} />
      </Button>
        </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
   
  );
}

export default SearchBox;
