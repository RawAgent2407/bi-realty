import React, { useState } from 'react'
import { FiPhone, FiSend } from 'react-icons/fi'
import Button from '../Button'
import './ContactSection.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: '',
    terms: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual submission logic
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We\'ll get back to you soon.')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
        terms: false,
      })
      setErrors({})
    } catch (error) {
      console.error('Submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:gap-2 mob:gap-3">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="FIRST NAME*"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full border text-sm mob:text-base px-4 py-3 rounded-[6px] outline-none focus:ring-1 bg-white ${
              errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="LAST NAME*"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full border text-sm mob:text-base px-4 py-3 rounded-[6px] outline-none focus:ring-1 bg-white ${
              errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="mobile"
          placeholder="+91 | MOBILE NUMBER*"
          value={formData.mobile}
          onChange={handleChange}
          className={`w-full border text-sm mob:text-base px-4 py-3 rounded-[6px] outline-none focus:ring-1 bg-white ${
            errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
          }`}
        />
        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="EMAIL*"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border text-sm mob:text-base px-4 py-3 rounded-[6px] outline-none focus:ring-1 bg-white ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="MESSAGE*"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className={`w-full border text-sm mob:text-base px-4 py-3 rounded-[6px] outline-none focus:ring-1 bg-white resize-none ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <div>
        <div className="flex items-start gap-2 text-sm text-gray-600 mob:text-[0.875rem]">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className={`mt-1 w-4 h-4 ${errors.terms ? 'border-red-500' : ''}`}
          />
          <label className={`leading-tight ${errors.terms ? 'text-red-500' : ''}`}>
            By clicking this you agree to{' '}
            <a href="#" className="underline hover:text-black">
              terms & conditions
            </a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-black">
              privacy policy
            </a>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full !bg-black !text-white hover:!bg-gray-800 rounded-[6px]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

const ContactSection = ({ data }) => {
  const title = data?.title || "Let's Connect"
  const description =
    data?.description || 'Have A Question, Feedback, Or Just Want To Say Hi?'
  const contactInfo = data?.contactInfo || {
    phone: '+91 98983 39903',
    email: 'buildindiarealty@gmail.com',
    address:
      'Zion Z1, 907–908, nr. Maple County Road, off Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054',
  }

  return (
    <div className="flex lg:p-16 flex-col lg:flex-row sm:flex-col-reverse overflow-hidden sm:p-10 sm:py-10 sm:pt-20 mob:px-5 mob:pt-10 mob:pb-14 mob:flex-col-reverse">
      {/* Left Info */}
      <div className="lg:p-20 lg:space-y-8 border-b md:border-b-0 lg:border-r sm:w-full sm:bg-white mob:bg-white sm:py-16 sm:px-10 mob:p-5 mob:gap-6 mob:flex mob:flex-col mob:items-start lg:w-[45%]">
        <div>
          <h2 className="text-xl sm:text-3xl mob:text-[1.25rem] font-bold text-gray-900 font-heading">
            {title}
          </h2>
          <p className="text-sm mob:text-[0.875rem] text-gray-600 font-sans mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-4 text-sm mob:text-[0.875rem] text-gray-700">
          {/* Phone */}
          <div className="flex items-start gap-3 mob:gap-2">
            <FiPhone className="mt-1 text-gray-900 text-lg" />
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="hover:underline break-all"
            >
              {contactInfo.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 mob:gap-2">
            <FiSend className="mt-1 text-gray-900 text-lg" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:underline break-all"
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 mob:gap-2">
            <LocationOnOutlinedIcon className="mt-1 text-gray-900 text-xl" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                contactInfo.address,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span className="leading-relaxed">{contactInfo.address}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-[#E7E5E2] sm:py-16 sm:px-10 lg:p-16 lg:w-[55%] sm:w-full mob:p-8 mob:pt-10">
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactSection
