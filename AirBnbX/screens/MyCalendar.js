import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


class MyCalendar extends Component {

  render(){

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{marginTop: 0, borderBottomWidth: 1,
            borderBottomColor: '#dddddd', alignItems: 'center',
            justifyContent: 'center' }}>
                  <Text style={{ fontSize: 24, fontWeight: '700', color: 'rgb(240, 143, 119)', marginTop: 10 }}>
                      CalendarX
                  </Text>
            </View>
            <View style={{ flex: 1 }}>
                <Calendar
                   theme={{
                    calendarBackground: '#ffffff',
                    selectedDayBackgroundColor: 'rgb(240, 143, 119)',
                    todayTextColor: 'rgb(240, 143, 119)',
                    arrowColor: 'rgb(240, 143, 119)',
                    monthTextColor: '#47525E',
                    textMonthFontWeight: 'bold',
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16

                   }}
                firstDay={1}

                markedDates={{
                   '2018-10-16': {selected: true}
               }}
                onDayPress={(day) => {alert(day.dateString)}}
                />


            <View style={{ height: 30, backgroundColor: 'rgb(250, 250, 250)',
            flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#dddddd',
            borderBottomWidth: 1, borderBottomColor: '#dddddd'
            }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
                borderRightWidth: 0.5, borderRightColor: '#dddddd', backgroundColor: '#355C7D'
                }} activeOpacity={0.5}>

                    <Text style={{ fontSize: 16, color: '#ffffff', fontWeight: '400' }}>
                        Overview
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
                borderLeftWidth: 0.5, borderLeftColor: '#dddddd', backgroundColor: 'rgb(250, 250, 250)'
                }} activeOpacity={0.5} >

                    <Text style={{ fontSize: 16, color: '#2d4150', fontWeight: '400' }}>
                        Manage
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 30, width: 100 + '%', backgroundColor: 'green', marginTop: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 30, color: '#47525E' }}>
                    Your Plan
                </Text>
            </View>

            <View style={{ flex: 1, backgroundColor: 'rgb(250, 250, 250)' }}>
            </View>

            <View style={{ height: 54, flexDirection: 'row', marginBottom: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1, marginLeft: 30, fontSize: 10, color: '#47525E', fontWeight: 'bold' }}>
                        Use plan for next day
                    </Text>


                    <TouchableOpacity style={{ flex: 3, alignItems: 'center', justifyContent: 'center',
                    borderRadius: 10, backgroundColor: 'rgb(240, 143, 119)', marginRight: 20,
                    marginLeft: 30
                    }} activeOpacity={0.5} >
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#ffffff' }}>
                        Day
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1, marginLeft: 20, fontSize: 10, color: '#47525E', fontWeight: 'bold' }}>
                        Use plan for this week
                    </Text>


                    <TouchableOpacity style={{ flex: 3, alignItems: 'center', justifyContent: 'center',
                    borderRadius: 10, backgroundColor: 'rgb(240, 143, 119)', marginRight: 30,
                    marginLeft: 20
                    }} activeOpacity={0.5} >
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#ffffff' }}>
                        Week
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
      </SafeAreaView>

  );
  }
}

export default MyCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1

  }
 })
