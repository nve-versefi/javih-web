'use client'
import React, { useState } from 'react';

interface ContactFormValues {
  nombre: string;
  telefono: string;
  email: string;
  contexto: string;
  termsAndConditions: boolean;
  privacyPolicy: boolean;
  marketingConsent: boolean;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    nombre: '',
    telefono: '',
    email: '',
    contexto: '',
    termsAndConditions: false,
    privacyPolicy: false,
    marketingConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement; // Type assertion here
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormValues({
      ...formValues,
      [target.name]: value,
    });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/sendEmail.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      // Check if the email was sent successfully
      if (response.ok) {
        // Handle success
        console.log('Email sent successfully');
      } else {
        // Handle error
        console.error('Failed to send email');
      }
    } catch (error) {
      // Handle exception
      console.error('Error submitting form', error);
    }
  };
  

  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
          * Nombre:
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
          Teléfono:
        </label>
        <input
          type="text"
          name="telefono"
          id="telefono"
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          * Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contexto" className="block text-sm font-medium text-gray-700">
          * Contexto:
        </label>
        <textarea
          name="contexto"
          id="contexto"
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm rounded-md"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="termsAndConditions" className="flex items-center">
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            required
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={handleChange}
          />
          <span className="ml-2 text-sm text-gray-700">
            * Acepto los términos y condiciones
          </span>
        </label>
      </div>
      <div>
        <label htmlFor="privacyPolicy" className="flex items-center">
          <input
            type="checkbox"
            name="privacyPolicy"
            id="privacyPolicy"
            required
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={handleChange}
          />
          <span className="ml-2 text-sm text-gray-700">
            * Acepto la política de privacidad
          </span>
        </label>
      </div>
      <div>
        <label htmlFor="marketingConsent" className="flex items-center">
          <input
            type="checkbox"
            name="marketingConsent"
            id="marketingConsent"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={handleChange}
          />
          <span className="ml-2 text-sm text-gray-700">
            Acepto recibir marketing de Pablo Hermosa
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;