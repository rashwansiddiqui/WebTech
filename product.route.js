const express=require('express');
const router=express.Router();

const product_controller=require('../controllers/product.controller');

router.get('/test',product_controller.test);

router.post('/create',product_controller.CreateProduct);

router.get('/:id',product_controller.productDetails);

router.put('/:id/update',product_controller.UpdateProduct);

router.delete('/:id/delete',product_controller.DeleteProduct);

module.exports=router;