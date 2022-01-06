import * as React from 'react';
import { List } from 'react-native-paper';
import { ScrollView, Text, View } from 'react-native';
import Category from '../data/models/category';
import { CATEGORIES, SUBCATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);

  // const handlePress = () => setExpanded(!expanded);
  const handleSubcategoryOnPress = id => {
    navigation.navigate('ItemList', {
      subCategoryId: id,
    });
  };
  return (
    <ScrollView>
      {CATEGORIES.map(cat => {
        return (
          <List.Section>
            <List.Accordion
              title={cat.title}
              left={props => <List.Icon {...props} icon={cat.iconName} />}
            >
              {SUBCATEGORIES.filter(x => x.categoryId === cat.id).map(
                subCat => {
                  return (
                    <List.Item
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
                }
              )}
            </List.Accordion>
          </List.Section>
        );
      })}
    </ScrollView>
  );
};

export default CategoriesScreen;
