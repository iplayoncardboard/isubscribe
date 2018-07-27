export default {


    generateColSource : (colData) => {
        //create array to hold colSource data objects. 
            const dataArray = [];
        //get subscriptionName and price from colData array 
            colData.forEach(element => {
                //create new data object consisting of label , value
                //push object into array
                dataArray.push({
                    label: element.subscriptionName,
                    value: element.price
                });
            });
        
        //return array
            console.log(`DATA ARRAY: ${dataArray}`)
            return(dataArray);
    }


}