import React from "react";
import { Layout, List, ListItem, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const ListEntities = ({ iconComponent, data, onPress }) => {
  const renderItemImage = (style, item) => {
    return iconComponent(style, item);
  };

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name}`}
      icon={style => renderItemImage(style, item)}
      onPress={e => onPress(item)}
    />
  );

  return (
    <Layout style={styles.container}>
      <List data={data} renderItem={renderItem} style={styles.container} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListEntities;
