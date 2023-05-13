import { User } from '../../libs/api/generated-db-types/src'

export const USERS_SEED_DATA: User[] = [
  {
    id: "1",
    email: "admin@okkino.com",
    name: "Admin Okkino",
    password: "hashedpassword"
  }
]
