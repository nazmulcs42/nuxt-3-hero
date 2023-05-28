export default defineEventHandler(async(event)=>{
    const authData = [
        {
            id: 1,
            name: "Nazmul Biswass",
            email: "n.islam@cloudly.io",
            phone: "+8801716129832",
            addresses:[
                {
                    addrType: "Office",
                    Address : "H429, R30, Mohakhali DOHS, Dhaka-1206."
                },
                {
                    addrType: "House",
                    Address: "Chuadanga-7200, khulna."
                }
            ],
            role: {
                id: 1,
                name: "admin",
                isActive: true
            },
            authToken: "23n2jk34454k35jhv45v4k345"
        },
        {
            id: 2,
            name: "Hussain Biswass",
            email: "hussain@cloudly.io",
            phone: "+8801716129888",
            addresses:[
                {
                    addrType: "Office",
                    Address : "H429, R30, Mohakhali DOHS, Dhaka-1206."
                },
                {
                    addrType: "House",
                    Address: "Chuadanga-7200, khulna."
                }
            ],
            role: {
                id: 1,
                name: "admin",
                isActive: true
            },
            authToken: "23n2jk34454k35jhv45v4k346"
        },
        {
            id: 3,
            name: "Aziz Aktar",
            email: "n.islam@cloudly.io",
            phone: "+8801716129835",
            addresses:[
                {
                    addrType: "Office",
                    Address : "H429, R30, Mohakhali DOHS, Dhaka-1206."
                },
                {
                    addrType: "House",
                    Address: "Jhinaidah-3200, khulna."
                }
            ],
            role: {
                id: 1,
                name: "admin",
                isActive: true
            },
            authToken: "23n2jk34454k35jhv45v4k347"
        },
        {
            id: 4,
            name: "Aka Mamun",
            email: "akamamun@cloudly.io",
            phone: "+8801716129831",
            addresses:[
                {
                    addrType: "Office",
                    Address : "H429, R30, Mohakhali DOHS, Dhaka-1206."
                },
                {
                    addrType: "House",
                    Address: "Magura-2100, khulna."
                }
            ],
            role: {
                id: 1,
                name: "admin",
                isActive: true
            },
            authToken: "23n2jk34454k35jhv45v4k348"
        },
        {
            id: 5,
            name: "Ahmed Reza",
            email: "ar009@cloudly.io",
            phone: "+8801716129837",
            addresses:[
                {
                    addrType: "Office",
                    Address : "H429, R30, Mohakhali DOHS, Dhaka-1206."
                },
                {
                    addrType: "House",
                    Address: "Kushtia-1200, khulna."
                }
            ],
            role: {
                id: 1,
                name: "admin",
                isActive: true
            },
            authToken: "23n2jk34454k35jhv45v4k349"
        },
    ]
    //get query params
    // const {id: userId} = getQuery(event);
    // const response = authData.find((auth)=>auth.id == userId);
    //return response;

    //get post data
    // const { phone } = await readBody(event);
    // const response = authData.find((auth)=>auth.phone == phone);
    //return response;

    //get private api data by api key
    //https://api.currencyapi.com/v3/latest?apikey=cG8HuEzIa3kCcXLTuh2Qzd7ZcB93DnLhKbIwbs9q&currencies=EUR%2CUSD%2CCAD
    const akiToken="cG8HuEzIa3kCcXLTuh2Qzd7ZcB93DnLhKbIwbs9q";
    const currencies="EUR%2CUSD%2CCAD";
    const response = await $fetch(`http://api.currencyapi.com/v3/latest?apikey=${akiToken}&currencies=${currencies}`);
    //return response;

    return {
        success: true,
        message: "Data fetched successfully.",
        data: response
    }

});