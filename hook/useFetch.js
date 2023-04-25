import { useEffect, useState } from "react"

import axios from "axios"

const rapidApiKey="d2bb21396cmsha2114bf4f606bc9p1ce8e8jsn87c19fd4d722"
const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
    const fetchData=async ()=>{
        setIsLoading(true)
        try{
            const response=await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
            setError(null)
        }
        catch(error){
            setIsLoading(false)
            setError(error)
            setData([])
            // alert("There is an error happend")
        }
        finally{
            setIsLoading(false)
            
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    const refetch=()=>{
        setIsLoading(true)
        fetchData();

    }
    return {data,isLoading,error,refetch}
}
export default useFetch