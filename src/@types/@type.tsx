
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

export const IncrementStyle ={
    backgroundColor:"#46A358",
    outline:"#46A358",
    color:"white",
    border:"#46A358"

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

  export interface ProductTitleType {
    id:number;
    title:string;
    route_path:string;
  }


  export interface ShopCardType extends ProductItem {
    counter:number;
    userPrice:number;
  }



  export interface CouponType {
    code:string;
    discount_for:number;
    id:number;
    title:string
  }


  export const radioTyle ={
    backgroundColor: '#46A358',
    color: '#fff',             
    borderColor: '#46A358'
  }


  export interface DetailType {
    product?:{
      _id: string;
      category: string;
      comments: any[]; 
      created_at: string; 
      created_by: string;
      description: string;
      detailed_images: string[];
      discount: boolean;
      discount_price: string;
      main_image: string;
      price: number;
      rate: number;
      short_description: string;
      sold_times: number;
      tags: string[];
      title: string;
      views: number;
      __v: number;
    }

  }
  

  export interface BlogPost {
    _id: string;
    title: string;
    short_description: string;
    content: string;
    created_at: string; 
    created_by: string; 
    views: number;
    reaction_length: number;
    __v: number;
  }

 


  export interface ShopItemsType {
    _id: string;
    title: string;
    price: number;
    discount: boolean;
    discount_price: string;
    userPrice: number;
    category: string;
    description: string;
    short_description: string;
    detailed_images: string[];
    main_image: string;
    rate: number;
    sold_times: number;
    views: number;
    comments: any[]; // Agar keyinroq commentlarni alohida type qilmoqchi bo'lsangiz, any[] o'rniga Comment[]
    tags: string[];
    created_at: string; // ISO formatdagi sana
    created_by: string;
    __v: number;
    counter: number;
  };



interface BillingAddress {
  name: string;
  surname: string;
}

export interface ExtraShopInfo {
  total: number;
  method: string; 
}

 export interface ShopItem {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price?: string;
  quantity?: number; 
  img?: string;     
}

export interface OrderType {
  _id: string;
  created_by: string;
  created_at: string; 
  billing_address: BillingAddress;
  extra_shop_info: ExtraShopInfo;
  method: string;
  total: number;
  shop_list: ShopItem[];
  __v?: number;
}
