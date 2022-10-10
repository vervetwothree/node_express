const getPeople = (req,res) =>{
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req,res) =>{
    const { name } = req.body
    if(!name) {
        return res
            .status(400)
            .json({success: true, msg: 'please provide name value'})
    }
    res.status(200).json({ success: true, data: people })
})