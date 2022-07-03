import { db } from "../../../config/db";

export default async(req,res)=>{
    var sql="INSERT INTO dummy VALUES ('"+req.body.id+"','"+req.body.name+"','"+req.body.registration+"')";
    db.query(sql,function(error,result){
        if(error){
            return res.send({
                status:"fail",
                message:error,
            })
        }
        else{
            return res.send({
                status:"success",
                message:"successfully registered",
            })
        }
    })
}