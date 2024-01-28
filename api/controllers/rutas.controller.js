import Ruta from "../models/rutas.models.js"

export const getRutas=async(req,res)=>{
    try {
        const ruta=await Ruta.find()
        res.status(200).json({ruta})
    } catch (error) {
        console.error(error)
    }
}

export const getRuta=async(req,res)=>{
    try {
        const ruta=await Ruta.findById({_id:req.params.id})
        res.status(200).json({ruta})
    } catch (error) {
        console.error(error)
    }
}

export const uploadRuta=async(req,res)=>{
    const {NombreRuta, PuntoInicioRuta, PuntoFinalRuta, KmTotalesRuta, PresupuestoGas} = req.body

    try {
        const foundRuta=await Ruta.findOne({NombreRuta})
        if (foundRuta) return res.status(400).json({message:`${foundRuta.NombreRuta} already exist`})

        const ruta= new Ruta({
            NombreRuta,
            PuntoInicioRuta,
            PuntoFinalRuta,
            KmTotalesRuta,
            PresupuestoGas
        })

        const savedRuta=await ruta.save()
        res.status(200).json({savedRuta})
    } catch (error) {
        console.log(error)
    }
}

export const deleteRuta=async(req,res)=>{
    try {
        const foundRuta=await Ruta.findByIdAndDelete({_id:req.params.id})
        if (!foundRuta) return res.status(404).json({message:"Ruta no encontrada"})
        res.status(200).json({message:`Ruta eliminada:`, foundRuta})
    } catch (error) {
        console.log(error)
    }
}