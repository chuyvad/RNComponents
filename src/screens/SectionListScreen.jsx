import React from 'react';

import {
    SectionList,
    Text,
    View,
} from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparatorComponent } from '../components/ItemSeparatorComponent';
import { globalStyles } from '../theme/appTheme';

const data = [
    {
        house: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        house: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        house: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const SectionListScreen = () => {
    return (
        <View style={globalStyles.globalMargin}>
            <SectionList
                sections={data}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title={'SectionList'} />}
                ListFooterComponent={() => <HeaderTitle title={`Houses ${data.length}`} />}
                renderSectionHeader={({ section }) => (
                    <View style={{backgroundColor: 'white'}}>
                        <HeaderTitle title={section.house} />
                    </View>
                )}
                ItemSeparatorComponent={() => <ItemSeparatorComponent />}
                SectionSeparatorComponent={() => <ItemSeparatorComponent />}
                renderSectionFooter={({section}) => (
                    <Text>{`Data: ${section.data.length}`}</Text>
                )}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled
            />
        </View>
    );
};
