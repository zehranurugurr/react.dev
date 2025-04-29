import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const roadmapItems = [
  {
    title: '1️⃣ Fundamental Web & Programming Skills',
    topics: [
      'Learn HTML & CSS',
      'Learn JavaScript (ES6/ES7/ES8)',
      'Understand basics of Node.js and npm'
    ],
    duration: '4 weeks',
  },
  {
    title: '2️⃣ React Ecosystem',
    topics: [
      'Learn basic React',
      'Component Lifecycle',
      'React Hooks',
      'State Management with Redux'
    ],
    duration: '6 weeks',
  },
  {
    title: '3️⃣ Dive into React Native',
    topics: [
      'React Native Components',
      'Styling and Layout',
      'React Navigation',
      'Native Modules'
    ],
    duration: '8 weeks',
  },
  {
    title: '4️⃣ Build & Deploy Apps',
    topics: [
      'Create real-world mobile apps',
      'Performance Optimization',
      'Publish on Android',
      'Publish on iOS'
    ],
    duration: '6 weeks',
  },
];

export default function RoadmapScreen({ route, navigation }) {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const username = route.params?.username || 'Misafir';

  const toggleStep = (index) => {
    const newCompletedSteps = new Set(completedSteps);
    if (completedSteps.has(index)) {
      newCompletedSteps.delete(index);
    } else {
      newCompletedSteps.add(index);
    }
    setCompletedSteps(newCompletedSteps);
  };  const calculateProgress = () => {
    const totalTopics = roadmapItems.reduce((acc, item) => acc + item.topics.length, 0);
    const completedTopics = Array.from(completedSteps).reduce((acc, stepIndex) => {
      return acc + roadmapItems[stepIndex].topics.length;
    }, 0);
    return completedTopics / totalTopics;
  };

  const progress = calculateProgress();

  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>            <Text style={styles.welcomeText}>Welcome, Learner!</Text>
            <Text style={styles.headerTitle}>React Native Roadmap</Text>
          </View>
          <Progress.Circle
            progress={progress}
            size={80}
            showsText
            formatText={() => `${Math.round(progress * 100)}%`}
            color="#4CAF50"
            thickness={8}
            strokeCap="round"
            style={styles.progressCircle}
          />
        </View>

        {roadmapItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.roadmapItem,
              completedSteps.has(index) && styles.completedItem,
            ]}
            onPress={() => toggleStep(index)}
          >
            <View style={styles.titleRow}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {completedSteps.has(index) && (
                <MaterialIcons name="check-circle" size={24} color="#4CAF50" />
              )}
            </View>
            
            <Text style={styles.duration}>Tahmini Süre: {item.duration}</Text>            <View style={styles.topicsList}>
              {item.topics.map((topic, topicIndex) => (
                <View key={topicIndex} style={styles.topicItem}>
                  <MaterialIcons name="arrow-right" size={16} color="#666" />
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
            <View style={styles.buttonContainer}>              <TouchableOpacity 
                style={styles.learnButton}
                onPress={() => {
                  navigation.navigate(`Section${index + 1}`);
                }}
              >
                <Text style={styles.buttonText}>Learn</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.completeButton,
                  completedSteps.has(index) && styles.completedButton
                ]}
                onPress={() => toggleStep(index)}
              >
                <Text style={styles.buttonText}>
                  {completedSteps.has(index) ? 'Completed' : 'Mark as Completed'}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap: 10,
  },
  learnButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButton: {
    flex: 1,
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    maxWidth: '80%',
  },
  progressCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 40,
  },
  roadmapItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  completedItem: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  topicsList: {
    marginTop: 8,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  topicText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
});