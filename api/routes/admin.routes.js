import { Router } from 'express'
import { adminRegister, adminLogin, getAdmin } from '../controllers/admin.controller.js'
import { AuthRequired } from '../middlewares/ValidateToken.js'

const router=Router()
router.get('/getadmins', AuthRequired, getAdmin)
router.post('/adminregister', adminRegister)
router.post('/adminlogin', adminLogin)

export default router