import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'

export default function index() {
  return (
    <ScrollView >
      <View style={styles.Page}>
        <Text style={styles.header}>AMLAJAN PRIVACY POLICY</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or Amlajan.
        </Text>

        <Text style={styles.subHeader}>
        PERSONAL INFORMATION WE COLLECT
        </Text>
        <Text style={styles.paragraph}>
          When you visit the App, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the App, we collect information about the individual web pages or products that you view, what Apps or search terms referred you to the App, and information about how you interact with the App. We refer to this automatically-collected information as “Device Information.”
        </Text>
        <Text style={styles.paragraph}>
          We collect Device Information using the following technologies:
        </Text>
        <Text style={styles.paragraph}>
              - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
              - “Log files” track actions occurring on the App, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
              - “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the App.
          </Text>
            <Text style={styles.paragraph}>
            When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
            </Text>
          <Text style={styles.subHeader}>
          HOW DO WE USE YOUR PERSONAL INFORMATION?
          </Text>
            <Text style={styles.paragraph}>
            We use the Order Information that we collect generally to fulfill any orders placed through the App (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
            Communicate with you;
            Screen our orders for potential risk or fraud; and
            When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
            </Text>
            <Text style={styles.paragraph}>
            We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our App (for example, by generating analytics about how our customers browse and interact with the App, and to assess the success of our marketing and advertising campaigns).
            </Text>
          <Text style={styles.subHeader}>
          SHARING YOUR PERSONAL INFORMATION
          </Text>
            <Text style={styles.paragraph}>
            We share your Personal Information with third parties to help us use your Personal Information, as described above.  For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here:  https://www.shopify.com/legal/privacy.  We also use Google Analytics to help us understand how our customers use the App--you can read more about how Google uses your Personal Information here:  https://www.google.com/intl/en/policies/privacy/.  You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout.
            </Text>
            <Text style={styles.paragraph}>
            Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </Text>
          <Text style={styles.subHeader}>
          DO NOT TRACK
          </Text>
            <Text style={styles.paragraph}>
            Please note that we do not alter our App’s data collection and use practices when we see a Do Not Track signal from your browser.
            </Text>
            <Text style={styles.paragraph}>
            Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the App), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
            </Text>
          <Text style={styles.subHeader}>
          DATA RETENTION
          </Text>
            <Text style={styles.paragraph}>
            When you place an order through the App, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </Text>
          <Text style={styles.subHeader}>
          CHANGES
          </Text>
            <Text style={styles.paragraph}>
            We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </Text>
          <Text style={styles.subHeader}>
          CONTACT US
          </Text>
            <Text style={styles.paragraph}>
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at adrenine13@gmail.com or by mail using the details provided below:
            </Text>
          <Text style={{textAlign:"center"}}>
          Sambalpur, Burla, OR, 768018, India
          </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom:10,
    marginBottom:10,
  },
  header:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    paddingBottom:20
  },
  subHeader:{
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold",
    paddingBottom:10
  },
  paragraph:{
    textAlign:"justify",
    paddingBottom:30,
  }
})
