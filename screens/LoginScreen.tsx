import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { toast } from 'sonner-native';

export default function LoginScreen({ navigation }) {  const [email, setEmail] = useState('demo@reactlearn.app');
  const [password, setPassword] = useState('demo123');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = () => {
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    if (isRegistering) {
      // Here you would typically make an API call to register
      toast.success('Registration successful!');
      navigation.navigate('Home');
    } else {
      // Here you would typically make an API call to login
      toast.success('Login successful!');
      navigation.navigate('Home');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://api.a0.dev/assets/image?text=dark%20starry%20night%20sky%20with%20stars' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <MaterialIcons name="code" size={80} color="#4CAF50" style={styles.icon} />
        
        <Text style={styles.header}>React Learning Journey</Text>
        <Text style={styles.subtitle}>Start your learning adventure today!</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleAuth}
          >
            <Text style={styles.buttonText}>
              {isRegistering ? 'Register' : 'Login'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.switchButton}
            onPress={() => setIsRegistering(!isRegistering)}
          >
            <Text style={styles.switchText}>
              {isRegistering ? 'Already have an account? Login' : 'New user? Register'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  switchText: {
    color: '#4CAF50',
    fontSize: 14,
  },
});