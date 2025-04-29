import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import AICopilot from '../components/AICopilot';
import TutorialView from '../components/TutorialView'; 
import CodeEditor from '../components/CodeEditor';
import { RootStackParamList } from '../components/types'; 
import { StackNavigationProp } from '@react-navigation/stack';


type Section4ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Section4Screen'>;

interface Section4ScreenProps {
  navigation: Section4ScreenNavigationProp; 
}

const Section4Screen: React.FC<Section4ScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Build & Deploy Apps</Text>
          <Text style={styles.headerSubtitle}>Creating Production Ready Apps</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="build" size={24} color="#4CAF50" /> Real-world Applications
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>App Architecture</Text>
              <Text style={styles.cardText}>• Project Structure</Text>
              <Text style={styles.cardText}>• Code Organization</Text>
              <Text style={styles.cardText}>• Best Practices</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Data Management</Text>
              <Text style={styles.cardText}>• API Integration</Text>
              <Text style={styles.cardText}>• Local Storage</Text>
              <Text style={styles.cardText}>• State Management</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="speed" size={24} color="#4CAF50" /> Performance
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Optimization Techniques</Text>
              <Text style={styles.cardText}>• Memory Management</Text>
              <Text style={styles.cardText}>• Render Optimization</Text>
              <Text style={styles.cardText}>• Network Optimization</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="android" size={24} color="#4CAF50" /> Android Deployment
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Publishing Process</Text>
              <Text style={styles.cardText}>• Generating APK/Bundle</Text>
              <Text style={styles.cardText}>• Play Store Guidelines</Text>
              <Text style={styles.cardText}>• Release Management</Text>
            </View>
          </View>          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="phone-iphone" size={24} color="#4CAF50" /> App Deployment
            </Text>

            <TutorialView
              title="Performance Optimization"
              description="Learn how to optimize React Native apps"
              w3Link="https://reactnative.dev/docs/performance"
              videoLink="https://www.youtube.com/watch?v=k2h7usLLBhY"
              codeExample={`// Use React.memo for component optimization
const MyComponent = React.memo(({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
    />
  );
});`}
            />

            <TutorialView
              title="App Publishing"
              description="Learn how to publish your app to stores"
              w3Link="https://reactnative.dev/docs/publishing-to-app-store"
              videoLink="https://www.youtube.com/watch?v=5tgcogEoIiQ"
              codeExample={`// app.json configuration
{
  "expo": {
    "name": "Your App Name",
    "version": "1.0.0",
    "android": {
      "package": "com.yourcompany.yourapp",
      "versionCode": 1
    },
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp",
      "buildNumber": "1.0.0"
    }
  }
}`}
            />

            <CodeEditor
              language="JavaScript"
              initialCode={`// Example Performance Optimization
import { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: heavyCalculation(item)
    }));
  }, [data]);

  return (
    <FlatList
      data={processedData}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
}`}
            />
          </View>
        </View>      </ScrollView>
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

export default Section4Screen;