import axios from 'axios';

export default {
  name: 'Tab2Page',
  data() {
    return {
      username: "Username",
      height: 165,
      weight: 65,
      hasPulled: false
    };
  }, mounted() {
    console.log("mounted")
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/user?username=exampleUser');
        if(!this.hasPulled){
          this.username =  response.data.username
          this.height =  response.data.height
          this.weight =  response.data.weight
          this.hasPulled = true
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};