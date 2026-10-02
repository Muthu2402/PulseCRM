function StatusPill({value}){
    const label = value.charAt(0) + value.slice(1).toLowerCase().replace("_"," ");
    return <span className="pill" data-status={value}>{label}</span>
}

export default StatusPill;