import React, { useState, useEffect, useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Calendar, Clock, MapPin, Phone, Mail, ChevronDown, CheckCircle, AlertTriangle } from 'lucide-react'

// IMPORTANT: Replace this with the Google Apps Script URL you get after deployment.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxtifUC6ivOWNXKTOPXYXG--2cELn3aoWuAXhKEfnHfubtecVaH9I3fNiU5CvI08KsRYA/exec'

export const BookYourConsultation = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // State for form fields
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null)

  const services = [
    // Skin Services
    'Acne and Acne Scars', 'Pigmentation', 'Skin Discoloration', 'Aging and Wrinkles', 'Skin Texture',
    'Other Skin Concerns', 'Facials', 'Chemical Peel', 'Advanced Skin Treatment', 'Lifting and Tightening',
    'Trending Services', 'Specialty Treatment',
    // Hair Services
    'PRP Hair Treatment', 'Hair Loss Treatment', 'Hair Mesotherapy', 'QR678 Treatment', 'Hair Density Improvement',
    'Hair Regrowth', 'Postnatal Hair Loss Treatment', 'Alopecia Areata Treatment', 'Hair Loss Treatment for Men',
    // Laser Services
    'Laser Hair Removal', 'Leg Hair Removal', 'Bikini Hair Removal', 'Laser Beard Shaping',
    'Diode Laser Hair Removal', 'CO2 Laser for Skin', 'QSwitch ND YAG Laser', 'Carbon Laser Facial', 'Tattoo Removal'
  ]

  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleServiceSelect = (service: string) => {
    setSearchTerm(service)
    setIsDropdownOpen(false)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus(null)

    if (!fullName || !phoneNumber || !email || !searchTerm) {
      alert('Please fill out all required fields: Full Name, Phone, Email, and Service.')
      setIsSubmitting(false)
      return
    }

    const formData = {
      fullName,
      phoneNumber,
      email,
      service: searchTerm,
      additionalInfo,
    }

    try {
      // We use a temporary workaround for Google Apps Script CORS policy.
      // The script executes successfully, but the browser blocks reading the response.
      // We "fire and forget" and optimistically assume success if no network error is thrown.
      fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(formData)
      });

      // Optimistically show success and reset the form.
      setTimeout(() => {
        setSubmissionStatus('success');
        setIsSubmitting(false);
        // Reset form fields
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setSearchTerm('');
        setAdditionalInfo('');
      }, 1000); // 1-second delay to allow the request to be sent

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmissionStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <div className='mt-20 py-32 bg-[#FDFBF7] w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='p-4 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-y-12 sm:gap-y-20 lg:gap-x-20'>
          <div>
            <h2 className='text-start text-2xl sm:text-3xl text-[#8A7B70]'><span className='border-b-4 border-b-[#D4A380] pb-1'>Book y</span>our Consultation</h2>
            <p className="mt-6 sm:mt-10 text-sm sm:text-base/relaxed text-[#A89689] text-start">Your Glow. Our Firm. Take the first step towards healthier, more radiant skin. Schedule a consultation with our skincare experts today.</p>
            <div className="mt-6 sm:mt-10 flex flex-col items-start justify-start space-y-6 sm:space-y-8">
              <div className='flex flex-row items-start justify-start space-x-3 sm:space-x-5'>
                <div className='p-3 rounded-full bg-[#F9EEE7]'>
                  <Clock className='size-5' color='#D4A380' />
                </div>
                <div className='text-start flex-1'>
                  <h4 className='text-sm sm:text-base text-[#8A7B70] font-medium'>Working hours</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#A89689]">Tuesday - Sunday: 11:00 AM - 8:00 PM</p>
                  <p className="mt-1 text-xs sm:text-sm text-[#A89689]">Closed on Monday</p>
                </div>
              </div>
              <div className='flex flex-row items-start justify-start space-x-5'>
                <div className='p-3 rounded-full bg-[#F9EEE7]'>
                  <MapPin className='size-5' color='#D4A380' />
                </div>
                <div className='text-start'>
                  <h4 className='text-sm sm:text-base text-[#8A7B70] font-medium'>Location</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#A89689]">1st Floor, Society Gate 1, Plot no.1, NIBM Post Office Rd, opp. Tribeca Highstreet, Sainik Vihar, Jarande Nagar, Mohammed Wadi, Pune, Maharashtra 411060</p>
                </div>
              </div>
              <div className='flex flex-row items-start justify-start space-x-5'>
                <div className='p-3 rounded-full bg-[#F9EEE7]'>
                  <Phone className='size-5' color='#D4A380' />
                </div>
                <div className='text-start'>
                  <h4 className='text-sm sm:text-base text-[#8A7B70] font-medium'>Contact Number</h4>
                  <Link href="tel:+918308669966" className="mt-1 text-xs sm:text-sm text-[#A89689] hover:text-[#D4A380] transition-colors">
                    +91 8308669966
                  </Link>
                </div>
              </div>
              <div className='flex flex-row items-start justify-start space-x-5'>
                <div className='p-3 rounded-full bg-[#F9EEE7]'>
                  <Mail className='size-5' color='#D4A380' />
                </div>
                <div className='text-start'>
                  <h4 className='text-sm sm:text-base text-[#8A7B70] font-medium'>Email</h4>
                  <Link href="mailto:theskinfirmclinic@gmail.com" className="mt-1 text-xs sm:text-sm text-[#A89689] hover:text-[#D4A380] transition-colors">
                    theskinfirmclinic@gmail.com
                  </Link>
                </div>
              </div>
              <div className='flex flex-row items-start justify-start space-x-5'>
                <div className='p-3 rounded-full bg-[#F9EEE7]'>
                  <Calendar className='size-5' color='#D4A380' />
                </div>
                <div className='text-start'>
                  <h4 className='text-sm sm:text-base text-[#8A7B70] font-medium'>Appointment Policy</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#A89689] text-wrap">Please arrive 15 minutes before your scheduled appointment. 24-hour cancellation notice required.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-10 bg-white shadow-lg rounded-lg w-full max-w-xl mx-auto">
            <h3 className='text-xl sm:text-2xl text-[#8A7B70]'>Request an Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5">
                <div className='w-full'>
                  <Label htmlFor='fullName' className='text-[#8A7B70] mb-3'>Full name</Label>
                  <Input id='fullName' name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} required className='shadow-md text-base sm:text-xl placeholder:text-[#CCCCCC]' />
                </div>
                <div className='w-full'>
                  <Label htmlFor='phoneNumber' className='text-[#8A7B70] mb-3'>Phone Number</Label>
                  <Input id='phoneNumber' name='phoneNumber' type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className='shadow-md text-base sm:text-xl placeholder:text-[#CCCCCC]' />
                </div>
              </div>
              <div className="mt-5">
                <Label htmlFor='email' className='text-[#8A7B70] mb-3'>Email Address</Label>
                <Input id='email' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='shadow-md text-xl placeholder:text-[#CCCCCC]' />
              </div>
              <div className='mt-5' ref={dropdownRef}>
                <Label htmlFor='service' className='text-[#8A7B70] mb-3'>Service Interested in</Label>
                <div className='relative'>
                  <Input
                    id='service'
                    name='service'
                    required
                    className='shadow-md text-base sm:text-xl placeholder:text-[#CCCCCC] pr-10'
                    placeholder='Type to search or select a service'
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setIsDropdownOpen(true)
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    autoComplete="off"
                  />
                  <ChevronDown
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#A89689] cursor-pointer'
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  />
                  {isDropdownOpen && filteredServices.length > 0 && (
                    <div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto'>
                      {filteredServices.map((service, index) => (
                        <div
                          key={index}
                          className='px-4 py-2 hover:bg-[#F9EEE7] cursor-pointer text-[#8A7B70] border-b border-gray-100 last:border-b-0'
                          onClick={() => handleServiceSelect(service)}
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className='mt-5'>
                <Label htmlFor='additionalInfo' className='text-[#8A7B70] mb-3'>Additional Information</Label>
                <Textarea id='additionalInfo' name='additionalInfo' value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className='shadow-md text-base sm:text-xl placeholder:text-[#CCCCCC] h-24 sm:h-28' placeholder='Tell us about your skin concerns' />
              </div>
              <div className="mt-5">
                <Button type='submit' className='w-full bg-[#D4A380] hover:bg-[#D4A380]/90' disabled={isSubmitting}>
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </Button>
              </div>
              {submissionStatus === 'success' && (
                <div className="mt-4 p-3 flex items-center space-x-2 rounded-md bg-green-50 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">Success! Your appointment has been booked.</p>
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="mt-4 p-3 flex items-center space-x-2 rounded-md bg-red-50 text-red-700">
                  <AlertTriangle className="h-5 w-5" />
                  <p className="text-sm font-medium">Error! Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
