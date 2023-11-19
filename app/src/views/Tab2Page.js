import axios from 'axios';

export default {
  name: 'Tab2Page',
  data() {
    return {
      username: 'Username',
      height: 156,
      weight: 56,
    };
  }, mounted() {
    console.log("mounted")
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/user?username=exampleUser');
        this.username =  response.data.username
        this.height =  response.data.height
        this.weight =  response.data.weight

      } catch (error) {
        // Handle signup error (e.g., show an error message)
        console.error('Error fetching data:', error);
      }
    },
  },
};