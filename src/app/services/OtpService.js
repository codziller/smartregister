import Otp from '../models/otp'
import JwtService from './JwtService'

export class OtpService {
  async sendOtp({ phone_number, action }) {
    const otp = '2021'
    const otpToCreate = await Otp.query()
      .findOne({
        phone_number,
        action
      })
      .catch(() => false)

    if (otpToCreate) {
      await Otp.query().patchAndFetchById(otpToCreate.id, {
        otp_token: JwtService.sign(
          { phone_number, otp, action },
          { expiresIn: process.env.OTP_EXPIRATION || '10m' }
        )
      })
    } else {
      await Otp.query().insert({
        phone_number,
        action,
        otp_token: JwtService.sign(
          { phone_number, otp, action },
          { expiresIn: process.env.OTP_EXPIRATION || '10m' }
        )
      })
    }
    return { otp }
  }
}

const instance = new OtpService()

export default instance
