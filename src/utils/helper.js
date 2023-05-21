export const filterData = (searchText, restaurantList) => {
    const filtered = restaurantList.filter((restaurant) => {
        return restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    })
    return filtered;
}