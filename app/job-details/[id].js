import { Stack, useRouter, useSearchParams } from "expo-router"
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import { Company, JobAbout, JobFooter, ScreenHeaderBtn, Specifics } from "../../components";
import { useCallback, useState } from "react";
import Tabs from "../../components/jobdetails/tabs/Tabs";

const tabs=['About','Qualifications','Responsibilities']
const JobDetails = () => {
    const router=useRouter();
    const params=useSearchParams()
    const {data,isLoading,error,refetch}=useFetch("job-details",{
        job_id:params.id
    });
    
    const [refreshing, setRefreshing] = useState(false)
    const [activeTab,setActiveTab]=useState(tabs[0]);
    const onRefresh=useCallback(()=>{
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    },[])
    const displayTabContent=()=>{
        switch (activeTab) {
            case "Qualifications":
                return <Specifics 
                title="Qualifications"
                points={data[0]?.job_highlights?.Qualifications?data[0].job_highlights.Qualifications:['N/A']}
                />
            case "About":
                return <JobAbout info={data[0]?.job_description ?? [" No Data is Provided"]}/>
            case "Responsibilities":
                return <Specifics 
                title="Responsibilities"
                points={data[0]?.job_highlights?.Responsibilities?data[0].job_highlights.Responsibilities:['N/A']}
                />
            default:
                break;
        }
    }
    let content=null
    if(isLoading){
        content=<ActivityIndicator size="large" color={COLORS.primary}/>
    }
    else if(!isLoading&& error){
        content=<Text style={{paddingLeft:100}}>Some error is happend</Text>
    }
    else if(!isLoading&&!error&&data?.length===0){
        content=<Text style={{paddingLeft:20}}>No job is found</Text>
    }
    else{
        
        content=<View style={{padding:SIZES.medium,paddingBottom:100}}>
            <Company companyLogo={data[0].employer_logo} companyName={data[0].employer_name} jobTitle={data[0].job_title} location={data[0].job_country}/>
            <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            />
            {displayTabContent()}
        </View>
    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={()=>router.back()}/>
            ),
            headerRight:()=>(
                <ScreenHeaderBtn iconUrl={icons.share} dimension="60%"/>
            ),
            
            headerTitle:"",
            headerShadowVisible:false,
            headerBackVisible:false
        }}
        />
        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                {content}
            </ScrollView>
            <JobFooter url={data[0]?.job_google_link??"https://careers.google.com/jobs/results/"}/>
        </>
        
    </SafeAreaView>
  )
}

export default JobDetails