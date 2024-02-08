import React from 'react';

const TermsAndConditionsPage = () => {
  return (

    <div className="container mx-auto my-[20px] md:my-[40px] px-[20px] lg:pt-[170px]  sm:pt-[20px]">
    <div className="w-full max-w-[1200px] 2xl:px-0 mx-auto md:px-[20px]  flex flex-col justify-between items-center">
    <div className="terms-and-conditions-page">
      <h2 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Terms and Conditions</h2>
      <p>Welcome to Vincent. These terms and conditions outline the rules and regulations for the use of Vincent , located at Vincent.</p>
      
      <h3 className='text-[16px] mt-5 font-semibold leading-tight'>Cookies</h3>
      <p>We employ the use of cookies. By accessing Vincent, you agreed to use cookies in agreement with the Vincent Privacy Policy.</p>
      <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
      
      <h3 className='text-[16px] mt-5 font-semibold leading-tight'>License</h3>
      <p>Unless otherwise stated, Vincent and/or its licensors own the intellectual property rights for all material on Vincent. All intellectual property rights are reserved. You may access this from Vincent for your own personal use subjected to restrictions set in these terms and conditions.</p>
      <p>You must not:</p>
      <ul className=' list-disc list-inside'>
        <li>Republish material from Vincent</li>
        <li>Sell, rent or sub-license material from Vincent</li>
        <li>Reproduce, duplicate or copy material from Vincent</li>
        <li>Redistribute content from Vincent</li>
      </ul>

      <h3 className='text-[16px] mt-5 font-semibold leading-tight'>1. Agreement to Terms</h3>
          <p>By accessing this website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, you must not use this website.</p>

          <h3 className='text-[16px] mt-5 font-semibold leading-tight'>2. Intellectual Property Rights</h3>
          <p>All content included on this website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Vincent or its content suppliers and is protected by international copyright laws.</p>

          <h3 className='text-[16px] mt-5 font-semibold leading-tight'>3. User Account</h3>
          <p>If you create an account on this website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>

          <h3 className='text-[16px] mt-5 font-semibold leading-tight'>4. Governing Law</h3>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

          {/* Add more sections as needed */}

          <h3 className='text-[16px] mt-5 font-semibold leading-tight'>5. Changes to Terms</h3>
          <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h3 className='text-[16px] mt-5 font-semibold leading-tight'>6. Contact Us</h3>
          <p>If you have any questions about these terms and conditions, please contact us at
            <a href="mailto:privacy@vincent.com<" className="underline font-semibold"> privacy@vincent.com</a>.</p>

          <p>Last updated: 04-08-20223</p>

    </div>
    </div>
    </div>
  );
};

export default TermsAndConditionsPage;
