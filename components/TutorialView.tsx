import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CodeEditor from './CodeEditor'; // CodeEditor bileşeninin doğru yolu

interface TutorialProps {
  title: string;
  description: string;
  w3Link: string;
  videoLink?: string; // videoLink isteğe bağlı
  codeExample?: string;
}

const TutorialView: React.FC<TutorialProps> = ({ title, description, w3Link, videoLink, codeExample }) => {
  return (
    <View style={styles.tutorialContainer}>
      <View style={styles.tutorialHeader}>
        <MaterialIcons name="school" size={24} color="#4CAF50" />
        <Text style={styles.tutorialTitle}>{title}</Text>
      </View>
      <Text style={styles.tutorialDescription}>{description}</Text>

      <View style={styles.buttonContainer}>
        {/* W3Link Butonu */}
        <TouchableOpacity 
          style={styles.tutorialButton}
          onPress={() => Linking.openURL(w3Link)}
        >
          <MaterialIcons name="school" size={20} color="#fff" />
          <Text style={styles.buttonText}>Tutorial</Text>
        </TouchableOpacity>

        {/* VideoLink varsa buton */}
        {videoLink && (
          <TouchableOpacity 
            style={[styles.tutorialButton, styles.videoButton]}
            onPress={() => Linking.openURL(videoLink)}
          >
            <MaterialIcons name="play-circle-filled" size={20} color="#fff" />
            <Text style={styles.buttonText}>Watch Video</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Kod örneği varsa göster */}
      {codeExample && (
        <CodeEditor
          language="JavaScript"
          initialCode={codeExample}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  tutorialButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    gap: 8,
  },
  videoButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  tutorialContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  tutorialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  tutorialTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  tutorialDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  w3Button: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  w3ButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TutorialView;
