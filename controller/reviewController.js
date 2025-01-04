import Review from "../models/review";

export function addReview(req,res){
    if(req,user==null){
        res.status(401).json({
            message:"please login and try again",
        });
        return;
    }

    const data =req.body;

    data.name = req.user.firstName+" "+req.user.lastName;
    data.profilePicture = req.user.profilePicture;
    data.email = req.user.email;

    const newReview = new Review(data)

    newReview.save().then(()=>{
        res.json({message:"review added successfully"});
    }).catch(()=>{
        res,status(500).json({message:"review addition failed"})
    });
}