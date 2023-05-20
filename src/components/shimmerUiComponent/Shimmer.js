// import "./shimmerUI.component.css"
const ShimmerUI = (units) => {
    return (
        <div className="restaurant-list">
            {Array(units).fill("").map((e) => (<div className="shimmer-card"></div>))}
        </div>
    )
}

export default ShimmerUI;