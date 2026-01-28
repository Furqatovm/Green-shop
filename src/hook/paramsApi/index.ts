import { useSearchParams } from "react-router-dom"

 const useSearchParamsHandler =() =>{
    const [searchParams, setSearchParams] =useSearchParams()


    const getParam =(path: string) =>searchParams.get(path)

    const setParam =(value:object) =>{
        setSearchParams({...value})
    }

    return {getParam, setParam}
};

export { useSearchParamsHandler }