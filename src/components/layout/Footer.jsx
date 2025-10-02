import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={{padding : '30px' , marginTop : '30px', marginLeft : '270px'}} className="text-center text-sm font-medium text-gray-700 border-t">
        <p style={{marginBottom : '18px'}} className="mb-4">
          © Copyright 2025 NetBramha Studio LLP. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 text-center">
          <a href="/faqs" className="underline hover:text-blue-600">
            FAQs
          </a>
          <a
            href="/terms-and-conditions"
            className="underline hover:text-blue-600"
          >
            Terms and Conditions
          </a>
          <a href="/privacy-policy" className="underline hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="/raise-a-dispute" className="underline hover:text-blue-600">
            Raise a Dispute
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer