
 export interface InformationType {
    img:string;
    title?:string;
    description:string;
}

export const ButtonStyle ={
    backgroundColor: '#46A358',
    color: '#fff',             
    borderColor: '#46A358',  
    fontWeight:"700",
    padding:"20px 30px"
}


export interface Category {
    _id: string
    title: string
    route_path: string
    count: number
    created_at: string
    created_by: string
    __v: number
  }
  