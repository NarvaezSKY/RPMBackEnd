import multer from "multer"
//multer memory storage configuration
export const upload = multer({ storage:multer.memoryStorage() });