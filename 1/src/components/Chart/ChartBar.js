import "./ChartBar.css"
export const ChartBar = props => {
    let barHeight = "0%"
    if (props.max > 0) {

        barHeight = Math.round((props.value / props.max) * 100) + '%'
    }
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div style={{ height: barHeight }} className="chart-bar__fill"></div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    </div>
}