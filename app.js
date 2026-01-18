require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubdata = {
  "login": "gauravkhatik",
  "id": 158541600,
  "node_id": "U_kgDOCXMnIA",
  "avatar_url": "https://avatars.githubusercontent.com/u/158541600?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gauravkhatik",
  "html_url": "https://github.com/gauravkhatik",
  "followers_url": "https://api.github.com/users/gauravkhatik/followers",
  "following_url": "https://api.github.com/users/gauravkhatik/following{/other_user}",
  "gists_url": "https://api.github.com/users/gauravkhatik/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gauravkhatik/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gauravkhatik/subscriptions",
  "organizations_url": "https://api.github.com/users/gauravkhatik/orgs",
  "repos_url": "https://api.github.com/users/gauravkhatik/repos",
  "events_url": "https://api.github.com/users/gauravkhatik/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gauravkhatik/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "gauravkhatik",
  "company": null,
  "blog": "",
  "location": "Pune",
  "email": null,
  "hireable": true,
  "bio": "@gauravkhatik",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2024-02-02T04:11:03Z",
  "updated_at": "2025-11-25T12:13:30Z"
}

app.get('/', (req, res)=>{
  res.send('First Page')
})

app.get('/login', (req, res)=>{
  res.send('Required Login')
})


app.get('/user', (req, res) =>{
  res.send("User Authenticate Successfully")
})


app.get('/github', (req, res) => {
  res.json(githubdata)
})


app.listen(process.env.PORT, () =>{ 
  console.log(`The Backend Is Working Proper on port : ${port}`)
})

