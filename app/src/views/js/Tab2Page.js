import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  name: 'Tab2Page',
  data() {
    return {
      username: "Username",
      height: 165,
      weight: 65,
      bmi: 0,
      hasPulled: false
    };
  }, mounted() {
    console.log("mounted")
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const route = useRoute()
        const passedUser = route.params.username
        const response = await axios.get(`http://localhost:3000/user?username=${passedUser}`);
        if(!this.hasPulled){
          this.username =  response.data.username
          this.height =  response.data.height
          this.weight =  response.data.weight
          this.hasPulled = true

          this.bmi = (response.data.weight/(response.data.height*0.01)**2).toFixed(2)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};