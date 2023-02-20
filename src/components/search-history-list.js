import React from "react";
import { FlatList } from "react-native";
import { SimpleCardContainer, SimpleCardTitle } from "./simple-card";
import Box from "./box";
import Text from "./text";

function SearchHistoryList({data}) {
    return ( 
        <FlatList
          style={{padding: 16}}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Box py={6}>
              <SimpleCardContainer>
                <SimpleCardTitle>{item.title}</SimpleCardTitle>
              </SimpleCardContainer>
            </Box>
          )}
          ListHeaderComponent={
            <Box mt={20}>
              <Text color="textLight">Son Aramalar</Text>
            </Box>
          }
        />
     );
}

export default SearchHistoryList;