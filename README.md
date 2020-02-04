# trueskill-leaderboard

## Usage

1. `npm install -g git+ssh://git@github.com:UpsideRealty/trueskill-leaderboard.git`

1. `rate "<scores>"` to generate rating. `<scores>` are tab delimited rows of player positions which can be easily retrieved from an excel sheet by simply highlighting the region and copy and pasting. 

    Example:
    ```
    rate "Cookie      Michal  Matt    Kevin
    Matt    Cookie  Nick    Michal
    Matt    Kevin   Nick    Cookie"
   
   [1] Kevin      Rating(mu=30.193, sigma=2.876)
   [2] Cookie     Rating(mu=29.049, sigma=2.893)
   [3] Matt       Rating(mu=25.784, sigma=2.978)
   [4] Nick       Rating(mu=25.099, sigma=2.632)
   [5] Michal     Rating(mu=18.112, sigma=3.687)
    ``` 

## Development

1. `npm install` to install dependencies.

1. `npm run dev` to run `ts-node-dev` to automatically rebuild script on changes.

1. `npm run build` to build


