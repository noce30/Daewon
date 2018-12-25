import React, {Component} from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './style';
import Header from '../../components/Header';
import Colors from '../../common/Colors';
import storageService from '../../common/StorageService';
import Constants from '../../common/Constants';
import Languages from '../../common/Languages';

class Settings extends Component {
  state = {
    isSelectEnglish: false,
    isUSA: false
  }

  // handle country change
  async onCountryChange(value) {
    const country = !value ? Constants.Settings.us : Constants.Settings.il;

    // store to local storage
    await storageService.store(Constants.Store.Country, country);
    this.setState({ isUSA: value });
    //notification inform country was change
    SettingNotificaitonService.updateCountry(country);
  }

  // handle language change
  async onLanguageChange(value){
    const language = !value ? Constants.Settings.en : Constants.Settings.he;
    Languages.setLanguage(language);
    this.setState({isSelectEnglish: value});

    // store to local storage
    await storageService.store(Constants.Store.Language, language);

    //notification inform language was change
    SettingNotificaitonService.updateLanguage();
  }

  async componentWillMount() {
    const country = await storageService.retrieve(Constants.Store.Country);
    const language = await storageService.retrieve(Constants.Store.Language);

    // set default country
    if (country) {
      this.setState({ isUSA: country !== Constants.Settings.us });
    }
    
    // set default language
    if (language) {
      this.setState({ isSelectEnglish: language !== Constants.Settings.en });
    }
  }

  render() {
    return (
      <Container style={styles.container} type="header">
        <Header headerTitle={Languages.menuItemSettings} goBack={this.props.goToHome} />
        <View style={styles.settingBody}>
          <View style={styles.settingItemContainer}>

            <Text style={styles.textTitle}>{Languages.editUserPreferencesLanguage}</Text>

            <View style={styles.switchContainer}>
              <Text style={styles.textLeft}>EN</Text>
              <Switch style={styles.switchButton} value={this.state.isSelectEnglish}
                onValueChange={newValue => this.onLanguageChange(newValue)}
                onTintColor={Colors.AppColor} />
              <Text style={styles.textRight}>HE</Text>
            </View>

          </View>
          <View style={styles.settingItemContainer}>

            <Text style={styles.textTitle}>{Languages.editVolunteerInfoCountry}</Text>

            <View style={styles.switchContainer}>
              <Text style={styles.textLeft}>USA</Text>
              <Switch style={styles.switchButton} value={this.state.isUSA}
                onValueChange={newValue => this.onCountryChange(newValue)}
                onTintColor={Colors.AppColor}/>
              <Text style={styles.textRight}>Israel</Text>
            </View>
          </View>          
        </View>
      </Container>
    );
  }
}

export default Settings;
