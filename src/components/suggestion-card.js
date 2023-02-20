import Box from "./box";
import Text from "./text";
import { CardContainer, CardSummary, CardTitle } from "./card";
import LoaderText from "./LoaderText";


function SuggestionCard({title,onPress,data, ...props}) {
    return (
        <Box {...props}>
        <Text>{title}</Text>
        <CardContainer
          mt={10}
          onPress={onPress}
          >
        { data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>
              {data.anlam}
            </CardSummary>
          </>) : (
            <Text> <LoaderText widthSize={120} heightSize={16}></LoaderText>
            <LoaderText
              widthSize={200}
              heightSize={16}
              mt={10}></LoaderText>
            </Text>
        )
        }
        </CardContainer>
      </Box>
      );
}

export default SuggestionCard;