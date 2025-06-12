import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("zYkfkUekbz9A165fk");

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
}): Promise<EmailResponse> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      return {
        success: false,
        message: 'Please enter a valid 10-digit Indian phone number'
      };
    }

    // Format the current time in IST
    const currentTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Prepare template parameters
    const templateParams = {
      to_email: 'vknassociative@gmail.com',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      service: formData.service || 'Not specified',
      time: currentTime,
      company_name: 'VKN & Associates',
      company_address: '5th Floor, Vertex Cute, 504, Jai Bharat Nagar, Nagarjuna Homes, Kukatpally, Hyderabad, Telangana 500090'
    };

    console.log('Sending email with params:', templateParams); // Debug log

    const response = await emailjs.send(
      'service_91rdylh',
      'template_lr826hs',
      templateParams
    );

    console.log('Email response:', response); // Debug log

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! We will contact you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly at vknassociative@gmail.com'
    };
  }
}; 