const tableData = {
  1: {
    status: "success",
    data: {
      transactions: [
        {
          id: "tx_123456789",
          date: "2024-12-24T09:30:00Z",
          to: "John Doe",
          from: "Salary Corp Ltd",
          amount: 5000.0,
          currency: "USD",
          type: "CREDIT",
        },
        {
          id: "tx_123456790",
          date: "2024-12-24T10:15:00Z",
          to: "Amazon",
          from: "John Doe",
          amount: 99.99,
          currency: "USD",
          type: "DEBIT",
        },
        {
          id: "tx_123456791",
          date: "2024-12-24T11:00:00Z",
          to: "John Doe",
          from: "Client Services Inc",
          amount: 2500.0,
          currency: "EUR",
          type: "CREDIT",
        },
        {
          id: "tx_123456792",
          date: "2024-12-24T13:20:00Z",
          to: "Electricity Company",
          from: "John Doe",
          amount: 150.0,
          currency: "USD",
          type: "DEBIT",
        },
        {
          id: "tx_123456793",
          date: "2024-12-24T14:45:00Z",
          to: "John Doe",
          from: "Rental Income LLC",
          amount: 1200.0,
          currency: "USD",
          type: "CREDIT",
        },
      ],
      pagination: {
        current_page: 1,
        total_pages: 10,
        per_page: 5,
        total_items: 47,
        next_page: 2,
        prev_page: null,
      },
    },
    meta: {
      timestamp: "2024-12-24T15:00:00Z",
      api_version: "v1",
      supported_types: ["CREDIT", "DEBIT"],
    },
  },
  2: {
    status: "success",
    data: {
      transactions: [
        {
          id: "tx_123456794",
          date: "2024-12-23T09:30:00Z", // Continuing with 23rd Dec
          to: "FoodMart",
          from: "John Doe",
          amount: 35.25,
          currency: "USD",
          type: "DEBIT",
        },
        {
          id: "tx_123456795",
          date: "2024-12-23T12:45:00Z",
          to: "John Doe",
          from: "Freelance Work Inc",
          amount: 1500.0,
          currency: "USD",
          type: "CREDIT",
        },
        {
          id: "tx_123456796",
          date: "2024-12-22T14:00:00Z", // Now transitioning to 22nd Dec
          to: "Gym",
          from: "John Doe",
          amount: 50.0,
          currency: "USD",
          type: "DEBIT",
        },
        {
          id: "tx_123456797",
          date: "2024-12-22T15:30:00Z",
          to: "John Doe",
          from: "Investment Returns LLC",
          amount: 300.0,
          currency: "USD",
          type: "CREDIT",
        },
        {
          id: "tx_123456798",
          date: "2024-12-22T17:00:00Z",
          to: "Water Supply Co",
          from: "John Doe",
          amount: 75.0,
          currency: "USD",
          type: "DEBIT",
        },
      ],
      pagination: {
        current_page: 2,
        total_pages: 10,
        per_page: 5,
        total_items: 47,
        next_page: 3,
        prev_page: 1,
      },
    },
    meta: {
      timestamp: "2024-12-23T18:00:00Z",
      api_version: "v1",
      supported_types: ["CREDIT", "DEBIT"],
    },
  },
  // Add more pages as needed
};

export default tableData;
