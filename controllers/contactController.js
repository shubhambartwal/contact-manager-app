//@desc get all contacts
//@rout GET/api/contacts
//@access  public
const getContacts=(req,res)=>{
    res.status(200).json({message:"get all contacts"});
}
//@desc create new contact
//@rout POST/api/contacts
//@access  public
const createContact=(req,res)=>{
    console.log(`the req body is ${req.body}`)
    res.status(201).json({message:"create contacts"});
}
//@desc update contact
//@rout PUT/api/contacts/:id
//@access  public
const updateContact=(req,res)=>{
    res.status(200).json({message:`get contact for ${req.params.id}`});
}
//@desc get contact
//@rout GET/api/contacts/:id
//@access  public
const getContact=(req,res)=>{
    res.status(200).json({message:`update  contact for ${req.params.id}`});
}
//@desc delete contact 
//@rout DELETE/api/contacts/:id
//@access  public
const deleteContact=(req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
}
module.exports={getContact,getContacts,updateContact,deleteContact,createContact}