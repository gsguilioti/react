import axios from 'axios'
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://jsonplaceholder.typicode.com/posts'

export const action = async ({request}) => {

  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    toast.error(error?.response)
  }
  
}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form' action='' method='POST'>
      <h4 style={{textAlign: 'center', marginBottom: '2rem'}}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input type="text" className='form-input' name='name' id='name' required/>
      </div>

      {/* last name */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input type="text" className='form-input' name='lastName' id='lastName' required/>
      </div>

      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input type="text" className='form-input' name='email' id='email' required/>
      </div>

      <button type='submit' className='btn btn-block' style={{marginTop: '0.5rem'}} disabled={isSubmitting}>
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  )
}

export default Newsletter
