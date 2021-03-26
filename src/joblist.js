import Job from "./job.js"
import React, { useState, useEffect } from "react"
export default function JobCards(){
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () =>{
        const results = await fetch("https://cors.bridged.cc/https://jobs.github.com/positions.json")
        const data = await results.json();
        setJobs(data)
        console.log(data)
        console.log(jobs)
    }
    return(
        <div className="jobs-main-container">
             {jobs && jobs.map(job =>(<Job job={job}/>))}
        </div>
    )
}