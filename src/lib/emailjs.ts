import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (templateParams: any) => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.');
  }

  try {
    // Check network connectivity first
    if (!navigator.onLine) {
      throw new Error('No internet connection. Please check your network and try again.');
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email. Please try again later.');
    }

    return response;
  } catch (error: any) {
    console.error('EmailJS error:', error);
    if (error.message === 'Network Error' || !navigator.onLine) {
      throw new Error('Network connection issue. Please check your internet connection and try again.');
    } else if (error.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    } else {
      throw new Error(error.message || 'Failed to send email. Please try again later.');
    }
  }
};