export default function Job(props) {
    console.log(props)
    const currDate = Date.now()
    console.log(currDate)
    return (
        <div className="job-container">
            <img className="company-logo" src={props.job.company_logo} />
            <div className="job-card">

                <div>
                    {props.job.created_at}
                    <span>&#8226;</span>
                    {props.job.type}
                </div>
                <h3>{props.job.title}</h3>
                <div>{props.job.company}</div>
                <h4>{props.job.location}</h4>
            </div>
        </div>
    )
}