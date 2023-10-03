import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarView() {
  const markedDates = {
    //user seleted
    '2023-10-05': { selected: true },
    '2022-02-27': { marked: true },
     }
  return (
    <Calendar 
      style={styles.calendar} 
      markedDates={markedDates}
      theme={{
        selectedDayBackgroundColor: 'red',
        arrowColor: 'blue',
        dotColor: 'green',
       
      }} />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }
});

export default CalendarView;