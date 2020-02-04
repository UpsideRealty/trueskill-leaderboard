# trueskill-leaderboard

Usage:

1. `npm install -g git+ssh://git@github.com:UpsideRealty/trueskill-leaderboard.git`

1. `rate "<scores>"` to generate rating. `<scores>` are tab delimited rows of player positions which can be easily retrieved from an excel sheet by simply highlighting the region and copy and pasting. 

    Example:
    ```
    rate "Cookie      Michal  Matt    Kevin
    Matt    Cookie  Nick    Michal
    Matt    Kevin   Nick    Cookie"
    ``` 

Development:

1. `npm install` to install dependencies.

1. `npm run dev` to run `ts-node-dev` to automatically rebuild script on changes.

1. `npm run build` to build


