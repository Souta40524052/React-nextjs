import {NextResponse} from "next/server"
import { jwtVerify} from "jose"

export async function middleware(request){
    //console.log("ミドルウェア")
    
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc0MDQ3MjI5NH0.dYYlX3LHXms4lTeAUdk1vKsHUKhj4JuFPuHMlPOtI-I"

    //const token = await requset.headers.get("Authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }

    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        //console.log("decodedJwt", decodedJwt)

        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "トークンが正しくないので、ログインしてください。"})
    }
    
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update:path*", "/api/item/delete/:path"]
}