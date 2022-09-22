import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, ImageBackground, Dimensions, Button, Image, Settings, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

function LoginScreen({navigation}) {
  return (
    <ImageBackground 
    source={require('/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/new-background-4.jpg')} imageStyle={{opacity: 0.65}} style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.spacebox}></View>
      <Text style={styles.welcome}>Welcome back! Please take a moment to sign in</Text>
      <View style={styles.spacebox}></View>
      <TextInput style={styles.input} placeholder="Please enter username"></TextInput>
      <View style={styles.spacebox}></View>
      <TextInput style={styles.input} 
        placeholder="Please enter password" secureTextEntry={true}></TextInput>
      <View style={styles.spacebox}></View>
      <Button title='Log In' style={styles.loginButton} onPress={() => navigation.navigate('Home')}></Button>
      <View style={styles.spacebox}></View>
      <Text style={styles.welcome}>New member? Please <Text onPress={() => navigation.navigate('Signup')} style= {{color: '#2196f3'}}>sign up</Text></Text>
      <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

function SignUpScreen({navigation}) {
  return (
    <ImageBackground 
    source={require('/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/new-background-4.jpg')} imageStyle={{opacity: 0.65}} style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.header}>Sign Up</Text>
      <View style={styles.spacebox}></View>
      <Text style={styles.welcome}>Welcome to Share Your Coffee! Please take a moment to sign up</Text>
      <View style={styles.spacebox}></View>
      <TextInput style={styles.input} placeholder="Please enter email address"></TextInput>
      <View style={styles.spacebox}></View>
      <TextInput style={styles.input} placeholder="Please enter username"></TextInput>
      <View style={styles.spacebox}></View>
      <TextInput style={styles.input} 
        placeholder="Please enter password" secureTextEntry={true}></TextInput>
      <View style={styles.spacebox}></View>
      <TextInput style={styles.input} 
        placeholder="Please confirm password" secureTextEntry={true}></TextInput>
      <View style={styles.spacebox}></View>
      <Button title='Sign Up' style={styles.loginButton} onPress={''}></Button>
      <View style={styles.spacebox}></View>
      <Text style={styles.welcome}>Already a member? Please <Text onPress={() => navigation.navigate('Login')} style= {{color: '#2196f3'}}>log in</Text></Text>
      <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

function SettingsScreen() {
  return(
    <Text>Settings Screen</Text>
  );
}


function HomeScreen( navigation ) {
  return (
    <ImageBackground source={require('/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/new-background-4.jpg')} imageStyle={{opacity: 0.65}} style={styles.container}>
    <SafeAreaView>
    <ScrollView>
    <View style={styles.scrollableItem}>
        <Image style={styles.homeImage} source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/flat-white-3402c4f.webp")}/>
        <View style={styles.bottomInfo}>
          <View style={styles.icons}>
            <Icon size={32} name="ios-heart-outline"/>
            <Icon size={32} name="ios-navigate"/>
          </View>
          <View style={styles.profileName}>
            <Image source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/nora-hutton-tCJ44OIqceU-unsplash.jpg")}style={styles.profilePic}/>
            <Text style={styles.name}>girl.username</Text>
          </View>
          <Text style={styles.caption}>Mornings are better with delicious breakfast food and coffee. Too much morning, not enough coffee.</Text>
        </View>
      </View>

      <View style={styles.scrollableItem}>
        <Image style={styles.homeImage} source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/flat-white-3402c4f.webp")}/>
        <View style={styles.bottomInfo}>
          <View style={styles.icons}>
            <Icon size={32} name="ios-heart-outline"/>
            <Icon size={32} name="ios-navigate"/>
          </View>
          <View style={styles.profileName}>
            <Image source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/nora-hutton-tCJ44OIqceU-unsplash.jpg")}style={styles.profilePic}/>
            <Text style={styles.name}>man.username</Text>
          </View>
          <Text style={styles.caption}>Mornings are better with delicious breakfast food and coffee. Too much morning, not enough coffee.</Text>
        </View>
      </View>

      <View style={styles.scrollableItem}>
        <Image style={styles.homeImage} source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/flat-white-3402c4f.webp")}/>
        <View style={styles.bottomInfo}>
          <View style={styles.icons}>
            <Icon size={32} name="ios-heart-outline"/>
            <Icon size={32} name="ios-navigate"/>
          </View>
          <View style={styles.profileName}>
            <Image source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/nora-hutton-tCJ44OIqceU-unsplash.jpg")}style={styles.profilePic}/>
            <Text style={styles.name}>girl.username</Text>
          </View>
          <Text style={styles.caption}>Mornings are better with delicious breakfast food and coffee. Too much morning, not enough coffee.</Text>
        </View>
      </View>

      <View style={styles.scrollableItem}>
        <Image style={styles.homeImage} source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/flat-white-3402c4f.webp")}/>
        <View style={styles.bottomInfo}>
          <View style={styles.icons}>
            <Icon size={32} name="ios-heart-outline"/>
            <Icon size={32} name="ios-navigate"/>
          </View>
          <View style={styles.profileName}>
            <Image source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/nora-hutton-tCJ44OIqceU-unsplash.jpg")}style={styles.profilePic}/>
            <Text style={styles.name}>girl.username</Text>
          </View>
          <Text style={styles.caption}>Mornings are better with delicious breakfast food and coffee. Too much morning, not enough coffee.</Text>
        </View>
      </View>

      <View style={styles.scrollableItem}>
        <Image style={styles.homeImage} source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/flat-white-3402c4f.webp")}/>
        <View style={styles.bottomInfo}>
          <View style={styles.icons}>
            <Icon size={32} name="ios-heart-outline"/>
            <Icon size={32} name="ios-navigate"/>
          </View>
          <View style={styles.profileName}>
            <Image source={require("/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/nora-hutton-tCJ44OIqceU-unsplash.jpg")}style={styles.profilePic}/>
            <Text style={styles.name}>girl.username</Text>
          </View>
          <Text style={styles.caption}>Mornings are better with delicious breakfast food and coffee. Too much morning, not enough coffee.</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}


function FinderScreen() {
  return (
    <ImageBackground source={require('/Users/henniescheepers/mtn-app-academy-intermedite-m4/assets/img/new-background-4.jpg')} imageStyle={{opacity: 0.3}} style={styles.container}>
    <SafeAreaView>
    <Text>Map module to be added</Text>
    <View style={styles.profile}>
      <Image source={require("/Users/henniescheepers/mtn-app-academy-m3/my-app/assets/img/nora-hutton-tCJ44OIqceU-unsplash.jpg")}style={styles.profilePic}/>
      <Text style={styles.name}>girl.username</Text>
    </View>    
    </SafeAreaView>
    </ImageBackground>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} options={({route, navigation}) => ({title: "Home Screen", headerRight: () => (<Button
                  onPress={() => navigation.navigate("Find A Spot")}
                  title="Find a Spot!"
                />
)})} />
        <Stack.Screen name="Find A Spot" component={FinderScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  profile:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  containerHome: {
  },

  header: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    padding: 0,
    fontFamily: 'sans-serif-light'
  
  },

  input: {
    textAlign: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    color: 'black',
    fontFamily: 'sans-serif-light',
  },
  spacebox: {
    height: 20,
  },
  welcome: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
  },
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    padding: 45,
    paddingTop: 60,
    paddingBottom: 90,
    borderRadius: 20,
    width: Dimensions.get('window').width,
    borderColor: 'white',
    borderWidth: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth:0,
  },
  loginButton: {
    color: 'black', 
  },

  scrollableItem: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     width: 350,
     alignSelf: 'center',
     backgroundColor: 'rgba(255, 255, 255, 0.8)',
     borderRadius: 20,
     margin: 10,
     borderColor: 'white',
     borderWidth: 2,
  },
  homeImage: {
    width:'100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 20
  },

  profileName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 300,
    padding: 5,
    paddingTop: 0,
    borderBottomWidth: 0.5,
  },

  profilePic: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50
  },

  name: {
    textAlign: 'left',
    margin: 5,
    fontSize: 18,
    fontFamily: 'sans-serif',
  },

  caption: {
    margin: 10,
    textAlign: 'left',
  },
});

export default App