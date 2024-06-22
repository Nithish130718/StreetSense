import React from "react";
import KeyFeatures from "../Components/KeyFeatures";

function TermsConditions() {
  return (
    <div className="terms-and-conditions">
      <div className="t-and-c-content">
        <h3> Terms and Conditions</h3>
        <Keyfeatures
          title="Acceptance of Terms"
          description="By downloading, installing, accessing, or using StreetSense (the 'App'), you agree to be bound by these terms and conditions, our Privacy Policy, and any additional terms and conditions that may apply to specific features or services within the App."
        />
        <Keyfeatures
          title="User Consent"
          description="By using the App, you consent to the collection, use, and sharing of your location data for the purpose of providing traffic updates, navigation services, and improving the overall user experience. You have the option to disable location services within your device settings, but please note that this may limit the functionality of the App."
        />
        <Keyfeatures
          title="Accuracy of Information"
          description="While we strive to provide accurate and up-to-date traffic information, we cannot guarantee the accuracy, completeness, or reliability of the data provided. You acknowledge that traffic conditions may change rapidly and that the App may not always reflect real-time updates."
        />
        <Keyfeatures
          title="Use of Data"
          description="We may collect and use various types of data, including but not limited to your location data, device information, and usage data. This data is used to improve the performance of the App, personalize your experience, and provide relevant traffic updates and navigation services."
        />
        <Keyfeatures
          title="Privacy"
          description="We are committed to protecting your privacy and safeguarding your personal information. Please review our Privacy Policy to understand how we collect, use, and disclose your data."
        />
        <Keyfeatures
          title="Intellectual Property"
          description="The App, including all content, features, and functionality, is owned by StreetSense or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not modify, reproduce, distribute, or create derivative works based on the App without our prior written consent."
        />
        <Keyfeatures
          title="Third-Party Services"
          description="The App may include links to third-party websites, services, or content that are not owned or controlled by StreetSense. We are not responsible for the content, privacy policies, or practices of these third-party services and encourage you to review their terms and conditions and privacy policies."
        />
        <Keyfeatures
          title="Disclaimer of Warranties"
          description="The App is provided on an 'as is' and 'as available' basis without any warranties of any kind, express or implied. StreetSense disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement."
        />
        <Keyfeatures
          title="Limitation of Liability"
          description="In no event shall StreetSense or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the App."
        />
        <Keyfeatures
          title="Governing Law"
          description="These terms and conditions shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions."
        />
        <Keyfeatures
          title="Changes to Terms"
          description="StreetSense reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the App after any such changes constitutes your acceptance of the updated terms and conditions."
        />
      </div>
    </div>
  );
}

export default TermsConditions;
