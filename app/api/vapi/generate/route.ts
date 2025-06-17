export async function GET(){
    return Response.json({succes: true, data: 'THANK YOU!'} , { status: 200});
}