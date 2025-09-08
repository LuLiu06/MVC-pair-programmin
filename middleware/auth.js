
function auth(req,res,next){
    const isAdmin=req.query.admin==='true';

    if(!isAdmin){
        return res.status(403).json({message:'Access denied. Admin only.'})
    }
    next();
}

module.exports=auth;