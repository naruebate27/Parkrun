import mongoose from 'mongoose'

import userSchema from '../schemas/user'

const { Schema } = mongoose

const enumUserType = {
  RUNNER: 'Runner',
  VALUNTEER: 'Valunteer',
  ORGANIZER: 'Organizer',
}

const RunnerUserSchema = new Schema({ })
const ValunteerUserSchema = new Schema({ })
const OrganizerUserSchema = new Schema({ })

const users = mongoose.model('users', userSchema)

export const RunnerUserModel = users.discriminator(enumUserType.RUNNER, RunnerUserSchema)
export const ValunteerUserModel = users.discriminator(enumUserType.VALUNTEER, ValunteerUserSchema)
export const OrganizerUserModel = users.discriminator(enumUserType.ORGANIZER, OrganizerUserSchema)

export default users
