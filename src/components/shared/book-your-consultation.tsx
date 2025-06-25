import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'

export const BookYourConsultation = () => {
  return (
    <div className='mt-24 p-7 lg:p-28 bg-[#FDFBF7] grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-x-20'>
      <div>
        <h2 className='text-start text-3xl text-[#8A7B70]'><span className='border-b-4 border-b-[#D4A380]'>Book y</span>our Consultation</h2>
        <p className="mt-10 text-base/relaxed text-[#A89689] text-start">Take the first step towards healthier, more radiant skin. Schedule a consultation with our skincare experts today.</p>
        <div className="mt-10 flex flex-col items-start justify-start space-y-8">
          <div className='flex flex-row items-start justify-start space-x-5'>
            <div className='p-3 rounded-full bg-[#F9EEE7]'>
          <Clock className='size-5' color='#D4A380' />
          </div>
            <div className='text-start'>
              <h4 className='text-[#8A7B70] font-medium'>Working hours</h4>
              <p className="mt-1 text-[#A89689]">Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p className="mt-1 text-[#A89689]">Saturday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className='flex flex-row items-start justify-start space-x-5'>
            <div className='p-3 rounded-full bg-[#F9EEE7]'>
          <MapPin className='size-5' color='#D4A380' />
          </div>
            <div className='text-start'>
              <h4 className='text-[#8A7B70] font-medium'>Location</h4>
              <p className="mt-1 text-[#A89689]">123 Skin Care Avenue, Pune, Maharashtra, 411001</p>
            </div>
          </div>
          <div className='flex flex-row items-start justify-start space-x-5'>
            <div className='p-3 rounded-full bg-[#F9EEE7]'>
          <Calendar className='size-5' color='#D4A380' />
          </div>
            <div className='text-start'>
              <h4 className='text-[#8A7B70] font-medium'>Appointment Policy</h4>
              <p className="mt-1 text-[#A89689] text-wrap">Please arrive 15 minutes before your scheduled appointment. 24-hour cancellation notice required.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-white shadow-lg rounded-lg w-full max-w-xl mx-auto">
        <h3 className='text-2xl text-[#8A7B70]'>Request an Appointment</h3>
      <div className="mt-10 flex flex-row items-center justify-center space-x-5">
        <div className='w-full'>
          <Label className='text-[#8A7B70] mb-3'>Full name</Label>
          <Input className='shadow-md text-xl placeholder:text-[#CCCCCC]' />
        </div>
        <div className='w-full'>
          <Label className='text-[#8A7B70] mb-3'>Phone Number</Label>
          <Input className='shadow-md text-xl placeholder:text-[#CCCCCC]' />
        </div>
      </div>
      <div className="mt-5">
        <Label className='text-[#8A7B70] mb-3'>Email Address</Label>
        <Input className='shadow-md text-xl placeholder:text-[#CCCCCC]' />
      </div>
      <div className='mt-5'>
        <Label className='text-[#8A7B70] mb-3'>Service Interested in</Label>
        <Select>
          <SelectTrigger className='w-full shadow-md'>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
        <SelectItem value='item-1'>Item 1</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='mt-5'>
        <Label className='text-[#8A7B70] mb-3'>Additional Information</Label>
        <Textarea className='shadow-md text-xl placeholder:text-[#CCCCCC] h-28' placeholder='Tell us about your skin concerns' />
        <div className="mt-5">
          <Button className='w-full bg-[#D4A380] hover:bg-[#D4A380]/90'>
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
      </div>
  )
}
