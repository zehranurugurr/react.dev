import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AICopilot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are a helpful React Native learning assistant. Keep answers brief and focused.' },
            { role: 'user', content: question }
          ]
        })
      });
      
      const data = await response.json();
      setAnswer(data.completion);
    } catch (error) {
      setAnswer('Sorry, I could not process your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={[styles.container, !isExpanded && styles.collapsed]}>
      <TouchableOpacity 
        style={styles.toggleButton}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <MaterialIcons 
          name={isExpanded ? "close" : "chat"} 
          size={24} 
          color="#fff" 
        />
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.content}>
          <Text style={styles.title}>AI Learning Assistant</Text>
          <TextInput
            style={styles.input}
            placeholder="Ask me anything about React Native..."
            value={question}
            onChangeText={setQuestion}
            multiline
          />
          <TouchableOpacity 
            style={styles.askButton}
            onPress={handleAsk}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Ask</Text>
            )}
          </TouchableOpacity>
          {answer ? (
            <View style={styles.answerContainer}>
              <Text style={styles.answer}>{answer}</Text>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 15,
    padding: 15,
    maxWidth: '80%',
    maxHeight: '60%',
  },
  collapsed: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  toggleButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  content: {
    marginTop: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    minHeight: 40,
  },
  askButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  answerContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
  },
  answer: {
    color: '#fff',
    fontSize: 14,
  },
});