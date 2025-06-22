export const getinfo=(transport)=>{
    switch (transport.toLowerCase()) {
        case "cab":
          return { icon: "🚗", color: "from-blue-500 to-blue-600" }
        case "auto":
          return { icon: "🚌", color: "from-green-500 to-green-600" }
        case "train":
          return { icon: "🚆", color: "from-purple-500 to-purple-600" }
        case "flight":
          return { icon: "✈️", color: "from-orange-500 to-orange-600" }
        default:
          return { icon: "🚗", color: "from-gray-500 to-gray-600" }
      }
}

export const formatDate = (dateString) => {
    const options = { weekday: "short", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

export const demodata = [
    {
      id: 1,
      origin: "Chennai",
      destination: "Bangalore",
      date: "2025-06-24",
      time: "08:30 AM",
      transport: "cab",
      seats: 3,
      price: 850,
      user: {
        name: "Rahul Mehta",
        avatar: "",
        rating: 4.7,
      },
    },
    {
      id: 2,
      origin: "Mumbai",
      destination: "Pune",
      date: "2025-06-25",
      time: "01:00 PM",
      transport: "auto",
      seats: 2,
      price: 300,
      user: {
        name: "Sneha Kapoor",
        avatar: "",
        rating: 4.9,
      },
    },
    {
      id: 3,
      origin: "Delhi",
      destination: "Agra",
      date: "2025-06-26",
      time: "06:45 AM",
      transport: "train",
      seats: 4,
      price: 500,
      user: {
        name: "Amit Sharma",
        avatar: "",
        rating: 4.3,
      },
    },
    {
      id: 4,
      origin: "Hyderabad",
      destination: "Goa",
      date: "2025-06-27",
      time: "05:30 PM",
      transport: "flight",
      seats: 1,
      price: 2200,
      user: {
        name: "Priya Nair",
        avatar: "",
        rating: 5.0,
      },
    },
  ]
  