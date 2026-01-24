
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


export const inputStyle ={
  borderColor: '#46A358',  
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
  

  export interface DiscountedItem {
    id: number;
    title: string;
    discoount_up_to: number;
    poster_image_url: string;
  }


  export interface ProductItem {
    _id: string;
    title: string;
    description: string;
    short_description: string;
    category: string;
    price: number;
    discount: boolean;
    discount_price: string;
    main_image: string;
    detailed_images: string[];
    rate: number;
    sold_times: number;
    views: number;
    tags: string[];
    comments: string[]; 
    created_by: string;
    created_at: string; 
    __v: number;
  }


  export interface PrototypeDataType {
    img:string;
    created_at:string,
    title:string,
    description:string,
  }