import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BackButton from '../components/BackButton';
import AICopilot from '../components/AICopilot';
import TutorialView from '../components/TutorialView';
import CodeEditor from '../components/CodeEditor';
import { RootStackParamList } from '../components/types'; 
import { StackNavigationProp } from '@react-navigation/stack';


type Section2ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Section2Screen'>;

interface Section2ScreenProps {
  navigation: Section2ScreenNavigationProp; 
}

const Section2Screen: React.FC<Section2ScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>React Ecosystem</Text>
          <Text style={styles.headerSubtitle}>Mastering React Fundamentals</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="dynamic-feed" size={24} color="#4CAF50" /> Basic React
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Components</Text>
              <Text style={styles.cardText}>• Functional Components</Text>
              <Text style={styles.cardText}>• Props and State</Text>
              <Text style={styles.cardText}>• JSX Syntax</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="refresh" size={24} color="#4CAF50" /> Component Lifecycle
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Lifecycle Methods</Text>
              <Text style={styles.cardText}>• Mounting</Text>
              <Text style={styles.cardText}>• Updating</Text>
              <Text style={styles.cardText}>• Unmounting</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
            <MaterialIcons name="cast" size={24} color="#4CAF50" />  {/* İkon adı doğru */}
<Text>React Hooks</Text>
            </Text>            <TutorialView
              title="useState Hook"
              description="Learn how to manage state in functional components"
              w3Link="https://react.dev/reference/react/useState"
              videoLink="https://www.youtube.com/watch?v=O6P86uwfdR0"
              codeExample={`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button 
        onPress={() => setCount(count + 1)}
        title="Increment"
      />
    </View>
  );
}`}
            />

            <TutorialView
              title="useEffect Hook"
              description="Learn how to handle side effects in React"
              w3Link="https://react.dev/reference/react/useEffect"
              videoLink="https://www.youtube.com/watch?v=0ZJgIjIuY7U"
              codeExample={`function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  return <Text>{JSON.stringify(data)}</Text>;
}`}
            />
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Advanced Hooks</Text>
              <Text style={styles.cardText}>• useReducer</Text>
              <Text style={styles.cardText}>• useMemo</Text>
              <Text style={styles.cardText}>• useCallback</Text>
            </View>
          </View>          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <MaterialIcons name="storage" size={24} color="#4CAF50" /> State Management
            </Text>
            
            <TutorialView
              title="Redux Store Setup"
              description="Learn how to set up Redux store in React Native"
              w3Link="https://redux.js.org/introduction/getting-started"
              videoLink="https://www.youtube.com/watch?v=9jULHSe41ls"
              codeExample={`// store.js
const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer
  }
});

// App.js
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}`}
            />

            <TutorialView
              title="Redux Actions & Reducers"
              description="Understanding Redux actions and reducers"
              w3Link="https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers"
              videoLink="https://www.youtube.com/watch?v=iBUJVy8phqw"
              codeExample={`// todoSlice.js
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})`}
            />

            <CodeEditor
              language="JavaScript"
              initialCode={`// Example Redux Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
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

export default Section2Screen;