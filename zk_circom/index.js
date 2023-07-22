const snarkjs = require('snarkjs')
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const ff = require('ffjavascript')
const { unstringifyBigInts } = ff.utils

const app = express()
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
  console.log('Listening at PORT: ', PORT)
})

/* 
  input body format:
  {
    gitAcc: num
    bizData: num
  }
*/

app.post('/proof', async (req, res) => {
  try {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      { gitAcc: req.body.gitAcc, bizData: req.body.bizData },
      'biz_owner_js/biz_owner.wasm',
      'circuit_0000.zkey'
    )
    const editedPublicSignals = unstringifyBigInts(publicSignals)
    const editedProof = unstringifyBigInts(proof)
    const callData = await snarkjs.groth16.exportSolidityCallData(
      editedProof,
      editedPublicSignals
    )

    res.status(200).send(JSON.parse(`[${callData}]`))
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
})
