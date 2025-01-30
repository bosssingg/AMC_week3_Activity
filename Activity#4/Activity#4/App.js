import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('Name:');
  const [age, onChangeTextAge] = React.useState('Age:');
  const [address, onChangeTextAddress] = React.useState('Address:');
  const [school, onChangeTextSchool] = React.useState('School:');
  const [course, onChangeTextCourse] = React.useState('Course:');
  const [email, onChangeTextEmail] = React.useState('Email:');
  const [contactno, onChangeTextContactno] = React.useState('Contactno:');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/560/560199.png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextName}
            value={name}
            placeholder="Name"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/027/244/338/non_2x/age-icon-on-transparent-background-free-png.png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextAge}
            value={age}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://www.vhv.rs/dpng/d/433-4334831_address-png-file-address-icon-png-transparent-png.png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextAddress}
            value={address}
            placeholder="Address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.-L2n0chjtPQq3y0eXXL_FAHaHa?rs=1&pid=ImgDetMain' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextSchool}
            value={school}
            placeholder="School"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://icon-library.com/images/course-icon/course-icon-17.jpg' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextCourse}
            value={course}
            placeholder="Course"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.LJToC8Q5-Kwm7tMwY5GAgwHaHa?rs=1&pid=ImgDetMain' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextEmail}
            value={email}
            placeholder="Email"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.Atl5EnYj6vIyUbex4BUF3wAAAA?w=400&h=400&rs=1&pid=ImgDetMain' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextContactno}
            value={contactno}
            placeholder="Contact"
          />
        </View>
        
        <MultilineTextInputExample />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const MultilineTextInputExample = () => {
  const [value, onChangeText] = React.useState('AboutMe:Im Christian Guilelrmo from Catmon malabon city, and my course now is Batcherlor Science Information Technolongy in Global Reciprocal College.');

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          multilineStyles.container,
          {
            backgroundColor: value,
          },
        ]}
      >
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={multilineStyles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    width: 25, 
    height: 30,
    marginRight: 15, 
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

const multilineStyles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    
  },
  textInput: {
    padding: 10,
    margin: 1,
    borderWidth: 1,
  },
});

export default TextInputExample;
