import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { toast } from 'sonner-native';

export default function HomeScreen({ navigation }) {  const [programmingExperience, setProgrammingExperience] = useState('');
  const [reactExperience, setReactExperience] = useState('');
  const [mobileExperience, setMobileExperience] = useState('');
  const [appType, setAppType] = useState('');

  const experienceLevels = [
    { label: 'No Experience', value: 'none' },
    { label: 'Beginner (0-1 year)', value: 'beginner' },
    { label: 'Intermediate (1-3 years)', value: 'intermediate' },
    { label: 'Advanced (3+ years)', value: 'advanced' }
  ];

  const appTypes = [
    { label: 'Social Media App', value: 'social' },
    { label: 'E-commerce App', value: 'ecommerce' },
    { label: 'Educational App', value: 'education' },
    { label: 'Business App', value: 'business' }
  ];  const handleStartLearning = () => {
    if (programmingExperience && reactExperience && mobileExperience && appType) {
      navigation.navigate('Roadmap', { 
        programmingExperience, 
        reactExperience, 
        mobileExperience,
        appType
      });
    } else {
      toast.error('Please fill all fields');
    }
  };


  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <MaterialIcons name="school" size={80} color="#4CAF50" style={styles.icon} />          
          <Text style={styles.header}>React Native Learning Journey</Text>
          <Text style={styles.subtitle}>Let's start your journey!</Text>         
           <View style={styles.card}>
            <Text style={styles.question}>What is your programming experience level?</Text>
            <View style={styles.optionsContainer}>
              {experienceLevels.map((level) => (
                <TouchableOpacity
                  key={level.value}
                  style={[
                    styles.optionButton,
                    programmingExperience === level.value && styles.selectedOption
                  ]}
                  onPress={() => setProgrammingExperience(level.value)}
                >
                  <Text style={[
                    styles.optionText,
                    programmingExperience === level.value && styles.selectedOptionText
                  ]}>
                    {level.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.question}>Do you have any experience with React.js?</Text>
            <View style={styles.optionsContainer}>
              {experienceLevels.map((level) => (
                <TouchableOpacity
                  key={level.value}
                  style={[
                    styles.optionButton,
                    reactExperience === level.value && styles.selectedOption
                  ]}
                  onPress={() => setReactExperience(level.value)}
                >
                  <Text style={[
                    styles.optionText,
                    reactExperience === level.value && styles.selectedOptionText
                  ]}>
                    {level.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.question}>Have you developed mobile apps before?</Text>
            <View style={styles.optionsContainer}>
              {experienceLevels.map((level) => (
                <TouchableOpacity
                  key={level.value}
                  style={[
                    styles.optionButton,
                    mobileExperience === level.value && styles.selectedOption
                  ]}
                  onPress={() => setMobileExperience(level.value)}
                >
                  <Text style={[
                    styles.optionText,
                    mobileExperience === level.value && styles.selectedOptionText
                  ]}>
                    {level.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.question}>What type of app do you want to build?</Text>
            <View style={styles.optionsContainer}>
              {appTypes.map((type) => (
                <TouchableOpacity
                  key={type.value}
                  style={[
                    styles.optionButton,
                    appType === type.value && styles.selectedOption
                  ]}
                  onPress={() => setAppType(type.value)}
                >
                  <Text style={[
                    styles.optionText,
                    appType === type.value && styles.selectedOptionText
                  ]}>
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity 
              style={styles.button}
              onPress={handleStartLearning}
            >
              <Text style={styles.buttonText}>Start Learning</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10, // Gap yerine margin kullanabilirsiniz
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    minWidth: '45%', // Ekran boyutlarına göre optimize edilebilir
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  optionText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#fff',
  },
  purposeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    gap: 10,
  },
  purposeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  selectedPurpose: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  purposeText: {
    color: '#666',
    fontSize: 14,
  },
  selectedPurposeText: {
    color: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  icon: {
    alignSelf: 'center',
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
