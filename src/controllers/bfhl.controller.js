const {
  getFibonacci,
  getPrimes,
  hcfArray,
  lcmArray
} = require('../utils/math.utils');
const { askGemini } = require('../utils/gemini');

const handleBFHL = async (req, res) => {
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid request format'
      });
    }

    let data;

    if (body.fibonacci !== undefined) {
      data = getFibonacci(Number(body.fibonacci));

    } else if (body.prime !== undefined) {
      data = getPrimes(body.prime);

    } else if (body.lcm !== undefined) {
      data = lcmArray(body.lcm);

    } else if (body.hcf !== undefined) {
      data = hcfArray(body.hcf);

    } else if (body.AI !== undefined) {
      if (typeof body.AI !== 'string' || body.AI.trim() === '') {
        return res.status(400).json({
          is_success: false,
          message: 'Invalid AI input'
        });
      }

      data = await askGemini(body.AI);

    } else {
      return res.status(400).json({
        is_success: false,
        message: 'Unsupported key'
      });
    }

    return res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data
    });

  } catch (error) {

    console.error('BFHL ERROR:', error.response?.data || error.message);

    return res.status(500).json({
      is_success: false,
      message: 'Processing error'
    });
  }
};

module.exports = { handleBFHL };