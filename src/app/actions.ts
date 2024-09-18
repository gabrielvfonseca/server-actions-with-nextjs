'use server'

import { prisma } from '@/lib/db';
import { z } from 'zod';

// Zod schema for form validation
const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

// Server action to create a user
export async function createUser (formData: FormData) {
    // Parse form data using Zod
    const parsedData = userSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
    });

    if (!parsedData.success) {
        // Return errors if validation fails
        return {
            errors: parsedData.error.flatten().fieldErrors,
        };
    };

    const { name, email } = parsedData.data;

    try {
        // Save validated user data into the database using Prisma
        const user = await prisma.user.create({
            data: { name, email },
        });

        return { success: true, user };
    } catch (error) {
        console.error(error)
    };

    return { errors: { form: ['Something went wrong'] } };
};