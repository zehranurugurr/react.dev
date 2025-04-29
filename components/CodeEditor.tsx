import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface CodeEditorProps {
  initialCode: string;
  language: string;
}

export default function CodeEditor({ initialCode, language }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const handleRun = () => {
    // Bu demo versiyonunda sadece kodu gösteriyoruz
    // Gerçek uygulamada bir JavaScript runtime veya API kullanılabilir
    setOutput(`Console Output:\n${code}`);
  };

  return (
    <View style={styles.editorContainer}>
      <View style={styles.editorHeader}>
        <MaterialIcons name="code" size={24} color="#4CAF50" />
        <Text style={styles.editorTitle}>{language} Editor</Text>
      </View>
      
      <TextInput
        style={styles.codeInput}
        value={code}
        onChangeText={setCode}
        multiline
        numberOfLines={6}
        placeholder={`Write your ${language} code here...`}
      />

      <TouchableOpacity 
        style={styles.runButton}
        onPress={handleRun}
      >
        <MaterialIcons name="play-arrow" size={20} color="#fff" />
        <Text style={styles.runButtonText}>Run Code</Text>
      </TouchableOpacity>

      {output ? (
        <View style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Output:</Text>
          <Text style={styles.outputText}>{output}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  editorContainer: {
    backgroundColor: 'rgba(40,44,52,0.95)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  editorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  editorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  codeInput: {
    backgroundColor: 'rgba(30,33,39,0.95)',
    color: '#fff',
    fontFamily: 'monospace',
    padding: 12,
    borderRadius: 8,
    minHeight: 120,
    marginBottom: 12,
  },
  runButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  runButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  outputContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: 'rgba(30,33,39,0.95)',
    borderRadius: 8,
  },
  outputTitle: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  outputText: {
    color: '#fff',
    fontFamily: 'monospace',
  },
});