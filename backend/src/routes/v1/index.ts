import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import crypto  from 'crypto'
const router = Router();
router.get('/status', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    message: 'ExpTrust Backend',
    success: true,
  });
});

router.post('/jsonify',async (req: Request, res: Response) =>{
  let CredInfo = JSON.stringify(req.body)
  let encodedCredInfo_64 = Buffer.from(JSON.stringify(CredInfo)).toString('base64') 
  let encodedCredInfo_256 = ''
  let token = crypto.createHmac('sha256',encodedCredInfo_64) 
  let signature = ""
  
  console.log('req: '+ CredInfo)
  console.log('Encoded Info: '+ encodedCredInfo_64)
  console.log('Address of Public key: '+ encodedCredInfo_256)
});

export const apis_v1 = router;
