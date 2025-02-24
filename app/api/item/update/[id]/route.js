import { NextResponse } from "next/server";
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels";

export async function PUT(request, context){
    const reqBody = await request.json()
    
    const params = await context.params
    const id = params.id
    
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(id)
        console.log(singleItem)
        if(singleItem.email === reqBody.email){
        await ItemModel.updateOne({_id: id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
        }else{
            return NextResponse.json({message: "他のユーザが作成したアイテムです。"})
        }
    }catch{
        return NextResponse.json({message: "アイテム編集失敗"})
    }
    
}