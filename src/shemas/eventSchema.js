import { z } from 'zod';

export const eventSchema = z.object({
  name: z.string().min(3, 'Event name must be at least 3 characters long'),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  image: z.string().optional().or(z.literal('')),
  price: z.number().min(0, 'Price must be a positive number'),
  nbTickets: z.number().int().min(0, 'Number of tickets must be a positive integer'),
  nbParticipants: z.number().int().min(0, 'Number of participants must be a positive integer'),
  like: z.boolean().optional()
});