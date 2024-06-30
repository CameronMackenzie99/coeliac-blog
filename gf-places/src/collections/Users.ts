import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 28800, // 8 hours
    cookies: {
      sameSite: 'none',
      secure: true,
      domain: process.env.COOKIE_DOMAIN,
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
