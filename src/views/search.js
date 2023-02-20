import React from 'react';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import SuggestionCard from '../components/suggestion-card';
import SearchHistoryList from '../components/search-history-list';
import HomeSearch from '../components/home-search';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    summary: 'Açıklama ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item 2',
    summary: 'Açıklama 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item 3',
    summary: 'Açıklama 3',
  },
];

function SearchView({navigation}) {

  const [isSearchFocus, setSearchFocus] = React.useState(false);
  const [homeData, setHomeDate] = React.useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeDate(data);
  };
  React.useEffect(() => {
    getHomeData();
  }, []);
  return (
    <Box as={SafeAreaView} flex={1}>
      <StatusBar backgroundColor="#E11E3C" />
      {/* HEADER */}
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />
      {/* content */}
      <Box pt={isSearchFocus ? 0 : 20} flex={1}>
        {isSearchFocus ? (
          <Box flex={1}>
            
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0].madde
                })
              }
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title="Bir deyim - Atasözü"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.atasoz[0].madde
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;
