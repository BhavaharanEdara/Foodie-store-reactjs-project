import React from 'react'

function Footer() {
  return (
    <div className='w-full md:w-full text-base md:text-lg font-medium bg-gray-900 text-white flex px-20 py-10 justify-center md:gap-36 gap-5'>
      <h1 className='pt-3'>© 2023 Foodie Store</h1>
      <div className='text-sans '>
        <h1 className='py-2'>Company</h1>
        <h1 className='py-2'>About</h1>
        <h1 className='py-2'>Team</h1>
        <h1 className='py-2'>Legal</h1>
        <h1 className='py-2'>Terms & Conditions</h1>
      </div>
      <div className=''>
        <h1 className='py-2 md:pl-0 pl-5'>Contact Us :</h1>
        <p className='py-2 pl-5'>support@foodie.com</p>
        <p className='py-2 pl-5'>+911234567890</p>
        <p className='py-2 pl-5'>53-2-9/b Niranjan Bhavan 1st floor alambore street</p>
        <p className='py-2 pl-5'>Banglore</p>
      </div>
    </div>
  )
}

export default Footer
