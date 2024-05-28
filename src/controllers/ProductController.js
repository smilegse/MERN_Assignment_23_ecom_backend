
const {BrandListService} = require('../services/ProductServices')

exports.ProductListByBrand=async(req,res)=>{
    let result = await BrandListService(req);
    return res.status(200).json(result)
}

