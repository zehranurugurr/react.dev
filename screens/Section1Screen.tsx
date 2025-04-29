import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import BackButton from '../components/BackButton';
import AICopilot from '../components/AICopilot';
import TutorialView from '../components/TutorialView';
import CodeEditor from '../components/CodeEditor';
import { RootStackParamList } from '../components/types'; 

type Section1ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Section1Screen'>;

interface Section1ScreenProps {
  navigation: Section1ScreenNavigationProp; 
}

const Section1Screen: React.FC<Section1ScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Fundamental Web & Programming Skills</Text>
          <Text style={styles.headerSubtitle}>Building Your Foundation</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="code" size={24} color="#4CAF50" /> HTML & CSS
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>HTML Basics</Text>
              <Text style={styles.cardText}>• Document structure</Text>
              <Text style={styles.cardText}>• Semantic elements</Text>
              <Text style={styles.cardText}>• Forms and inputs</Text>
            </View>            
            <TutorialView
              title="HTML Structure"
              description="Learn about HTML document structure and basic elements"
              w3Link="https://www.w3schools.com/html/html_basic.asp"
              videoLink="https://www.youtube.com/watch?v=UB1O30fR-EE"
              codeExample={`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
            />

            <TutorialView
              title="HTML Forms"
              description="Learn how to create interactive forms in HTML"
              w3Link="https://www.w3schools.com/html/html_forms.asp"
              videoLink="https://www.youtube.com/watch?v=fNcJuPIZ2WE"
              codeExample={`<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>`}
            />
            <CodeEditor
              language="HTML"
              initialCode={`<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>`}
            />
            <View style={styles.card}>
              <Text style={styles.cardTitle}>CSS Fundamentals</Text>
              <Text style={styles.cardText}>• Selectors and properties</Text>
              <Text style={styles.cardText}>• Flexbox and Grid</Text>
              <Text style={styles.cardText}>• Responsive design</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="javascript" size={24} color="#4CAF50" /> JavaScript
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Modern JavaScript</Text>
              <Text style={styles.cardText}>• ES6+ features</Text>
              <Text style={styles.cardText}>• Async/await</Text>
              <Text style={styles.cardText}>• Promises</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Advanced Concepts</Text>
              <Text style={styles.cardText}>• Closures</Text>
              <Text style={styles.cardText}>• Prototypes</Text>
              <Text style={styles.cardText}>• Event loop</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="settings" size={24} color="#4CAF50" /> Node.js & npm
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Node.js Basics</Text>
              <Text style={styles.cardText}>• Runtime environment</Text>
              <Text style={styles.cardText}>• Module system</Text>
              <Text style={styles.cardText}>• Package management</Text>
            </View>
          </View>
        </View>      
      </ScrollView>
      <BackButton />
      <AICopilot />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ddd',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default Section1Screen;
