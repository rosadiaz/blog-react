const BASE_URL = `http://localhost:3000/api/v1`;

export const Post = {
  create(params) {
    return fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json()
    });
  },
  one(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: "GET",
      header: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      return res.json()
    });
  },
  all() {
    return fetch(`${BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => {
      return res.json()
    });
  }
};