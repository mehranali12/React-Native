import React, { useState, useEffect } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { CalendarList, Calendar } from 'react-native-calendars';



export default function CustomCalendar(props) {
  const { height, width } = useWindowDimensions();

  useEffect(() => {


  }, [])

  const { SelectStartAndEndDate } = props;
  const [startDate, ChangeStartDate] = useState(null);
  const [middleDates, ChangeMiddleDates] = useState(null);
  const [endDate, ChangeEndDate] = useState(null);
  return (
    <View style={{ zIndex: 1, }}>
      <Calendar
        style={{ width: "100%", height: 350, }}

        onDayPress={async date => {
          let middleDatesTemp = {};
          let removeMiddle = false;
          if (startDate == date.dateString) {
            ChangeStartDate(null);
            removeMiddle = true;
          } else if (endDate == date.dateString) {
            ChangeEndDate(null);
            removeMiddle = true;
          } else {
            if (startDate == null) {
              ChangeStartDate(date.dateString);
            } else {
               ChangeEndDate(date.dateString);
            }
          }
          let date1 = new Date(date.year, date.month - 1, date.day + 1);
          let splited;
          if (startDate != null) {
            splited = startDate.split('-');
          } else if (endDate != null) {
            splited = endDate.split('-');
          }
          if (splited != undefined) {
            let date2 = new Date(
              parseInt(splited[0]),
              parseInt(splited[1]) - 1,
              parseInt(splited[2]) + 1,
            );
            let startAdding = false;
            if (date1 < date2) {
              while (date1 < date2) {
                if (startAdding) {
                  let month = date1.getUTCMonth() + 1;
                  if (month < 10) month = '0' + month;
                  let day = date1.getUTCDate();
                  if (day < 10) day = '0' + day;
                  let formedDate =
                    date1.getUTCFullYear() + '-' + month + '-' + day;
                  // if (formedDate == date.dateString)
                  //     break
                  middleDatesTemp = {
                    ...middleDatesTemp,
                    [formedDate]: {
                      customStyles: {
                        container: {
                          backgroundColor: '#8DD061',
                          borderRadius: 0,
                          width: width * 0.19,
                          zIndex: 1,
                        },
                        text: {
                          color: "black",
                          fontWeight: 'bold',
                        },
                      },
                    },
                  };
                } else {
                  startAdding = true;
                }
                date1.setDate(date1.getDate() + 1);
              }
              const start = startDate
              ChangeStartDate(date.dateString)
              ChangeEndDate(start)
              
             
            } else {
              console.log('DATE1 > DATE2');
              console.log(startDate);
              // if (date2.split('T')[0] != startDate) //! error if device time is not correct
              //     startAdding = true
              while (date1 > date2) {
                console.log(date2);
                // console.log("DATE2.GETUTCMONTH")
                // console.log(date2.getUTCMonth())
                if (startAdding) {
                  let month = date2.getUTCMonth() + 1;
                  if (month < 10) month = '0' + month;
                  let day = date2.getUTCDate();
                  if (day < 10) day = '0' + day;
                  let formedDate =
                    date2.getUTCFullYear() + '-' + month + '-' + day;
                  // if (formedDate == date.dateString)
                  //     break
                  middleDatesTemp = {
                    ...middleDatesTemp,
                    [formedDate]: {
                      customStyles: {
                        container: {
                          backgroundColor: '#8DD061',
                          borderRadius: 0,
                          width: width * 0.19,
                          zIndex: 1,
                        },
                        text: {
                          color: "black",
                          fontWeight: 'bold',
                        },
                      },
                    },
                  };
                } else {
                  startAdding = true;
                }
                date2.setDate(date2.getDate() + 1);
              }
            }
          }

          if (!removeMiddle) {
            console.log('------------', middleDates)
            ChangeMiddleDates(middleDatesTemp);
          }




        }}
        markingType={'custom'}
        markedDates={{

          [startDate]: {
            customStyles: {
              container: {
                backgroundColor: '#8DD061',
                borderRadius: 0,
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
                zIndex: 2,
              },
              text: {
                color: '#fff',
                fontWeight: 'bold',
              },
            },
          },
          ...middleDates,
          [endDate]: {
            customStyles: {
              container: {
                backgroundColor: '#8DD061',
                borderRadius: 0,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
                zIndex: 2,
              },
              text: {
                color: '#fff',
                fontWeight: 'bold',
              },
            },
          },
        }}
        theme={{
          textSectionTitleColor: 'black',
          dayTextColor: 'black',
          monthTextColor: 'black',
          arrowColor: "#8DD061",
          indicatorColor: '#8DD061',

          backgroundColor: '#fff',
          calendarBackground: '#fff',
          selectedDayTextColor: '#fff',
          selectedDotColor: '#fff',

          todayTextColor: 'gray',

          textSectionTitleDisabledColor: '#fff',
          textDisabledColor: '#fff',

          // textDayFontFamily: 'monospace',
          // textMonthFontFamily: 'monospace',
          // textDayHeaderFontFamily: 'monospace',

          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          // textDayHeaderFontWeight: '700',

          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 16,



        }}



      />
    </View>
  );
}


