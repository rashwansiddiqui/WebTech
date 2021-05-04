const Product = require('../models/product.model')

exports.test=(req,res)=>{
    res.send('Greetings from test controller')
}

exports.CreateProduct=(req,res)=>{
    let product=new Product({
        name:req.body.name,
        price:req.body.price
    });

    product.save((err)=>{
        if (err){
            return next(err)
        }
        res.send('Product created seccessfully')
    })
}

exports.productDetails=(req,res)=>{
    Product.findById(req.params.id, (err,product)=>{
        if (err) return next(err)
        res.send(product)
    })
}

exports.UpdateProduct=(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{$set: req.body},(err, product)=>{
        if (err) return next(err)
        res.send('product updated')
    } )
}

exports.DeleteProduct=(req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err)
        res.send('Product deleted')
    })
}

exports.list=(req,res)=>{
    Product.find((err,products)=>{
        if(!err){res.render('product',{page: 'Product List',menuId: 'list', products:products})}
        else{console.log('Error in retrieving products:'+JSON.stringify(err,undefined,2));}
    })
}