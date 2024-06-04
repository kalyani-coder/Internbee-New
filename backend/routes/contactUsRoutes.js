const express = require("express");
const router = express.Router();
const ContactUsModel = require("../models/ContactUsModel");

// Create a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new ContactUsModel({ name, email, message });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get 
router.get('/', async (req, res) => {
    try {
        const contacts = await ContactUsModel.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



//get by id
router.get("/:id", async(req,res)=>{
    try{
        const contact = await ContactUsModel.findById(req.params.id);
        if(contact){
            res.json(contact);
        }else {
            res.status(404).json({message: "TPO not found"});
        }
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});





// Update 
router.patch('/:id', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const updatedContact = await ContactUsModel.findByIdAndUpdate(req.params.id, { name, email, message }, { new: true });
        // { new: true } option returns the modified document rather than the original
        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try{
        const contact = await ContactUsModel.findById(req.params.id);
        if(contact){
            await contact.remove();
            res.json({message:"Contact us Deleted successfully"});
        }else{
            res.status(404).json({message: " contact not found"});
        }
    }catch (error){
        res.status(500).json({message:error.message});
    }
});

module.exports = router;