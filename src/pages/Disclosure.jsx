import bulloak from '../assets/bulloak.png';
import home_bg from '../assets/home/home_bg.png';
import MainLayout from '../components/MainLayout';

export default function Disclosure() {
  return (
    <MainLayout >
      <div className='px-5 md:px-20'>
        <div
          style={{
            backgroundImage: `url(${bulloak})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="laviossa mt-32 h-14 md:h-40"
        />
        <div 
          className='bg-white text-lg h-fit'
          style={{
            backgroundImage: `url(${home_bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        >
            <h1 className="laviossa text-3xl md:text-7xl text-center text-[#8e078aa4] font-bold  flex flex-col justify-end">
                Disclosures 
            </h1>
            <div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>Terms and Conditions of Use </h2>

                <p>
                  Thank you for visiting the Firm&apos;s website. By using this website, you agree to abide by the 
                  following terms and conditions, which constitute a legal agreement (the “Agreement”) between 
                  you and the Firm. If you do not accept these conditions, you may not use this website. 
                  The Firm reserves the right to modify this Agreement from time to time. We recommend that you 
                  revisit it on occasion, in particular the terms of the Privacy Policy, to learn of new privacy 
                  practices or changes to our policies. By visiting our website after we have posted changes to 
                  these terms, you acknowledge that you are agreeing to these terms as modified. 
                  Legal Disclaimer <br /><br />
                  Under no circumstances should any material at this site be used or considered as an offer to sell 
                  or a solicitation of any offer to buy any security or portfolio managed by the Firm. Any such offer 
                  or solicitation will be separately made by one of the Firm&apos;s financial advisors/brokers. This 
                  website provides general information about the Firm, the purpose of this site is to provide you 
                  with information about the firm and our investment philosophy, as well as a means to contact us 
                  for further information. The Firm provides customized investment portfolio only within the context 
                  of our agreements with our clients, which is outlined in our investment plans. Any offer or 
                  solicitation to buy any security, shares or portfolio managed by the Firm will be separately made 
                  by one of the Firm&apos;s financial advisors.  <br /><br />
                  Although the firm does not charge a fee for attending an introduction meeting, introduction 
                  phone call, or an appointment, we may offer the attendees educational information. The 
                  consultation is intended to result in the person purchasing security, shares or establishing an 
                  advisory relationship. For further information about the Firm, please see the Firm&apos;s current 
                  brochure, which discusses the Firm&apos;s business operations, services, and fees. 
                  The Firm and its financial advisors (IARs) may be nominated and win awards or receive 
                  recommendations in the course of doing business as a Registered Investment Adviser. In 
                  recognition of its responsibility in providing truthful and accurate advertising, the Firm has 
                  adopted the following procedures for advertising any awards or recommendations that may be given:
                </p><br />   
                {
                  [
                    "1. The Firm and its supervised persons will not make any payments to an award sponsor in order to qualify for an award nomination ",
                    "2.  The award process must be fair and not deemed to be so narrowly focused as to exclude other investment advisers from the competition who would otherwise be qualified participants based on the terms of the nomination process",
                    "3. The Firm and its supervised persons will not be involved in the structuring of the award process or deliberations that determine the winner ",
                    "4. The criteria for the award and the award determination process will be provided in an advertisement by the Firm either by listing the information in the advertisement, stating where the award criteria can be obtained or if the advertisement is Internet-based by providing a “hyperlink” attached to the advertisement pointing to the award sponsor’s criteria and award process either on the Firm’s website or the award sponsor’s website",
                    "5. The firm will not make any payments for recommendations or endorsements in any advertising ",
                    "6. No clients of the firm are involved in the process for any award sponsorships, nominations, endorsements, or recommendations made in firm advertisements",
                    "7. While the Firm does not compensate anyone for testimonials or endorsements and does not involve clients in the process of obtaining testimonials or endorsements for advertising, the Firm may utilize testimonial reviews from clients obtained from third-party sites such as Yelp or Google in its advertising "
                  ].map((data,ind) => (
                    <p className='first-letter:pl-10 '> {data}</p>
                  ))
                }

              </div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>User Agreement </h2>

                <p>
                  The Firm’s website is provided to you without charge as a convenience and for your information, 
                  registration and trading activities. By providing access to the Firm’s website content, the Firm 
                  does not warrant or represent that the content is accurate or complete; that the content is 
                  up-to-date or current; that the content is free from technical inaccuracies or typographical errors; 
                  that the content is free from changes caused by a third party; or that your access to this website 
                  will be free from interruptions, errors, computer viruses, or other harmful components. <br />
                  Use of this website is at your own risk. Under no circumstances, including but not limited to 
                  negligence, shall the Firm be liable for any direct or indirect, special, incidental, or consequential 
                  damages. This includes loss of data or profit arising out of the use or the inability to use the 
                  content of this website, even if one of the Firm’s representatives has been advised of the 
                  possibility of your damages. In jurisdictions that do not allow the exclusion or limitation of liability 
                  for consequential or incidental damages, our liability is limited to the greatest extent permitted 
                  by law. 
                </p><br />   

              </div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>Limitations of Liability </h2>

                <p>
                  The material on this website is based on information generally available in the marketplace and 
                  is believed to be reliable and authoritative; however, it is not guaranteed as to its accuracy and 
                  does not constitute sufficient information to be the basis for sound investment decisions. The 
                  information is of a general nature and should not be applied indiscriminately to particular 
                  situations, wherein it may not be completely applicable. You acknowledge that the Firm is 
                  providing the contents of this website on an “as is” basis with no warranties of any kind. The 
                  Firm makes no warranty, express or implied, concerning this website and expressly disclaims 
                  any implied warranty of merchantability or fitness for a particular purpose. Availability of data 
                  and services is subject to change without notice. The Firm further assumes no responsibility for, 
                  and makes no warranties that, functions contained on this website will be uninterrupted or 
                  error-free, that defects will be corrected, the website is secure from unauthorized persons 
                  intercepting or accessing information transmitted by you, or that this website or the servers that 
                  make it available will be free of viruses or other harmful components. Your use of this website 
                  and use or reliance upon any of the materials on it is solely at your own risk. <br />
                  Any links on the Firm website to other websites are not intended as referrals or endorsements, 
                  but are merely provided to the users of the Firm’s website for convenience and informational  
                  purposes. The Firm does not endorse the content of such websites nor the products, services, 
                  or other items offered through such websites. <br />
                  Some pages within this website are password-protected. Access to these areas is restricted to 
                  authorized users only. The user in password-protected areas is responsible for any use of the 
                  password and for maintaining the confidentiality of the password. All website pages are 
                  intellectual property of the Firm and are protected by copyright laws. All copyrights for the Firm’s 
                  website presence are owned by the Firm with all rights reserved. <br />
                  The Firm shall have no liability, contingent or otherwise, to you or to third parties, for the 
                  correctness, quality, accuracy, timeliness, reliability, performance, continued availability, 
                  completeness, or delays, omissions, or interruptions in the delivery of the content available on 
                  this website. In no event will the Firm be liable for any special, indirect, incidental, or 
                  consequential damages which may be incurred or experienced as a result of your using the 
                  content available on this website. 
                </p><br />   

              </div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>Privacy Policies and Restrictions on Use </h2>

                <p>
                  The following policies apply only to the Firm’s site and not to the websites of others we may link 
                  to. <br />
                  Aggregate Data and Cookies. The Firm generally records certain usage information, such as the 
                  number and frequency of visitors to this website. This data helps us determine how many 
                  visitors use parts of the site and to do internal research on our users’ demographics, interests, 
                  and behavior to better understand and serve you. This information may include the websites 
                  that you access immediately before and after your visit to our website, the Internet browser you 
                  are using, and your IP address. If we use such data at all, it will be on an aggregate basis, and 
                  we will not voluntarily disclose to third parties any information that could be used to identify you 
                  personally. 
                </p><br />   

              </div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>Personally Identifiable Information. </h2>

                <p>
                  Please be assured that we will not collect personal identifying information about you when you 
                  visit our website, unless you choose to provide such information to us. If you voluntarily submit 
                  information to our website, for example, your name and e-mail address in a request for 
                  information, we may record and use such personally identifiable information for reasonable 
                  business purposes, including, but not limited to, fulfilling your request. While the Firm takes 
                  appropriate measures to safeguard against unauthorized disclosures of information, we cannot 
                  assure you that your personally identifiable information will never be disclosed in a manner 
                  inconsistent with this policy and make no representations or warranties regarding the sufficiency 
                  of our security measures. 

                </p><br />   

              </div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>Use of Website.</h2>

                <p>
                  Any person using this website is permitted to view, store, bookmark, download, 
                  and print individual website pages for personal and non-commercial purposes only. These uses 
                  must not alter the original website content, including all legal notices and legends. Our prior 
                  permission is required for (i) any commercial use of materials on this website; (ii) making more 
                  than minimal copies of website materials; and (iii) copying large portions of our website, such as 
                  by bots, robots, or spiders that “harvest” the website. If you seek permission for such use of our 
                  website, please contact us at admin@bulloakinc.com. Any unauthorized use of the images may 
                  violate copyright laws, trademark laws, the laws of privacy and publicity, and communications 
                  regulations and statutes. <br />
                  You hereby represent and warrant to the Firm that you will not use this website for any purpose 
                  that is unlawful or prohibited by these Terms and Conditions, including but not limited to 
                  attempting or actually (a) disrupting, impairing or otherwise interfering with the operation or 
                  integrity of the website or circumventing any website security system; (b) collecting any 
                  information about other users of the website; or (c) systematically extracting content or other 
                  information or data contained in the website to populate databases or other sites. 
                  For more information about the Firm’s privacy safeguards, please contact us at 
                  admin@bulloakinc.com to read our Privacy Notice. 
                </p><br />   

              </div>

              <div className="pb-10">
                <h2 className='font-bold text-lg md:text-2xl text-[#8E0789]'>Important Disclosure Information</h2>

                <p>
                  Governing Law. You agree that your use of this website and any disputes relating to such use 
                  will be governed by the laws of the State of California. Any dispute will be resolved solely in San 
                  Diego County, California. <br />
                  Ongoing Use and Acceptance. The Firm reserves the right, at its discretion, to change, modify, 
                  add, or remove portions of these Terms and Conditions at any time. Such changes, 
                  modifications, additions, or removals shall be effective immediately upon posting. Your 
                  continued use of the website following such changes will be conclusively deemed acceptance of 
                  any changes to these Terms and Conditions. At all times, you are bound by the then-current 
                  version of the Terms and Conditions and of all applicable laws. <br />
                  Contact Information. We welcome you to contact the Firm regarding our services, policies, and 
                  to let us know if you have any questions, concerns, or complaints. You may reach us at 
                  admin@bulloakinc.com 
                </p><br />   

              </div>

            </div>
        </div>

      </div>
    </MainLayout>
  )
}

// &apos;