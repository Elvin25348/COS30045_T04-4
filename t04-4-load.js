
// ==========================================
// T04-4: Load CSV and check the data
// ==========================================


/* Stub: the chart will be implemented in T04-5 */

function createBarChart(data) {
    console.log(
        "createBarChart received",
        data.length,
        "rows"
    );
}


/* Load CSV, convert types, and check the data */

d3.csv("data/tvBrandCount.csv", d => ({
    brand: d.brand,
    count: +d.count
})).then(data => {

    // 1. Display the complete array
    console.log(data);

    // 2. Count the rows
    console.log("rows:", data.length);

    // 3. Find the largest count
    console.log("max:", d3.max(data, d => d.count));

    // 4. Find the smallest count
    console.log("min:", d3.min(data, d => d.count));

    // 5. Find the minimum and maximum
    console.log(
        "extent:",
        d3.extent(data, d => d.count)
    );

    // 6. Sort from largest count to smallest count
    data.sort((a, b) => d3.descending(a.count, b.count));

    // 7. Send the data to the chart stub
    createBarChart(data);

}).catch(error => {

    console.error(
        "Failed to load the CSV. Check the file path, CSV headers, and Live Server.",
        error
    );

});
