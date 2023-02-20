import React from "react";
import Bg from "./bg";
import Box from "./box";
import { Logo } from "./icons";
import Search from '../components/search';

function HomeSearch({isSearchFocus, onSearchFocus}) {

    return (
        <Box position="relative" zIndex={1} height={isSearchFocus ? 25 : 230}>
        {!isSearchFocus && (
          <Bg> 
            {/* LOGO */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" />
            </Box>
          </Bg>
        )}
        {/* SEARCH */}
        <Box position="absolute" bottom={0} width="100%" mb={-45} p={16}>
          <Search onChangeFocus={status => onSearchFocus(status)} />
        </Box>
      </Box>
      );
}

export default HomeSearch;