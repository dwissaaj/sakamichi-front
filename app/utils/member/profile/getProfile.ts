import Error from "@/app/error"

export const GetProfile = async (id: string) => {
  try {
    const res = await fetch( `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/get/${id}`, {cache: 'force-cache'})
    
    console.log("Get Profile")
    return res.json()
  } catch (error) {
    console.log("Error at profile" )
    console.error("Error fetching member data:", error);
    return Error
  }
}