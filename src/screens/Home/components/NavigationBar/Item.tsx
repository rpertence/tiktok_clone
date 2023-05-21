import React from 'react';
import Text from '../../../../components/Text';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';
import Home from '../../../../components/Icons/Home';
import COLORS from '../../../../constants/colors';
import {getSize} from '../../../../constants/sizes';
import Discover from '../../../../components/Icons/Discover';
import Save from '../../../../components/Icons/Save';

interface ItemProps {
  type: 'home' | 'discover' | 'activity' | 'bookmarks' | 'profile';
  active?: boolean;
}

const Item = (props: ItemProps) => {
  const color = props.active ? COLORS.white : 'rgba(255, 255, 255, 0.4)';

  const getIcon = () => {
    switch (props.type) {
      case 'home':
        return <Home color={color} width={getSize(21)} />;
      case 'discover':
        return <Discover color={color} width={getSize(20)} />;
      case 'activity':
        return <Text style={{...styles.textIcon, color}}>􀐰</Text>;
      case 'bookmarks':
        return <Save color={color} width={getSize(17)} />;
      case 'profile':
        return <Text style={{...styles.textIcon, color}}>􀉮</Text>;
    }
  };

  const getLabel = () => {
    switch (props.type) {
      case 'home':
        return 'Home';
      case 'discover':
        return 'Discover';
      case 'activity':
        return 'Activity';
      case 'bookmarks':
        return 'Bookmarks';
      case 'profile':
        return 'Profile';
    }
  };

  return (
    <View style={styles.container}>
      {getIcon()}
      <Text style={{...styles.label, color}}>{getLabel()}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: '1rem',
    marginTop: '.7rem',
  },
  textIcon: {
    fontSize: '1.8rem',
  },
});

export default Item;
