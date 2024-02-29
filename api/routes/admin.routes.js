import { Router } from 'express'
import { adminRegister, adminLogin, getAdmin, AdminVerifyToken } from '../controllers/admin.controller.js'
import { AuthRequired } from '../middlewares/ValidateToken.js'

const router=Router()
router.get('/getadmins', getAdmin)
router.post('/adminregister', adminRegister)
router.post('/adminlogin', adminLogin)
router.get('/adminverify', AdminVerifyToken)

export default router