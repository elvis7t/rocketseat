export interface CreateUserBody {
  name: string
  email: string
  password: string
}

export interface User {
  id: string
  name: string
  email: string
  password_hash: string
}
