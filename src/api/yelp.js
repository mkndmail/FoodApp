import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer S9BDqatprB4fMIlw5nmWdpqGQl4MERw1J3zSYDTvNkhlMyeoiFo-2w0qaBau8ZxzmzVKkP-TEnyK5QoSFFDomx5AWlzjJVzMNSkm4JOrLZCjLHysWjiGNM-QjbvvYHYx",
  },
});
