'use client'

import { Input } from '@/ui/input'
import { createUser } from './actions'
import { useState } from 'react'

export default function Page() {
  const [errors, setErrors] = useState<{ name?: string[], email?: string[], form?: string[] } | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData)
    if (result.errors) {
      setErrors(result.errors)
    } else {
      setErrors(null)
      // Handle success, e.g., show success message or redirect
      alert("User created successfully!")
    }
  }

  return (
    <form action={handleSubmit}>
      <div className='space-x-2'>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" id="name" />
        {errors?.name && <p>{errors.name.join(', ')}</p>}
      </div>

      <div className='space-x-2'>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        {errors?.email && <p>{errors.email.join(', ')}</p>}
      </div>

      {errors?.form && <p>{errors.form.join(', ')}</p>}

      <button type="submit">Submit</button>
    </form>
  )
};