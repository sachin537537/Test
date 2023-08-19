import { StyleSheet, Text, View, ScrollView, SafeAreaView, KeyboardAvoidingView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { TextInput, RadioButton, Button } from 'react-native-paper';


const village = [
  { village: 'Palanpur' },
  { village: 'Deesa' },
  { village: 'Ahmedabad' }
]

const App = () => {
  const [sname, setSname] = React.useState("");
  const [yname, setYname] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [gname, setGname] = React.useState("");
  const [pno, setPno] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [checked, setChecked] = React.useState('first');
  const [address, setAddress] = React.useState("");
  const [selectedVillage, setSelectedVillage] = React.useState("Select Village");
  const [isClicked, setIsClicked] = React.useState(false);
  const [data, setData] = React.useState(village);
  const searchRef = useRef()
  const onSearch = txt => {
    if (txt !== '') {
      let tempData = data.filter(item => {
        return item.village.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setData(tempData);
    }
    else {
      setData(village);
    }


  };
  return (


    <KeyboardAvoidingView style={styles.scrollView} behavior="height">
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainView}>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: "https://tinyurl.com/5yavzw9c" }}
            />
          </View>
          <View style={styles.textinput}>
            <TextInput
              label="Surname"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              value={sname}
              onChangeText={text => setSname(text)}
              left={<TextInput.Icon icon="account" color={'#DA670E'} />}
            />
          </View>
          <View style={styles.textinput}>
            <TextInput
              label="Yourname"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              value={yname}
              onChangeText={text => setYname(text)}
              left={<TextInput.Icon icon="account" color={'#DA670E'} />}
            />
          </View>
          <View style={styles.textinput}>
            <TextInput
              label="Father/Husband Name"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              value={fname}
              onChangeText={text => setFname(text)}
              left={<TextInput.Icon icon="account" color={'#DA670E'} />}
            />

          </View>

          <View style={styles.textinput}>
            <TextInput
              label="Grand Father's Name"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              value={gname}
              onChangeText={text => setGname(text)}
              left={<TextInput.Icon icon="account" color={'#DA670E'} />}
            />
          </View>
          <View style={styles.textinput}>
            <TextInput
              label="Phone Number"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              value={pno}
              onChangeText={text => setPno(text)}
              left={<TextInput.Icon icon="cellphone" color={'#DA670E'} />}
            />
          </View>
          <View style={styles.textinput}>
            <TextInput
              label="Email"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              value={email}
              onChangeText={text => setEmail(text)}
              left={<TextInput.Icon icon="email-outline" color={'#DA670E'} />}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>

            <View style={{ flexDirection: 'row' }}>

              <RadioButton value={'Male'}
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')} color='#DA670E' uncheckedColor='#DA670E' />
              <Text style={{ color: '#DA670E', fontSize: 15, marginTop: 5 }}>Male</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15 }}>
              <RadioButton value={'Female'}
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')} color='#DA670E' uncheckedColor='#DA670E' />
              <Text style={{ color: '#DA670E', fontSize: 15, marginTop: 5 }}>Female</Text>
            </View>
          </View>

          <View style={styles.textinput}>
            <TextInput
              label="Residence Address"
              mode='outlined'
              outlineColor='#DA670E'
              activeOutlineColor='#DA670E'
              multiline
              numberOfLines={3}
              value={address}
              onChangeText={text => setAddress(text)}
              left={<TextInput.Icon icon="home-account" color={'#DA670E'} />}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.dropdownSelector}
              onPress={() => { setIsClicked(!isClicked) }}>

              <Text style={{ color: '#000' }}>{selectedVillage}</Text>
              {isClicked ? (<Image source={require('./assets/images/upload.png')} style={styles.dropdownIcon} />
              ) : (<Image source={require('./assets/images/drop-down.png')} style={styles.dropdownIcon} />
              )}
            </TouchableOpacity>

            {isClicked ? (
              <View style={styles.dropdownArea}>
                <TextInput
                ref={searchRef} 
                placeholder='Search' style={styles.searchInput} onChangeText={(txt) => {
                  onSearch(txt)
                }}
                  activeUnderlineColor='#fff' underlineColor='#fff'
                />
                <FlatList data={data} renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={styles.villageItem} onPress={() => {
                      setSelectedVillage(item.village);
                      onSearch('');
                      setIsClicked(false);
                      searchRef.current.clear();
                    }}>
                      <Text style={{ color: "#DA670E" }}>{item.village}</Text>
                    </TouchableOpacity>
                  )
                }

                } />

              </View>
            ) : null}

          </View>
          <Button style={styles.button}
            mode='outlined'
            buttonColor='#DA670E'
            textColor='#fff'> Submit</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>


  )
}

export default App

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },


  scrollView: {
    flex: 1

  },
  tinyLogo: {

    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginBottom: 40
  },

  textinput: {
    width: '90%',
    margin: 5,
    backgroundColor: '#fff',
    fontSize: 18
  },
  dropdownSelector: {
    width: 370,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DA670E',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  dropdownIcon: {
    width: 24,
    height: 24
  },
  dropdownArea: {
    width: 370,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DA670E',
    marginTop: 20,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center'
  },
  searchInput: {
    width: '90%',
    borderRadius: 10,
    borderWidth: .5,
    borderColor: '#DA670E',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15
  },
  villageItem: {
    width: '85%',
    height: 50,
    borderBottomWidth: .5,
    borderBottomColor: "#DA670e",
    alignSelf: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 50
  }
})