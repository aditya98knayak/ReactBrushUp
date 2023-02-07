import { ChartBar } from "./ChartBar"
import "./Chart.css"
export const Chart = props => {
    const values = props.dataPoints.map(dp => dp.value)
    console.log("🚀 ~ file: Chart.js:5 ~ Chart ~ values", values)
    const max = Math.max(...values)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} max={max} label={dataPoint.label} />)}
        </div>

    )
}