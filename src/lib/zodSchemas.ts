
import { z } from 'zod';

export const usernameSchema = (options?: { 
  isUsernameUnique?: (username: string) => Promise<boolean> 
}) => {
  return z.string()
    .trim()
    .min(3, { message: 'Must be at least 3 characters' })
    .max(20, { message: 'Must be shorter than 20 characters' })
    .refine(
      async (username) => {
        if (!options?.isUsernameUnique) return true;
        return options.isUsernameUnique(username);
      },
      { message: 'Username is already taken' }
    );
};

export function onboardingSchemaValidation(options?: { 
  isUsernameUnique?: (username: string) => Promise<boolean> 
}) {
  return z.object({
    userName: usernameSchema(options)
  });
}