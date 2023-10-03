import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Agenda } from 'react-native-calendars';


//현재 윈도우 창 크기 정보를 가져와 높이 정보 추출
const { height } = Dimensions.get('window');

const CalendarScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Agenda
        style={styles.calendar}
        // 다양한 설정을 추가할 수 있습니다.
        // Agenda 컴포넌트를 커스터마이즈하려면 react-native-calendars의 공식 문서를 참조하세요.
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    height: 400, // 달력 높이 설정 
    
  },
});

export default CalendarScreen;
