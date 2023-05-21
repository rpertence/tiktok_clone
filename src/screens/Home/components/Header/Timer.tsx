/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import Clock from '../../../../components/Icons/Clock';
import {getSize} from '../../../../constants/sizes';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppContext from '../../../../context/AppContext';

const color = 'rgba(255, 255, 255, 0.6)';

const Timer = () => {
  const [time, setTime] = useState('');
  const appContext = useContext(AppContext);

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  const updateTime = () => {
    const now = new Date().getTime();
    const timeElapsed = now - appContext.startTime;
    const seconds = Math.trunc(timeElapsed / 1000);
    const minutes = Math.trunc(seconds / 60);
    const hours = Math.trunc(minutes / 60);

    if (hours > 0) {
      setTime(`${hours}h`);
    } else if (minutes > 0) {
      setTime(`${minutes}m`);
    } else {
      setTime(`${seconds}s`);
    }
  };

  return (
    <View style={styles.container}>
      <Clock color={color} width={getSize(20)} />
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color,
    fontSize: '1.6rem',
    marginLeft: '.4rem',
  },
});

export default Timer;
