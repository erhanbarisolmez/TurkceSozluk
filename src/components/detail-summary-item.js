import theme from '../utils/theme';
import Box from './box';
import Text from './text';

export default function DetailSummaryItemContainer({
  data,
  children,
  border,
  ...props
}) {
  const type = data?.ozelliklerListe && data.ozelliklerListe.map(_ => _.tam_adi) ||
  ["isim"]
  return (
    <Box position="relative" bg="white" py={20} px={28} {...props}>
      {border && (
        <Box
          borderWidth={1}
          borderColor={theme.colors.light}
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1}
        />
      )}
      {/* Body */}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text ml={-14} mr={8} color="atasozleriDark">
              {data.anlam_sira}
            </Text>
            <Text color="red">{type.join(', ')}</Text>
          </Box>
          <Box mt={8}>
            <Text {...props} fontWeight="600" color="textDark">
              {data.anlam}
            </Text>
            {data.orneklerListe &&
              data.orneklerListe.map(ornek => (
                <Box key={ornek.ornek_id}>
                  <Text
                    {...props}
                    fontWeight="500"
                    ml={10}
                    mt={12}
                    color="textLight">
                    {ornek.ornek}{' '}
                    <Text fontWeight="700" color="textLight">
                      {ornek.yazar_id != '0' && `- ${ornek.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
