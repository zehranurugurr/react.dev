import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import AICopilot from '../components/AICopilot';
import TutorialView from '../components/TutorialView'; 
import CodeEditor from '../components/CodeEditor';
import { RootStackParamList } from '../components/types'; 
import { StackNavigationProp } from '@react-navigation/stack';


type Section3ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Section3Screen'>;

interface Section3ScreenProps {
  navigation: Section3ScreenNavigationProp; 
}

const Section3Screen: React.FC<Section3ScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dive into React Native</Text>
          <Text style={styles.headerSubtitle}>Mobile Development Essentials</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="widgets" size={24} color="#4CAF50" /> React Native Components
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Core Components</Text>
              <Text style={styles.cardText}>• View</Text>
              <Text style={styles.cardText}>• Text</Text>
              <Text style={styles.cardText}>• Image</Text>
              <Text style={styles.cardText}>• ScrollView</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>UI Components</Text>
              <Text style={styles.cardText}>• TouchableOpacity</Text>
              <Text style={styles.cardText}>• TextInput</Text>
              <Text style={styles.cardText}>• FlatList</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="style" size={24} color="#4CAF50" /> Styling and Layout
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Flexbox in React Native</Text>
              <Text style={styles.cardText}>• Flex Direction</Text>
              <Text style={styles.cardText}>• Justify Content</Text>
              <Text style={styles.cardText}>• Align Items</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Responsive Design</Text>
              <Text style={styles.cardText}>• Dimensions API</Text>
              <Text style={styles.cardText}>• Platform Specific Styles</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="navigation" size={24} color="#4CAF50" /> React Navigation
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Navigation Types</Text>
              <Text style={styles.cardText}>• Stack Navigation</Text>
              <Text style={styles.cardText}>• Tab Navigation</Text>
              <Text style={styles.cardText}>• Drawer Navigation</Text>
            </View>
          </View>          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="extension" size={24} color="#4CAF50" /> React Native Components
            </Text>

            <TutorialView
              title="Basic Components"
              description="Learn about fundamental React Native components"
              w3Link="https://reactnative.dev/docs/components-and-apis"
              videoLink="https://www.youtube.com/watch?v=ur6I5m2nTvk"
              codeExample={`import { View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome!</Text>
      </View>
    </ScrollView>
  );
}`}
            />

            <TutorialView
              title="Flexbox Layout"
              description="Master flexbox layout in React Native"
              w3Link="https://reactnative.dev/docs/flexbox"
              videoLink="https://www.youtube.com/watch?v=R2eqAgR_KlU"
              codeExample={`const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#4CAF50'
  }
})`}
            />

            <CodeEditor
              language="JavaScript"
              initialCode={`import { StyleSheet, View } from 'react-native';

export default function FlexboxExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={[styles.box, { backgroundColor: '#2196F3' }]} />
      <View style={[styles.box, { backgroundColor: '#F44336' }]} />
    </View>
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

export default Section3Screen;