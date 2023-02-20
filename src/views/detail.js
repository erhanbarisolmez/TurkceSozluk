import {useIsFocused} from '@react-navigation/native';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Box from '../components/box';
import Text from '../components/text';
import {ActionButton, ActionButtonTitle} from '../components/action-button';
import {Fav, Hand, Voice} from '../components/icons';
import theme from '../utils/theme';
import DetailSummaryItemContainer from '../components/detail-summary-item';
import LoaderText from '../components/LoaderText';
import React from 'react';
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}
function DetailViews({route}) {
  const keyword = route.params?.keyword;
  //const keyword = "milliyet";
  const [data, setData] = React.useState(null);

  const getHomeDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    setData(data[0]);
  };
  React.useEffect(() => {
    getHomeDetailData();
  }, []);
  return (
    <Box as={SafeAreaView} flex={1} bg="softRed">
      <Box as={ScrollView} p={16}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
        <Box>
          <Text fontSize={32} color="black" fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Voice color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12} disabled={!data}>
            <Fav color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" disabled={!data}>
            <Hand color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map(item => (
                <DetailSummaryItemContainer
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira != '1'}></DetailSummaryItemContainer>
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItemContainer key={index} border={index != 1}>
                  <LoaderText widthSize={120} heightSize={16}></LoaderText>
                  <LoaderText
                    widthSize={200}
                    heightSize={16}
                    mt={10}></LoaderText>
                </DetailSummaryItemContainer>
              ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DetailViews;
