import React, { useState } from 'react';
import './Privacy.css'; // Import your CSS file
import './Privacy.css'
import { useNavigate } from "react-router-dom";


const Privacy = () => {
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  const handleAccept = () => {
    // Assuming you have a logged-in user and their ID is available
    // const loggedInUserId = localStorage.getItem('userId'); // Replace with your actual key

    // Check if a user is logged in and has accepted terms
    // if (loggedInUserId && acceptTerms) {
    //   // Make a PATCH request to the API
    //   fetch(`http://localhost:8000/api/employer/${loggedInUserId}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ Privacy_policy: true }), // Assuming you want to set it to true
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       // Handle the response as needed
    //       console.log('Privacy policy accepted:');
    //       navigate("/home");
    //     })
    //     .catch(error => {
    //       // Handle errors
    //       console.error('Error accepting privacy policy:', error);
    //     });
    // } else {
    //   console.error('User not logged in or terms not accepted');
    // }
  };
  return (
    <>
      <div className="policy-popup">

       {/* Terms And Conditions section  */}

        {/* {showMore ? (
          <>
            <h1 className='privacy-heading-main text-center'>Terms And Conditions</h1>

            <h1 className='privacy-heading fw-bold text-yellow-500 text-center'>Welcome to Interns Bee </h1><br></br>

            <h1 className='privacy-heading-middle'>Overview:</h1>

            <span className='fw-bold'>Welcome to Interns Bee </span>(hereinafter referred to as the "Site" or as "Interns Bee" interchangeably), a portal of Interns Bee Private Limited (hereinafter referred to as Interns Bee PVT LTD). These terms and conditions of use ("Terms") constitute a legal agreement between you and Interns Bee PVT LTD. Your use of this Site constitutes your unconditional acceptance of these Terms herein and by all terms, policies, and guidelines incorporated by reference. These Terms apply to your use of this Site and do not alter in any way the terms or conditions of any other agreement you may have with Interns Bee PVT LTD, its subsidiaries, or affiliates. If you are using the Site on behalf of any entity, you further represent and warrant that you are authorized to accept these Terms on such entity's behalf, and that such entity agrees to indemnify Interns Bee PVT LTD for violations of these Terms. If you do not agree with these terms, please do not use this Site.
            Any individual or organization wishing to utilize the Site to post internships/jobs
            (hereinafter referred to as the "Jobs") for themselves or for an organization they represent is
            referred to as the "Employer" or "Employers" as context may demand.Any individual wishing to utilize the Site to apply to Jobs listed on Interns Bee is referred to as the "Applicant" or "Applicants" as context may demand.
            .<br></br>

            <h1 className='privacy-heading-middle'>Registration Data and Account Security:</h1>
            In consideration of your use of Interns Bee, you agree to:
            (a) Provide accurate, current, and complete information about yourself as may be prompted by any registration forms on the Site ("Registration Data").
            (b) Maintain and promptly update the Registration Data, and any other information you provide to Interns Bee, to keep it accurate, current, and complete.
            (c) Maintain the security of your password and identification.
            (d) Notify Interns Bee immediately of any unauthorized use of your account or any other breach of security.
            (e) Accept all responsibility for any and all activities that occur under your account.
            (f) Accept all risks of unauthorized access to the Registration Data and any other information you provide to Interns Bee.
            Please refer to our Privacy Policy for more details on how we collect, store, use, and retain your data on the Site.
            <h1 className='privacy-heading-middle'>Most Important Terms & Conditions for Employers:</h1>
            These specific Terms for Employers are supplementary to the general Terms & Conditions outlined on the page, which are applicable to all users of the site and must be reviewed by you. Any breach of these Terms may lead to, among other consequences, the rejection of an Employer's Job for publication on Interns Bee, permanent blocking of the account, and/or the initiation of suitable legal action against the Employer by Interns Bee.

            <h1 className='privacy-heading-middle'>Job Posting T&Cs:</h1>
            1.	It is your responsibility to ensure that you are authorized to post Jobs on behalf of your<br /> 2.	By uploading your organization's logo when posting a Job or creating/updating your company profile, you authorize Interns Bee to display it on our website alongside the Job listing or in the list of our clients. It is your responsibility to ensure that you are duly authorized to share your organization logo with third parties and allow them to use it.<br />
            3.	Interns Bee reserves the right to publish the Job listing of Employers on its social media handles and job board partners like LinkedIn, Indeed, etc., and in newspapers to increase the visibility of the Job listing.<br />
            4.	You must provide accurate and complete details about the organization and the Job. Any act of misinformation or hiding material information may result in the permanent blocking of your account or any other suitable action deemed fit by Interns Bee.<br />
            5.	You may be asked for documents in the name of your company for our first-time user authentication process. This information will only be used for authentication purposes and will not be used anywhere else in any form.<br />
            6.	You may also complete the one-time authentication process by signing in to your company's YouTube channel. This will be governed by the YouTube Terms of Service.<br />
            7.	The minimum stipend criteria for an in-office internship is Rs. 2000/month, and for a work-from-home internship, it is Rs. 1000/month. The minimum CTC criteria for a full-time job listing is 2 LPA.


            <h1 className='privacy-heading-middle'>Interns Bee does NOT allow:</h1>
            1.	Unpaid internships, excluding NGOs/NPOs, government agencies, and specific niche profiles (Law, Experimental Physics, Library Science, etc.).<br />
            2.	Training programs and any initiative where Applicants are required to pay a security deposit or an admission fee. Charging money in any form (including test fees, security deposits, documentation fees, etc.) from Applicants for offering a Job is strictly prohibited.<br />
            3.	Modelling Jobs/Internships.<br />
            4.	Network Level Marketing (NLM) jobs/internships where applicants/individuals have to utilize their personal connections and social media accounts to promote a business.<br />
            5.	Any Job where there is a possibility of an Applicant consuming alcohol, smoking, or inducing others to do so, as the majority of our users are underage.<br />
            6.	Individuals or organizations promoting explicit religious content, a particular religious personality, or a sect, etc., are not allowed to post Jobs on Interns Bee.<br />
            7.	Businesses promoting or engaging in gambling, porn, and other prohibited/illegal/age-inappropriate activities.<br />
            8.	Third-party Job listings. You can post Jobs only for the organization that you directly work for. Recruiting agencies or any third-party agencies are authorized to post Jobs on their clients' behalf only after sharing the client's confirmation via email/authorization letters.<br />
            9.	Any Job where there is a possibility of an Applicant promoting betting or engaging in activities not suitable for people under 18 years of age, such as Rummy, Poker, etc.<br />
            10.	Any freelancing opportunity.<br />
            11.	Employers offering different profiles to applicants than the ones advertised.<br />
            12.	Organizations asking applicants to open Demat accounts (e.g., for Finance internships) or assigning any pre-selection assessment that involves opening a Demat account.<br />
            13.	Organizations entrusting applicants with the task of opening bank accounts on behalf of the Organization as part of the shortlisting process.<br />
            14.	Employers asking applicants to sell/promote their products/services as part of the shortlisting process.<br />
            15.	Employers requesting applicants for personal documents like Aadhar, PAN card, etc., at the shortlisting stage.

            <h1 className='privacy-heading-middle'>Hiring T&Cs:</h1>
            1.	It is your responsibility to ensure that there is no significant deviation between the Job details advertised on Interns Bee and the details communicated to Applicants later in the selection process (pre-interview, in the offer letter, etc.). Any 'negative' material difference, such as a stipend offered lower than what was advertised, will result in appropriate action being taken by Interns Bee against you.<br />
            2.	Any assignment(s) given to Applicants to assess their suitability for the Job should be fair and relevant to the Job profile. Any attempt to obtain work for free from Applicants, disguised as an assessment or to garner downloads for your app, or likes/shares/comments for your social media handles solely for the purpose of obtaining free publicity under the guise of an assignment, is strictly prohibited and will invite suitable actions against you.<br />
            3.	All communications with Applicants (through Interns Bee Chat or otherwise) should be professional and must not contain any obscene or offensive content.<br />
            4.	Once you hire any Applicant(s) for your Job, you must provide them with an offer letter clearly detailing all essential Job details (such as roles and responsibilities, remuneration, and payment mechanism) along with the complete address and contact details of your organization.<br />
            5.	You must promptly pay the promised remuneration to the selected Applicants as per the agreed terms and conditions in the offer letter. Non-payment or delayed payment of the remuneration is strictly prohibited and will invite suitable action against you.<br />
            6.	You must respond within 72 working hours to any Applicant complaints regarding your Job that Interns Bee may bring to your notice. Failure to do so may result in a temporary or permanent suspension of your Interns Bee account, depending on the nature of the complaint.<br />
            7.	If you encounter any suspicious activity, content, or behavior on Interns Bee by an Applicant or another user, you must report it to Interns Bee immediately so that necessary actions can be taken.<br />
            8.	While we make our best efforts to connect with the best talent available in the country, posting your Job on Interns Bee does not guarantee hiring.<br />
            9.	Interns Bee always recommends employers to terminate the internship/job within 15 days if the candidate's performance is unsatisfactory.

            <h1 className='privacy-heading-middle'>Applicant data usage T&Cs:</h1>
            1.	The data of Applicants that you obtain for your Job can only be used for the purpose of hiring. Any attempt to send any other communication, such as promotional content, to the Applicants or any other use of the data is strictly prohibited.<br />
            2.	You are strictly prohibited from transferring, selling, or sharing Applicants' data, whether for free or for a fee, with any other entity. Any such attempt will result in the permanent blocking of your account on Interns Bee and may lead to legal action against you and your organization.<br />

            <h1 className='privacy-heading-middle'>Payment & refund T&Cs:</h1>
            1.	Payments for the services provided by Interns Bee shall be made on a 100% advance basis.<br />
            2.	Refunds, if applicable, will be processed in accordance with our Refund Policy.<br />
            3.	Interns Bee provides no guarantees for the accuracy or timeliness of refunds reaching the Employer's card/bank accounts.

            <h1 className='privacy-heading-middle'>Fair Usage Policy :</h1>
            1.	According to Interns Bee's Fair Usage Policy, Employers enrolled in our Premium Plans are allowed to post a maximum of 50 listings (combined Internships and Jobs) on Interns Bee within a 30-day period. If additional listings are needed, dedicated Relationship Managers will assess the request on a case-by-case basis.

            <h1 className='privacy-heading-middle'>Most Important Terms & Conditions for Applicants :</h1>
            These Terms, specifically for Applicants, supplement the other generic Terms & Conditions listed on the page, which are applicable to all users of the site and are mandatory for you to review. Any violation of these T&Cs may lead to, among other consequences, the rejection of an applicant's Job application, the permanent blocking of his/her account, and the initiation of suitable legal action by Interns Bee PVT LTD.
            1.	If you apply for a Job on Interns Bee and receive communication from Interns Bee or the Employer regarding your application, you must respond within 72 hours.<br />
            2.	Upon accepting a Job offer, you must make every effort to join and start the Job on time. Failing to show up, declining a previously accepted Job offer at the last moment, or going incommunicado reflects poorly on you in front of the Employer and diminishes the credibility of the Applicant community. Such behavior will result in your account being blocked on Interns Bee, and we may report it to your college administration, where applicable.<br />
            3.	You must provide accurate and complete information when applying for a Job or creating an account on Interns Bee. Misrepresentation, hiding material information, or<br />
            4.	Pay attention to all details (profile, location, remuneration, skills required, etc.) of a Job before applying. Irrelevant applications may lead to penalties, including the suspension of your account on Interns Bee.<br />
            5.	You are strictly prohibited from transferring/selling/sharing Employers' data (contact details, etc.) with any other entity, for free or for a fee. Any attempt to do so will result in the permanent blocking of your Interns Bee account and may lead to legal action against you.
            6.	The Interns Bee community values high standards of professionalism. Maintain decorum in all communications with other users, whether through Interns Bee Chat or otherwise, and refrain from including any obscene or offensive content.<br />
            7.	Confirm that you have read and understood the 'Safety Tips for Applicants' section of these Terms.<br />
            8.	While Interns Bee aims to provide accurate Job information, errors may occur. Conduct your own due diligence and research about an employer or organization before starting.<br />
            Job, taking full responsibility. Explicitly agree to the 'Disclaimers' section of these Terms.
            9.	Report any suspicious activity, content, or behavior on Interns Bee by an Employer or another user immediately.<br />
            10.	While Interns Bee strives to offer the best Job opportunities, it does not guarantee a Job to a student.<br />
            11.	Upon registration, your registered email id and phone number will automatically subscribe to receive email, Whatsapp notifications, and SMS notifications from Interns Bee. You may opt out at any time.<br />
            12.	Interns Bee reserves the right to remove your photo if it doesn't feature your likeness or a headshot photograph. If your photo is taken down, you can upload a new one to rectify the situation.<br />
            13.	By uploading your profile picture, you authorize Interns Bee to share it with employers and other relevant users of the Interns Bee platform.

            <h1 className='privacy-heading-middle'>Safety Tips for Applicants</h1>
            Our goal is to offer all Interns Bee users a secure and trouble-free experience. Consequently, we wish to apprise Applicants of the following safety tips.
            
            <h1 className='privacy-heading-middle'>Interns Bee does NOT allow Employers to:</h1>
            1.	Advertise unpaid Jobs unless explicitly stated as such in the Job listing.<br />
            2.	Publish training programs or any initiative requiring Applicants to pay a security deposit or admission fee.<br />
            3.	Collect money from Applicants in any form (including test fees, security deposits, documentation fees, etc.) for offering a Job. This practice is strictly prohibited.<br />
            4.	Advertise modeling Jobs from lesser-known companies.<br />
            5.	Advertise Network Level Marketing (NLM) jobs/internships that require applicants/individuals to use their personal connections and personal social media accounts to promote a business.<br />
            6.	Advertise any Job where there is a possibility of an Applicant consuming alcohol, smoking, or inducing others to do so, as the majority of our users are underage.<br />
            7.	Advertise Jobs from individuals or organizations promoting explicit religious content, a particular religious personality, or a sect, etc.<br />
            8.	Advertise Jobs at businesses promoting or involved in gambling, porn, and other prohibited/illegal/age-inappropriate activities.<br />
            9.	Engage in third-party Job listings. An Employer can post Jobs only for the organization they directly work for. Recruiting agencies or any third-party agencies are authorized to post Jobs on their clients' behalf only after obtaining authorization from the Interns Bee team.

            <h1 className='privacy-heading-middle'>Further, it is mandatory for Employers to ensure that :
              </h1>
              1.	Ensure that Job details communicated to Applicants at any stage are consistent with those advertised on Interns Bee, with no negative material differences (e.g., offering lower or no stipend than what was advertised).<br />
                2.	Any assignment(s) given to Applicants to assess their suitability for the Job should be fair and relevant to the Job profile. Prohibitions include attempting to obtain work for free from Applicants under the guise of an assessment or soliciting downloads for an app, or likes/shares/comments for an Employer's social media handles solely for the purpose of obtaining free publicity under the guise of an assignment.<br />
                3.	All communications with Applicants, whether through Interns Bee Chat or other means, must be professional and devoid of any obscene or offensive content.<br />
                4.	Upon hiring any Applicant(s) for their Job, Employers must provide them with an offer letter that clearly outlines important details of the Job, such as roles and responsibilities, remuneration, payment mechanism, as well as complete address and contact details of the Employer.<br />
                5.	Employers must fulfill their commitment to pay the promised remuneration to the selected Applicant(s) in a timely manner, adhering to the agreed terms and conditions of the Job as detailed in the offer letter.

                <h1 className='privacy-heading-middle'>Disclaimers</h1>
                This Site and its content are provided "as is," and Interns Bee, along with its directors, employees, content providers, agents, and affiliates, excludes, to the fullest extent permitted by applicable law, any warranty, express or implied. This includes, without limitation, any implied warranties of merchantability, satisfactory quality, or fitness for a particular purpose. Interns Bee will not be liable for any damages arising from the use of this site. The functions embodied on or in the materials of this site are not warranted to be uninterrupted or without error. You, not Interns Bee, assume the entire cost of all necessary care or correction due to your use of this site or content. Interns Bee makes no warranty that the site or the content is free from infection by viruses or anything else that has contaminating or destructive properties. Interns Bee uses reasonable efforts to ensure the accuracy, correctness, and <br />
                reliability of the Content, but we make no representations or warranties for the same.
                Images of people or places displayed on the Site are either the property of Interns Bee or used with permission by Interns Bee or third parties. The use of these images is prohibited unless specifically permitted by these Terms or specific permission provided elsewhere on the Site or by a separate license or agreement. Unauthorized use of these images may violate copyright laws, trademark laws, privacy and publicity laws, and other applicable laws.

                <h1 className='privacy-heading-middle'>Rights to Website and Contents thereof:</h1>
                This Site is owned and operated by Interns Bee. All the content featured or displayed on this Site, including text, graphics, data, images (photographic and moving), illustrations, software, and the selection and arrangement thereof ("Content"), is owned by Interns Bee. All elements of this Site, including the general design and the Content, are protected by copyright, moral rights, trademark, and other 

                <h1 className='privacy-heading-middle'>Using the Website: </h1>
                This Site and its Content are intended for Users of Interns Bee. You may not use this Site or the content for any purpose unrelated to your business with Interns Bee. Any use of the Content, this Site, or any of its functionality for a purpose not permitted by these Terms is grounds for the immediate revocation of any usernames, passcodes, or other permissions granted by Interns Bee. You are specifically prohibited from: (i) downloading, copying, or retransmitting any or all of the Site or the Content without a written license or agreement with Interns Bee; (ii) using any data mining or similar data gathering or extraction methods; (iii) manipulating or otherwise 

                <h1 className='privacy-heading-middle'>Trademarks:</h1>
                Interns Bee’s trademarks, the Interns Bee logo, and any other product or service name or slogan contained in the Site are trademarks of Interns Bee and its suppliers or licensors. These may not be copied, imitated, or used without prior written permission. You may not use meta-tags or any other "hidden text" utilizing content or any 

                <h1 className='privacy-heading-middle'>Indemnity</h1>
                Indemnity: You agree to defend, indemnify, and hold harmless Interns Bee, its subsidiaries, affiliates, licensors, employees, agents, third party information providers, and independent contractors against any claims, damages, costs, liabilities, and expenses arising out of or related to any User Content that you post, store, or otherwise transmit on or through the Site, your conduct, your use or inability to use the Site, your breach or alleged breach of the Site Terms or of any representation or warranty contained herein, your unauthorized use of the Content, or your violation of any rights of another. You shall indemnify Interns Bee against any loss, expense, cost, or damage incurred by any or all of them as a result of your breach of these Terms or your unauthorized use of the Content or the Site.

                <h1 className='privacy-heading-middle'>Termination</h1>
                Interns Bee reserves the right, without notice and in its sole discretion, to terminate your account and/or block your use of the Site.

                <h1 className='privacy-heading-middle'>Changes to Site Terms:</h1>
                 Interns Bee reserves the right to change any of the terms and conditions contained in the Site Terms or any policy or guideline of the Site, at any time and in its sole discretion. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of changes will constitute your acceptance of such changes. We encourage you to review the Site Terms whenever you visit the website.

                 <h1 className='privacy-heading-middle'>Severance & Waiver</h1>
                 No action of Interns Bee, other than an express written waiver or amendment, may be construed as a waiver or amendment of any of these Terms. If any clause in these Terms is found to be unenforceable, it will not affect any other clause, and each will remain in full force and effect. We reserve the right to change these Terms, the Content displayed on the Site, any license contained on the Site, and any other information or license terms without prior notice. These Terms set out the entire agreement between Interns Bee and you relating to your use of this Site. Any rights not expressly granted herein are reserved.

                 <h1 className='privacy-heading-middle'>Jurisdiction</h1>
                 All license agreements, use, or any issues arising out of any activity regarding the use of this website will be governed by the laws of India and subject to the exclusive jurisdiction of courts in Maharashtra.

                {/* all contente here  */}
                {/* <div className="button-container">
                  <button className="view-less-button fw-bold text-yellow-500 px-4 py-2 rounded" onClick={toggleShowMore}>
                    View Less
                  </button>

                </div>
              </>
              ) : (
              <>
                <h1 className='privacy-heading-main text-center'>Terms And Conditions</h1>

                <h1 className='privacy-heading fw-bold text-yellow-500 text-center'>Welcome to Interns Bee </h1><br></br>

                <h1 className='privacy-heading-middle'>Overview:</h1>
                <span className='fw-bold'>Welcome to Interns Bee </span> (hereinafter referred to as the "Site" or as "Interns Bee" interchangeably), a portal of Interns Bee Private Limited (hereinafter referred to as Interns Bee PVT LTD). These terms and conditions of use ("Terms") constitute a legal agreement between you and Interns Bee PVT LTD. Your use of this Site constitutes your unconditional acceptance of these Terms herein and by all terms, policies, and guidelines incorporated by reference. These Terms apply to your use of this Site and do not alter in any way the terms or conditions of any other agreement you may have with Interns Bee PVT LTD, its subsidiaries, or affiliates. If you are using the Site on behalf of any entity, you further represent and warrant that you are authorized to accept these Terms on such entity's behalf, and that such entity agrees to indemnify Interns Bee PVT LTD for violations of these Terms. If you do not agree with these terms, please do not use this Site.
                Any individual or organization wishing to utilize the Site to post internships/jobs
                (hereinafter referred to as the "Jobs") for themselves or for an organization they represent is
                referred to as the "Employer" or "Employers" as context may demand.Any individual wishing to utilize the Site to apply to Jobs listed on Interns Bee is referred to as the "Applicant" or "Applicants" as context may demand.
                .<br></br>
                <h1 className='privacy-heading-middle'>Registration Data and Account Security:</h1>
                In consideration of your use of Interns Bee, you agree to:
                (a) Provide accurate, current, and complete information about yourself as may be prompted by any registration forms on the Site ("Registration Data").
                (b) Maintain and promptly update the Registration Data, and any other information you provide to Interns Bee, to keep it accurate, current, and complete.
                (c) Maintain the security of your password and identification.
                (d) Notify Interns Bee immediately of any unauthorized use of your account or any other breach of security.
                (e) Accept all responsibility for any and all activities that occur under your account.
                (f) Accept all risks of unauthorized access to the Registration Data and any other information you provide to Interns Bee.
                Please refer to our Privacy Policy for more details on how we collect, store, use, and retain your data on the Site.

                {/* show first two paragraphs */}
                {/* <button className="view-more-button fw-bold text-yellow-500 px-4 py-2 rounded " onClick={toggleShowMore}>
                  View More
                </button> */}
              {/* </> */}
        {/* )}  */}
            

                  {/* Privacy policy section  */}


              {showMore2 ? (
                <>
                  <h1 className='privacy-heading-main text-center'>Privacy Policy</h1>
                  {/* <h1 className='privacy-heading-main text-center'>Terms And Conditions</h1> */}

<h1 className='privacy-heading fw-bold text-yellow-500 text-center'>Welcome to Interns Bee </h1><br></br>

               
                  This Privacy Policy pertains to the online services provided by Interns Bee at
                  InternsBee.com, its subdomains, and Interns Bee's app on Google Play Store, collectively
                  referred to as "Services."
                  <h1 className='privacy-heading-middle'>Overview:</h1>
                  We value your privacy and are committed to delivering a secure user experience. This
                  privacy statement outlines our online data collection and usage policies. By utilizing our
                  services, you agree to the policies and practices described herein. Your data will be stored
                  and processed on our servers, which may be located inside or outside India. Your usage of
                  the Services implies consent to the transfer of your data. Our Services may contain links to
                  external websites, over which we have no control, and we are not responsible for their
                  privacy policies.<br></br>
                  <h1 className='privacy-heading-middle'>Collection of Information:</h1>
                  1. Personal Information Provided by You: In certain sections of our Services, we may
                  request personal information such as your name, address, email, telephone number, billing
                  details, education, workplace details, etc.
                  2. Information Collected When Using Third-Party Services: To enhance your experience, we
                  may collect personally identifiable information, including usernames, directly or indirectly. We
                  use third-party services with specific privacy policies, including Google Sign-In, YouTube,
                  and Facebook.
                  3. Information About Your Contacts: When you share content on Interns Bee using features
                  like Google+ share or SMS share, we may collect and process information about the
                  contacts associated with your Google account.
                  <h1 className='privacy-heading-middle'>Retention of Information::</h1>
                  In our commitment to lifelong career management, we retain all gathered information
                  indefinitely. You have the option to correct or update your account profile, and you may
                  choose to delete your account, after which we will delete or de-identify the data.
                  <h1 className='privacy-heading-middle'>Sharing of Information:</h1>
                  1.Employers' internship/job listings are published online and may be viewed by anyone on
                  Interns Bee and search engines.
                  2. Personal information may be shared with students applying to internships/jobs through
                  Interns Bee.
                  3. Information may be shared with third parties providing services on our behalf or in
                  partnership with us.
                  4. Interns Bee reserves the right to publish internship/job listings on various platforms to
                  increase visibility.
                  <h1 className='privacy-heading-middle'>Editing Information:</h1>
                  Students and employers can edit personal information through their respective sections.
                  Certain data, such as applications or postings, cannot be edited.
                  Downloading Information:
                  For assistance in downloading information, contact privacy@InternsBee.com.
                  <h1 className='privacy-heading-middle'>Communication Policy:</h1>
                  1. Opt-In: Users must verify their email address to receive newsletters or marketing
                  communications.
                  2. Opt-Out: Newsletters contain an 'Unsubscribe' link for opting out of future
                  communications.
                  Cookies and Pixel Tags:
                  We and partners use cookies, web beacons, and pixel tags to collect information for
                  analytics and personalization. Users can disable cookies, but it may affect site functionality.
                  Children:
                  Interns Bee is not intended for children under 13. Parental guidance is required for users
                  under 13.
                  <h1 className='privacy-heading-middle'>Security of Information:</h1>
                  Industry-standard security measures are implemented. We are not liable for information
                  disclosure beyond our control.
                  GDPR Entitlement:
                  EU residents have rights under GDPR. Requests related to these rights can be made to
                  <h1 className='fw-bold text-yellow-500'>privacy@InternsBee.com.</h1>
                  <h1 className='privacy-heading-middle'>No Guarantees:</h1>
                  While we aim to maintain data standards, factors beyond our control may impact data
                  disclosure. We disclaim any warranties or representations regarding data maintenance.
                  Changes to this Privacy Policy:Changes to this policy will be communicated through
                  prominent announcements on our Services or by email. Refer to this page for the latest
                  Privacy Policy
                  {/* ... */}
                  <div className="button-container">
                    <button className="view-less-button fw-bold text-yellow-500 px-4 py-2 rounded" onClick={toggleShowMore2}>
                      View Less
                    </button>

                  </div>
                </>
              ) : (
                <>
                <h1 className='privacy-heading-main text-center'>Privacy Policy</h1><br/>
                {/* <h1 className='privacy-heading-main text-center'>Terms And Conditions</h1> */}

            <h1 className='privacy-heading fw-bold text-yellow-500 text-center'>Welcome to Interns Bee </h1><br></br>

               
                  This Privacy Policy pertains to the online services provided by Interns Bee at
                  InternsBee.com, its subdomains, and Interns Bee's app on Google Play Store, collectively
                  referred to as "Services."
                  <h1 className='privacy-heading-middle'>Overview:</h1>
                  We value your privacy and are committed to delivering a secure user experience. This
                  privacy statement outlines our online data collection and usage policies. By utilizing our
                  services, you agree to the policies and practices described herein. Your data will be stored
                  and processed on our servers, which may be located inside or outside India. Your usage of
                  the Services implies consent to the transfer of your data. Our Services may contain links to
                  external websites, over which we have no control, and we are not responsible for their
                  privacy policies.<br></br>
                  <h1 className='privacy-heading-middle'>Collection of Information:</h1>
                  1. Personal Information Provided by You: In certain sections of our Services, we may
                  request personal information such as your name, address, email, telephone number, billing
                  details, education, workplace details, etc.
                  2. Information Collected When Using Third-Party Services: To enhance your experience, we
                  may collect personally identifiable information, including usernames, directly or indirectly. We
                  use third-party services with specific privacy policies, including Google Sign-In, YouTube,
                  and Facebook.
                  3. Information About Your Contacts: When you share content on Interns Bee using features
                  like Google+ share or SMS share, we may collect and process information about the
                  contacts associated with your Google account.
                  {/* ... */}
                  <button className="view-more-button fw-bold text-yellow-500 px-4 py-2 rounded " onClick={toggleShowMore2}>
                    View More
                  </button>
                </>
              )}




            
              {/* <div>
        <label>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          I agree to the terms and conditions
        </label>
      </div> */}
       

              {/* Submit button */}
              {/* <div className="submit-button-container">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={handleAccept}
        >
          Accept
        </button>
      </div> */}

            </div>
          </>
        );
}

        export default Privacy;
