import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const NotificationScreen = (props) => {
 const [notifications, setNotifications] = useState([]);
 const [markedAsRead, setMarkedAsRead] = useState(false);

 useEffect(() => {
    // Anda bisa menggantikan data di bawah ini dengan data asli Anda
    const data = [
      { id: '1', title: 'Appointment Success', time: '2h', isRead: false },
      { id: '2', title: 'Schedule Changed', time: '3h', isRead: false },
      { id: '3', title: 'Appointment Cancelled', time: '1d', isRead: false },
      { id: '4', title: 'New Paypal Added', time: '2h', isRead: false },
      { id: '5', title: 'Video Call Appointment', time: '3h', isRead: false },
    ];

    setNotifications(data);
 }, []);

 const handleMarkAllAsRead = () => {
    setMarkedAsRead(true);

    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      isRead: true,
    }));

    setNotifications(updatedNotifications);
 };

 const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* <Image source={require('./assets/notification.png')} style={styles.notificationIcon} /> */}
      <View style={styles.content}>
        <Text style={[styles.title, item.isRead && styles.readTitle]}>{item.title}</Text>
        <Text style={[styles.time, item.isRead && styles.readTime]}>{item.time}</Text>
      </View>
    </View>
 );

 return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.markAllButton} onPress={handleMarkAllAsRead}>
        <Text style={styles.markAllText}>Mark all as read</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
 },
 item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
 },
 content: {
    marginLeft: 15,
 },
 title: {
    fontSize: 16,
    fontWeight: 'bold',
 },
 time: {
    fontSize: 14,
    color: '#666',
 },
 readTitle: {
    fontWeight: 'normal',
 },
 readTime: {
    color: '#999',
 },
 notificationIcon: {
    width: 30,
    height: 30,
 },
 markAllButton: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    marginTop: 10,
 },
 markAllText: {
    color: '#fff',
    fontSize: 16,
 },
});

export default NotificationScreen;