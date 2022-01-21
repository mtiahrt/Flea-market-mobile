import * as React from 'react';
import { List } from 'react-native-paper';
import { ScrollView, Text, View } from 'react-native';
import { CATEGORIES, SUBCATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handleSubcategoryOnPress = id => {
    navigation.navigate('ItemList', {
      subCategoryId: id,
    });
  };
  return (
    <ScrollView>
      {CATEGORIES.map(cat => {
        return (
          <List.Accordion
            key={cat.id}
            title={cat.title}
            left={props => <List.Icon {...props} icon={cat.iconName} />}
          >
            {SUBCATEGORIES.filter(x => x.categoryId === cat.id).map(subCat => {
              return (
                <List.Item
                  key={subCat.id}
                  title={subCat.title}
                  onPress={() => handleSubcategoryOnPress(subCat.id)}
                  left={props => (
                    (props.style = { marginLeft: 25, marginVertical: 0 }),
                    (
                      <List.Icon
                        {...props}
                        icon={subCat.iconName ? subCat.iconName : ''}
                      />
                    )
                  )}
                ></List.Item>
              );
            })}
          </List.Accordion>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesScreen;
